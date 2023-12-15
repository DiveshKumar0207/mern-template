import dotenv from "dotenv";
dotenv.config();

export const DbUrl = process.env.mongoURL;
