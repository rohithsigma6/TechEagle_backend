const router = require('express').Router()
const controller= require('../controllers/controller')
const {verifyUser}= require('../../../middlewares/auth')
router.post('/createCart',verifyUser,controller.CreateCart)
router.get('/getCartItems',verifyUser,controller.GetCart)
router.patch('/addCartItems',verifyUser,controller.AddToCart)
router.post('/removecartitem',verifyUser,controller.RemoveFromCart)
router.delete('/deletecart',verifyUser,controller.deleteCart)
module.exports = router