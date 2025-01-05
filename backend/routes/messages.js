import express from "express";
import MessageSchema from "../schemas/MessageSchema.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await MessageSchema.find();
  res.send(messages);
});

router.post("/messages", async (req, res) => {
  const { username, message, ip } = req.body;
  const newMessage = new MessageSchema({
    username,
    message,
    ip,
  });
  await newMessage.save();
  res.send(newMessage);
});

export default router;
