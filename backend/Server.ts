import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/ToDoRoute";
require("dotenv").config();

const app = express();
const PORT = process.env.port || 3010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Listening on port 3010");
    });
  })
  .catch((err) => console.log(err));
