import { secretKey } from "../config.js";
import { User } from "../schema/model.js";
import { sendEmail } from "../utils/sendMail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserController = async (req, res, next) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const result = await User.create(req.body);

  await sendEmail({
    to: req.body.email,
    subject: "My first system email",
    html: `<h1>Hello world</h1>`,
  });

  res.json({
    success: true,
    message: "user created sucessfully",
    result: result,
  });
};

export const readAllUserController = async (req, res, next) => {
  const result = await User.find({});
  res.json({
    sucesss: true,
    message: "user read successfully",
    result: result,
  });
};
export const userDetailsController = async (req, res, next) => {
  let result = await User.findById(req.params.id);
  res.json({
    sucesss: true,
    message: "user read sucessfully",
    result: result,
  });
};
export const updateUserController = async (req, res, next) => {
  let result = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    sucesss: true,
    message: "user updated sucessfully",
    result: result,
  });
};
export const deleteUserController = async (req, res, next) => {
  let result = await User.findByIdAndDelete(req.params.id);

  res.json({
    sucesss: true,
    message: "user deleted sucessfully",
    result: result,
  });
};

export const loginController = async (req, res, next) => {
  // check if that email exist or not

  let result = await User.findOne({ email: req.body.email });

  console.log(result);

  if (result === null) {
    res.status(401).json({
      sucess: false,
      message: "user not found",
    });
  } else {
    // check postman password and database password
    let isValidUser = await bcrypt.compare(req.body.password, result.password);
    if (!isValidUser) {
      res.status(401).json({
        sucess: false,
        message: "user not found",
      });
    } else {
      let info = {
        id: result._id,
      };
      let expiryInfo = {
        expiresIn: "365d",
      };
      let token = jwt.sign(info, secretKey, expiryInfo);

      res.status(200).json({
        sucess: true,
        message: "user login sucess",
        result: result,
        token: token,
      });
    }
  }

  // if not exist
  // throw error
  // if exist
  // check postman password and database password
  // if not match
  // throw error
  // if matched
  // send response as login sucessfully
};

export const myProfileController = async (req, res, next) => {
  //deatil

  let result = await User.findById(req.id);
  res.json({
    sucess: true,
    message: "my profile read sucessfully",
    result: result,
  });
};
