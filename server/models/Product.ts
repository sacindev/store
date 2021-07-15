import {Schema, model} from 'mongoose'

var ProductSchema = new Schema({
  name: String,
  description: String,
  image: String,
  price: String,
  categorie: {
    type: String,
    enum: ["GPU","SSD", "RAM", "HDD", "CPU"],
    required: true
  },
});

export const Product = model("Product", ProductSchema);
