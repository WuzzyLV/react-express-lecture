import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import messages from "./routes/messages.js";
import votes from "./routes/votes.js";
import MessageSchema from "./schemas/MessageSchema.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

// Routes //
app.use("/messages", messages);
app.use("/votes", votes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    const PORT = process.env.PORT || 3000;
    console.log(`Server running on port ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
