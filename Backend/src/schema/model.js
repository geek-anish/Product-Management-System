import { model } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import reviewSchema from "./reviewSchema.js";


export const Product = model("Product", productSchema);
export const User = model("User", userSchema);
export const Review = model("Review", reviewSchema);




/* 
always name table name as first letter capital

*/
