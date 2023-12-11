
const {Cart} = require('../index')
const {Product} = require('../../productModel/index')
const {User} = require('../../userModel/index')
module.exports.CreateCart = async (req, res) => {

  try {
   const userDetails = await User.findOne({phoneNumber:req.body.userId})
    const isUser = await Cart.findOne({user:userDetails._id})
    if(!isUser){
    const cart =await Cart.create({ user: userDetails._id, items: [] });
    }
    return res.json({ success: true, message: "Cart creation successful" })
  } catch (error) {
    console.log('Error creating cart:', error);
    return res.json({ success: false, message: "Cart ceation failed" })
  }
};


module.exports.GetCart = async (req, res) => {
  try {
    const userDetails = await User.findOne({phoneNumber:req.body.userId})
    const cart = await Cart.findOne({ user: userDetails._id }).populate('items.product');
    res.json(cart);
  } catch (error) {
    console.error('Error getting cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports.AddToCart = async (req, res) => {
    try {
      const userDetails = await User.findOne({ phoneNumber: req.body.userId });
      const { productId, quantity } = req.body;
  
      const cart = await Cart.findOne({ user: userDetails._id });
  
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
  
      let existingCartItem = cart.items.find((item) => item.product.equals(productId));
  
      if (existingCartItem) {
        
        existingCartItem.quantity += quantity;
      } else {
       
        cart.items.push({ product: productId, quantity });
      }
  
      await cart.save();
  
      res.json(cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports.RemoveFromCart = async (req, res) => {
    
  try {
    
    const userDetails = await User.findOne({ phoneNumber: req.body.userId });
 

    const cart = await Cart.findOne({ user:userDetails._id  });
    console.log("CART IS ",cart)
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    console.log(cart)
    cart.items = cart.items.filter((item) => item.product.toString() !== req.body.productId);
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports.deleteCart=async(req,res)=>{
    try {
        const userDetails = await User.findOne({phoneNumber:req.body.userId})
         const isUser = await Cart.findOne({user:userDetails._id})
         const cart =await Cart.findByIdAndDelete({_id:isUser._id}); 
         return res.json({ success: true, message: "Cart deletion successful" })
       } catch (error) {
         console.log('Error creating cart:', error);
         return res.json({ success: false, message: "Cart ceation failed" })
       }
     };
