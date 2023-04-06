const express = require('express');

const register = require('../Controllers/register');
const login = require('../Controllers/login');
const getUserById = require('../Controllers/getUserById');

// llamamos al objeto router express
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', getUserById);

// router.delete('./delete/id', sorteoController.deleteSorteo);

module.exports = router;