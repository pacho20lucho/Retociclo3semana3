/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
const controller = require('./controllers/UserController.js');
const express = require('express'); 
const morgan = require('morgan');

const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods:GET, POST, PUT, DELETE');
    next();
});

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRouter);




// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/

// app.get('/api/users',(req,res) => {
//     db.user.findAll().then(users => res.json(users))
//     });

// app.get('/',function(req,res) {
//     db.user.findAll().then(users => res.json(users))
//     });

// app.post('/api/auth/signin', controller.signin);

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'),() => {
    console.log(`Running on http://localhost:${app.get('PORT')}`);
})


module.exports = app;





