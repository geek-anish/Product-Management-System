import { Router } from "express";
import { fileController } from "../controller/fileController.js";
import upload from "../utils/upload.js";

const fileRoutes = Router();

fileRoutes
  .route("/single") // localhost:8000
  .post(upload.single("docs"),fileController)

  
export default fileRoutes
