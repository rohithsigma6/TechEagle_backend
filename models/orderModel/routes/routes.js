const router = require('express').Router()
const controller= require('../controllers/controller')
const {verifyUser}= require('../../../middlewares/auth')
router.post('/createorder',verifyUser,controller.CreateOrder)
router.get('/getorders',verifyUser,controller.GetOrders)
router.get('/getAllOrders',verifyUser,controller.getAllOrdersAdmin)
router.patch('/updateorder',verifyUser,controller.UpdateOrderStatus)
module.exports = router