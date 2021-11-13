// lib's
const express = require('express')

// Routes
const UserController = require('./controllers/UserController')
const UserDeleteController = require('./controllers/UserDeleteController')
const UserFindController = require('./controllers/UserFindController')
const UserUpdateController = require('./controllers/UserUpdateController')

const routes = express.Router(); 

routes.use(express.json());

// Route create User
routes.post('/register', UserController.store);
// Route Delete user  
routes.delete('/delete/:id', UserDeleteController.delete); 
// Route Find all user
routes.get('/search', UserFindController.read);
// Route Update User
routes.put('/update/:id', UserUpdateController.update)


// // ================================================================
// routes.post('/addlocation', AddlocationController.store);  
// routes.get('/addlocation', AddlocationController.index);  

// routes.post('/sessions/:sessions_id/addingagecontroller', AddingAgeController.store);
// routes.post('/sessions/:sessions_id/addingagecontroller', AddingAgeController.store);

module.exports = routes;


