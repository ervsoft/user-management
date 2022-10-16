const express = require('express');
const auth = require('../middleware/auth');
const { create, index, detail, remove, login, logout, profile } = require('../controller/Projects');
const router = express.Router();


//router.get('/users/', auth, index);
router.get('/users', index);
router.post('/user/create', auth, create);
router.get('/show/:id', auth, detail);
router.delete('/:id', auth, remove);
router.post('/auth', login);
router.get('/auth', auth, profile);
router.post('/logout', logout);

module.exports = router;
