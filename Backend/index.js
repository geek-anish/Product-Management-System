console.log("hi i am backend");
/* make express app
make app listen to port
 */

import express, { json } from "express";
import { port } from "./src/config.js";

import productRoutes from "./src/routes/productRoutes.js";

import pagenotfoundmiddleware from "./src/middleware/pagenotfound.mjs";
import errormiddleware from "./src/middleware/errorMiddleware.js";
import connectToMongoDb from "./src/connectToDb/connectToMongoDb.js";
import userRoutes from "./src/routes/userRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";
import fileRoutes from "./src/routes/fileRoute.js";
import cors from "cors";

const app = express();

app.listen(port, () => {
  connectToMongoDb();
  console.log(`application is listening  at port ${port} `);
});

app.use(cors()); // it enables browser to hit api
app.use(json()); //making system capable to take json // always place this code in top level;

app.use(express.static("public"))  //localhost:8000/img.jpg

//app middleware
// app.use((req,res,next)=>{console.log("i am application middleware 1");next();},
// (req,res,next)=>{console.log("i am application middleware 2");next();})

app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/review", reviewRoutes);
app.use("/file",fileRoutes)






// page not found middleware

app.use("", pagenotfoundmiddleware);
app.use(errormiddleware);
