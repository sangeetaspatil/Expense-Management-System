const router = require('express').Router();

const { userRegister, userLogin } = require('../controllers/user')

router.post('/login', userLogin)

router.post('/register', userRegister)




module.exports = router