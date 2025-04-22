const express = require('express');
const router = express.Router();

const loginRoutes = require('./login');
const signUpRoutes = require('./signUp');

router.use('/login', loginRoutes);
router.use('/signup', signUpRoutes);

module.exports = router;
