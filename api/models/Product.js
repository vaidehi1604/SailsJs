module.exports.Product = {
  Product: {
    product: {
      type: "String",
      required: true,
    },
    quantity: {
      type: "Number",
      required: true,
    },
    category: {
      collection: "category",
    },
  },
};
