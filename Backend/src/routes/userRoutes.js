import { Router } from "express";
import { createUserController, deleteUserController, loginController, myProfileController, readAllUserController, updateUserController, userDetailsController } from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const userRoutes = Router();

userRoutes
  .route("/") // localhost:8000
  .post(createUserController)

  .get(readAllUserController);

  userRoutes
  .route("/login")
  .post(loginController)

  userRoutes
  .route("/my-profile")
  .get(isAuthenticated,myProfileController)

userRoutes
  .route("/:id")
  .get(userDetailsController )
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRoutes;