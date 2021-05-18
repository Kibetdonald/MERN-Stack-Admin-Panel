const { signup } = require('../controller/auth');

const { signin } = require('../controller/auth');

const router = require('express').Router();




//set up the routes


router.get('/signin', signin);
router.get('/signup', signup);
module.exports = router;