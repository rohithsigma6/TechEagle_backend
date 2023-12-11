const {Order} = require('../index')
const {Product} = require('../../productModel/index')
const {User} = require('../../userModel/index')

module.exports.GetOrders = async (req, res) => {
    try {
      const userDetails = await User.findOne({phoneNumber:req.body.userId})
      const orders = await Order.find({ user: userDetails._id }).populate('products.product');
     console.log("ordewrs",orders)
     return res.json({ success: true, message: "fetched successfully" ,orders:orders})
      
    } catch (error) {
      console.error('Error getting cart:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports.CreateOrder = async (req, res) => {
console.log("!!!!!!")
    try {
     const userDetails = await User.findOne({phoneNumber:req.body.userId})
      
    const orders =await Order.create({ user: userDetails._id, products:req.body.products,totalAmount:req.body.totalAmount,address:req.body.address });
    console.log(orders)
      
      return res.json({ success: true, message: "Cart creation successful" })
    } catch (error) {
      console.log('Error creating cart:', error);
      return res.json({ success: false, message: "Cart ceation failed" })
    }
  };
  module.exports.getAllOrdersAdmin=async(req,res)=>{
    try {
        const orders = await Order.find().populate('products.product', 'productName quantity price');
        console.log(orders)
        res.json({ orders });
      } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }
  
  module.exports.UpdateOrderStatus = async (req, res) => {
    try {
      const { orderId, status } = req.body;
  
      const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
  
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      res.json({ order });
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

