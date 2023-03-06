/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    addCategory:async (req,res)=>{
        try{
        const {name}= await req.body;
        const newcategory = await Category.create({
            name,
           
          }).fetch()
          console.log(newcategory);
        return res.status(200).json({
            message:"Category Added Successfully"
        })
    }catch(error){
        return res.status(200).json({
            message:"category not added",
            error:error
        })
    }
}

};

