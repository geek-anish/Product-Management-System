import { Router } from "express";
import { Product } from "../schema/model.js";
import { createProductController, deleteProductController, productDetailsController, readAllProductController, updateProductController } from "../controller/productController.js";
const productRoutes = Router();

productRoutes
  .route("/") // localhost:8000
  .post(createProductController)

  .get(readAllProductController);

productRoutes
  .route("/:id")
  .get(productDetailsController )
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRoutes;
