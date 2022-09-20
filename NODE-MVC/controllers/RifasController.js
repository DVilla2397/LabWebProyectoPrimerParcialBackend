const req = require('express/lib/request');
let RifaModel = require("../models/Rifa.js");

exports.create = (req, res) => {
  res.render("rifas/create");
};

exports.store = (req, res) => {
  console.log(req.body)
  let rifa = {
    boleto: req.body.boleto,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    telefono: req.body.telefono
  };

  RifaModel.create(rifa).then((id) => {
    res.redirect("/");
  });
};

exports.show = (req, res) => {
  let boleto = req.params.boleto;

  RifaModel.find(boleto).then((rifa) => {
    if (rifa == null) {
      res.status(404).send("Error");
      return;
    }

    res.render("rifas/show", { rifa: rifa });
  });
};

exports.buscar = (req, res) => {
  let boleto = {
    boleto: req.body.boleto
  };

  RifaModel.find(req.body.boleto).then((rifa) => {
    if (rifa == null) {
      // Regresa el error 404
      res.status(404).send("Error");
      return;
    }
    console.log(rifa.nombre)
    if(rifa.nombre == ''){
      return res.render("rifas/edit", { rifa: rifa });
    }
    let regalo1 = rifa.boleto.substring(0,1);
    let regalo2 = rifa.boleto.substring(1,2);
    let regalo3 = rifa.boleto.substring(2,3);
    let regalo4 = rifa.boleto.substring(3,4);
    let regalo5 = rifa.boleto.substring(4,5);
    res.render("pages/aleatorio", {rifa: rifa, regalo1:regalo1,regalo2:regalo2,regalo3:regalo3,regalo4:regalo4,regalo5:regalo5});
  });
};

exports.update = (req, res) => {
  let boleto = req.body.boleto;

  RifaModel.find(boleto).then((rifa) => {
    if (rifa == null) {
      res.status(404).send("Error");
      return;
    }

    let updateRifa = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      telefono: req.body.telefono
    };
    console.log(updateRifa);

    RifaModel.update(rifa.boleto, updateRifa).then((boleto) => {
      res.render('pages/aleatorio', {rifas: rifas});
    });
  });
};

exports.delete = (req, res) => {
  let boleto = req.params.boleto;
  RifaModel.find(boleto).then((rifa) => {
    if (rifa == null) {
      res.status(404).send("Error");
      return;
    }

    RifaModel.delete(rifa.boleto).then((boleto) => {
      res.redirect("/");
    });
  });
};
