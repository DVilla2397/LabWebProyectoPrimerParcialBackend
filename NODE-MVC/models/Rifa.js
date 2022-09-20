
const knex = require('../database/connection');


exports.factory = (boleto, nombre, apellido, correo, telefono) => {
  return {
    boleto: boleto,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
  }
}


exports.all = () => {
  
  return knex
    .select('*')
    .from('rifa');
}

exports.create = (rifa) => {
    return knex('rifa')
      .insert({
        boleto: rifa.boleto,
        nombre: rifa.nombre,
        apellido: rifa.apellido,
        correo: rifa.correo,
        telefono: rifa.telefono
      });
}

exports.find = (id) => {
    return knex
      .select('*')
      .from('rifa')
      .where('id', id)
      .first();
  }

exports.update = (id, rifa) => {
    return knex('rifa')
      .update(rifa)
      .update('updated_at', knex.fn.now())
      .where('id', id);
}

exports.delete = (id) => {
    return knex('rifa')
      .delete()
      .where('id', id);
  }