import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler, notFoundHandler } from "./utils/errorHandler";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI = "mongodb://127.0.0.1:27017/task";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/tasks", taskRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
