exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rifa').del()
    .then(function () {
      // Inserts seed entries
      return knex('rifa').insert([
        { nombre: 'David', apellido: 'Villanueva', correo: 'dv@gmail.com', telefono: '8923672300', boleto:'1354', regalo:'9520'},
        { nombre: 'Karla', apellido: 'Garcia', correo: 'kag@gmail.com', telefono: '5634768732', boleto:'5274', regalo:'4328' },
        { nombre: 'Carlos', apellido: 'Miranda', correo: 'cm@gmail.com', telefono: '5526634596', boleto:'5064', regalo:'4995' },
        { nombre: 'Alfredo', apellido: 'Torres', correo: 'at@gmail.com', telefono: '5542158965', boleto:'4132', regalo:'6940' },
        { nombre: 'Oscar', apellido: 'Belmont', correo: 'ob7@gmail.com', telefono: '5647512813', boleto:'9131', regalo:'5828' },
        { nombre: 'Valentina', apellido: 'Elizalde', correo: 'vete_ya@gmail.com', telefono: '5698741256', boleto:'7239', regalo:'2906' },
        { nombre: 'Arturo', apellido: 'Lopez', correo: 'al@gmail.com', telefono: '5554120851', boleto:'2776', regalo:'4741' },
        { nombre: 'Adriana', apellido: 'Urueta', correo: 'auau@gmail.com', telefono: '5547145824', boleto:'4188', regalo:'1649' },
        { nombre: 'Andre', apellido: 'Pott', correo: 'ap@gmail.com', telefono: '7712626804', boleto:'8538', regalo:'7831' },
        { nombre: 'Rosa', apellido: 'Ayala', correo: 'rarara@gmail.com', telefono: '5544631073', boleto:'1890', regalo:'9014' },
        { nombre: 'Santiago', apellido: 'Rosales', correo: 'sarro@gmail.com', telefono: '5526634012', boleto:'8555', regalo:'6598' },
        { nombre: 'Daniel', apellido: 'Rossi', correo: 'daro@gmail.com', telefono: '5587237656', boleto:'7060', regalo:'8197' },
        { nombre: 'Enrique', apellido: 'Gutierrez', correo: 'egu@gmail.com', telefono: '5573324340', boleto:'4454', regalo:'5335' },
        { nombre: 'Alexis', apellido: 'Villegas', correo: 'alvi@gmail.com', telefono: '5526173824', boleto:'3327', regalo:'5600' },
        { nombre: 'Janin', apellido: 'Corona', correo: 'jaco@gmail.com', telefono: '5516297060', boleto:'2248', regalo:'7748' }
      ]);
    });
};