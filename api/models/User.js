
const {roles}=sails.config.constants;

module.exports.User = {
  User: {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      isEmail: true,
    },

    password: {
      type: "String",
      required: true,
    },
    role:{
      type:"String",
      isIn:[roles.User,roles.Admin],
      defaultsTo:roles.User,
    }
  },
};
