import { Schema, mongoose } from "mongoose";

const contentModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentModel);

export default Content;
