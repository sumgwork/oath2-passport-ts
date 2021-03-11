import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const uri = `${process.env.MONGODB_START}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_END}`;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected!");
  }
);

app.get("/", (req: any, res: any) => {
  res.send("HELLOOO");
});

app.listen(4000, () => {
  console.log("Server started");
});
