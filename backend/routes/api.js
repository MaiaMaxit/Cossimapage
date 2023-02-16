var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novededesModel');

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

module.exports = router;