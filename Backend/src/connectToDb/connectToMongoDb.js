import mongoose from "mongoose";
import { dbUrl } from "../config.js";

const connectToMongoDb = async() => {
  // connect our application with mongodb database
  await mongoose.connect(dbUrl);
  console.log("application is connected with database sucessfully");
};

export default connectToMongoDb;
