var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novededesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next){
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedad.img_id, {
        width:100,
        height: 100,
        crop: 'fill'
    });
    return{
        ...novedad,
        imagen
    }
} else{
    return {
        ...novedad,
        imagen: ''
    }
}
});

    res.json(novedades);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'maiamaxit@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} Se contacto para tener infomacion de sus servicios: ${req.body.email} <br> 
        Ademas, dijo: ${req.body.mensaje}<br> Su numero de contacto es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;