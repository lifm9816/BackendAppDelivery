const userController = require('../controllers/userControllers');

module.exports = (app) => {
    //GET -> Obtener datos
    //POST -> Almacenar datos
    //PUT -> Actualizar datos
    //DELETE -> Eliminar datos

    app.post('/api/users/create', userController.register)
    app.post('/api/users/login', userController.login)
}