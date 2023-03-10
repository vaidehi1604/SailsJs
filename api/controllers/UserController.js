const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  //User signup

  userSignup: async (req, res) => {
    const lang = req.getLocale();
    const { name, email, password } = req.body;

    //check email already exist or not

    const user = await User.find({ email });
    if (user.length >= 1) {
      //conflict -409
      return res.status(409).json({
        message: sails.__("email", lang),
      });
    }

    //generate hash code for password

    bcrypt.hash(password, 10, async (err, hash) => {
      const lang = req.getLocale();

      try {
        const newUser = await User.create({
          name,
          email,
          password: hash,
        }).fetch();
        return res.status(201).json({
          message: sails.__("authsuccess", lang),
        });
      } catch (error) {
        error: error;
      }
    });
  },

  //Login User

  userLogin: async (req, res) => {
    const lang = req.getLocale();

    try {
      //   console.log(req.body);
      const { email, password } = await req.body;
      console.log(password);

      const user = await User.findOne({ email: email });
      console.log(user);
      // console.log(user.password);

      const checkpass = await bcrypt.compare(password, user.password);
      if (checkpass === true) {
        token = await jwt.sign({ email, password }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });
      }
      console.log(user._id);
      await User.updateOne({ email: email }, { token: token });
      console.log(token);
      return res.status(200).json({
        message: sails.__("token", lang),
        token: token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: sails.__("notToken", lang),
      });
    }
  },

  // Logout user
  userLogout: async (req, res) => {
    try { const {id}=req.params;
      // const Email = req.userData.;
      // req.headers["Authorization"] = null;
      // console.log(Email);
      // console.log(email);
      const user = await User.findOne(id);
      console.log(user);
      user.token="";
      return res.status(200).json({
        message: "user logged out successfully",
      });

    } catch (error) {
        error: error;
      }
  },
};
