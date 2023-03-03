const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  userSignup: async (req, res) => {
    const lang = req.getLocale();
    const { name, email, password } = req.body;

//check email already exist or not

    const user = await User.find({ email }).then((User) => {
      if (User.length >= 1) {
        //conflict -409
        return res.status(409).json({
          message: sails.__("email", lang),
        });
      }
    });

//generate hash code for password

    bcrypt.hash(password, 10, async (err, hash) => {
      try {
        const newUser = await User.create({
          name,
          email,
          password: hash,
        }).fetch()
        return res.status(201).json({
          message: sails.__("authsuccess", lang),
        });
      } catch (error) {
        error: error + "hello";
      }
    });
  },

//login user

  userLogin: async (req, res) => {
    try {
      const lang = req.getLocale();
      //   console.log(req.body);
      const { email, password } = req.body;
        console.log(password);
      
      const user = await User.findOne({ email: email });
      //   console.log(user);
        console.log(user.password);
 
      const checkpass = await bcrypt.compare(password, user.password);
      if (checkpass == true) {
        token = jwt.sign({ email, password }, "h1y2u3v7zxvsgdjiruwk");
      }
      User.updateOne({ _id: user._id }, { token: token });
      console.log(token);
      return res.status(200).json({
        message: sails.__("toke", lang),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: sails.__("notToken", lang),
      });
    }
  },
};
