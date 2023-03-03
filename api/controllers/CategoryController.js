/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    addCategory:async (req,res)=>{
        const {name,}=req.body;
        const newcategory = await Category.create({
            name,
           
          }).fetch()
        return res.status(200).json({
            message:"Category Added Successfully"
        })
    }

};

