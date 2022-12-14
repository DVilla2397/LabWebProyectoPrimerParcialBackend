// index.js
// Importa el paquete de express
let express = require('express');
// Obtiene una instancia de express
let app = express();

let bodyParser = require ("body-parser")

// Importa las configuraciones
let appRoutes = require('./routes/app');

let appConfig = require('./configs/app');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))

// Define que configuraciones de rutas se van a utilizar para la ruta
app.use('/', appRoutes);

// Configuraciones de las vistas
let exphbs = require('express-handlebars');
// Define la extensión que se va a utilizar para los archivos que representan
// las vistas
const extNameHbs = 'hbs';
// Crea una instancia de hbs con las conifugraciones definidas
let hbs = exphbs.create({extname: extNameHbs});
// Establece el uso de handlebars dentro de express.js
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
  console.log(`App listening on port ${appConfig.express_port}! (http://localhost:${appConfig.express_port})`);
});