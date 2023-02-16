var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novededesModel');

router.get('/novedades', async function (req, res, next){
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.determinePacket(novedades)
    res.json(novedades);
});

module.exports = router;