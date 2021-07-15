import {Schema, model} from 'mongoose'


var CategorieSchema = new Schema({
  name: String,
});

export const Categorie = model("Categorie", CategorieSchema);
