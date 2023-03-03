/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    addProduct:async (req,res)=>{
        const {product,quantity}=req.body;
        const newProduct = await Product.create({
            product,
            quantity,
          }).fetch()
        return res.status(200).json({
            message:"Product Added Successfully"
        })
    }

};

