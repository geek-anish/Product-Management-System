import { Schema } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
     
    },
    email: {
      type: String,
      required: [true, "string is required"],
       unique: true,
    },
    password: {
      type: String,
      required: [true, "number is required"],
    },
    profileImage: {
      type: String,
      required: [true, "string is required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

export default userSchema;
