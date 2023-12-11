const router = require('express').Router()
const controller= require('../controllers/controller')
const {verifyUser}= require('../../../middlewares/auth')
router.post('/register',controller.Register)
router.post('/login',controller.Login)
router.post('/getuser',controller.GetUser)
module.exports = router
