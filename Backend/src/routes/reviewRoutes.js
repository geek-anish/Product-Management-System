import { Router } from "express";
import { createReviewController, deleteReviewController, readAllreviewController, reviewDetailsController, updateReviewController } from "../controller/reviewController.js";

const reviewRoutes = Router();

reviewRoutes
  .route("/") // localhost:8000
  .post(createReviewController)

  .get(readAllreviewController);

reviewRoutes
  .route("/:id")
  .get(reviewDetailsController )
  .patch(updateReviewController)
  .delete(deleteReviewController);

export default reviewRoutes;