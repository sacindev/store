import mongoose from "mongoose"

const URI = "mongodb://localhost:27017/test";

export async function run(){
  await mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db: any) => console.log("Db is connected"))
  .catch((error: any) => console.error(error));
}


