const path = require('path');
let RifaModel = require('../models/Rifa.js')

exports.registrar = (req, res) => {
  res.render('rifas/create');
}

exports.aleatorio = (req, res) => {
  res.render('pages/aleatorio');
}

exports.codigo = (req, res) => {
  res.render('pages/boletoreferencia');
}

exports.homepage = (req, res) => {
  
  RifaModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let rifas = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { rifas: rifas });
    });
}

exports.about = (req, res) => {
  res.send('About us');
}