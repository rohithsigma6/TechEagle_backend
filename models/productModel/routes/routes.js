const router = require('express').Router()
const controller= require('../controllers/controller')
const {verifyUser}= require('../../../middlewares/auth')
router.get('/getAllProducts',controller.GetAllProducts)
router.post('/getSingleProduct',verifyUser,controller.GetSingleProduct)
router.post('/addProduct',verifyUser,controller.AddProduct)
router.patch('/updateProduct/:id',verifyUser,controller.UpdateProduct)
router.delete('/deleteProduct/:id',verifyUser,controller.DeleteProduct)

module.exports = router
  