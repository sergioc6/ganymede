const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  sku: { type: Number, required: true },
  name: { type: String, required: true, max: 255 },
  price: { type: Number, required: true },
  original_price: { type: Number, required: false },
  product_category_id: { type: String, required: true },
  description: { type: String, required: false },
  images: { type: Array, required: false },
  related_search: { type: String, required: false},
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
