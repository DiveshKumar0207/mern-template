import mongoose, { model, Schema, Document } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enums: ["user", "admin"],
    default: "user",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        expires: "30d", // TTL index to automatically expire after 30 days
        default: Date.now,
      },
    },
  ],
});

export default model("user", userSchema);
