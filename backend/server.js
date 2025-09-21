import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hey");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server strted at 5000");
});
