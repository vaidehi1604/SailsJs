/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

    addProduct:async (req,res)=>{
    const lang = req.getLocale();

        const {product,quantity,price,category}=req.body;
        const newProduct = await Product.create({
            product,
            quantity,
            price,
            category
          }).fetch()
        return res.status(200).json({
        message: sails.__("productAdd", lang),

        })
    }

};

