
let router = require('express').Router();

let PagesController = require('../controllers/PagesController');
let RifasController = require('../controllers/RifasController');
let DashboardController = require('../controllers/DashboardController');


router.get('/', PagesController.homepage);


router.get('/about', PagesController.about);

router.get('/rifas/create', RifasController.create);

router.get('/pages/aleatorio', PagesController.aleatorio);

router.post('/rifas', RifasController.store); 

router.get('/rifas/:id', RifasController.show);

router.post('/buscar', RifasController.buscar); 

router.put('/rifas/:id', RifasController.update); 

router.get('/pages/boletoreferencia', PagesController.codigo);

router.delete('/rifas/:id', RifasController.delete); 

router.get('/pages/dashboard', DashboardController.dashboard); 

module.exports = router;