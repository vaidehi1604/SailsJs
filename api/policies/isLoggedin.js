const jwt=require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

module.exports = async (req, res) => {
      try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decode = jwt.verify(token, 'h1y2u3v7zxvsgdjiruwk');
    
        req.userData = decode;
        console.log(decode);
      } 
      catch (error) {
        return res.status(401).json({
          message: "authentication failed!!",
        });
      }
    }