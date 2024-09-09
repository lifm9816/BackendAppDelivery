const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

/* 
    Importar Rutas
*/

const userRoutes = require('./routes/userRoutes')

const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

/*
    Llamado de las rutas
*/

userRoutes(app);

server.listen(3000, "0.0.0.0" || 'localhost', function(){
    console.log('Aplicación de NodeJS ' + port + ' Iniciada')
});

app.get('/', (req, res) => {
    res.send('Ruta raíz del backend');
})

app.get('/test', (req, res) => {
    res.send("Esta es la ruta TEST");
})

//Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

//200 - Es una respuesta exitosa
//404 - Significa que la URL no existe
//500 - Error interno del servidor