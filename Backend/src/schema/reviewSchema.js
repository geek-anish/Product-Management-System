import { Schema } from "mongoose";

const reviewSchema = Schema(
  {
    product: {
      type: Schema.ObjectId,
      ref: "Product",
      required: [true, "name is required"],
    },
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: [true, "string is required"],
    },
    description: {
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

export default reviewSchema;
