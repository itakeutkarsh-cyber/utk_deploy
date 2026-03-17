import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: boolean,
    default: false,
  },
  createdbBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sub_Todo",
    },
  ],
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);