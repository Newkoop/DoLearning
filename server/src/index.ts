import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/DoLearning", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });


app.use("/images", express.static(path.join(__dirname, "assets", "thumbs")));
app.use("/posters", express.static(path.join(__dirname, "assets", "poster")));

