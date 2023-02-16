var express = require('express');
var router = express.Router();
var novedadesModel = require('-/../../models/novededesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader =util.promisify(cloudinary.uploader.upload);

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
})

router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body, titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
            
            await novedadesModel.insertNovedades({
                ...req.body,
                img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Se requiere completar todos los campos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render ('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se ha podido cargar'
        })
    }
})

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades')
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesModel.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('modificar', async (req, res, next) => {
    try {
        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    }
    catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true, message: 'No se ha podido modificar la opinion'
        })
    }
})

module.exports = router;