import express from "express";
import MessageSchema from "../schemas/MessageSchema.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await MessageSchema.find();
  res.send(messages);
});

router.post("/", async (req, res) => {
  const { username, message, ip } = req.body;
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const existingMessage = await MessageSchema.findOne({ ip, createdAt: { $gte: oneHourAgo } });
  if (existingMessage) {
    return res.status(400).send({ error: "A message from this IP address already exists within the last hour." });
  }
  const newMessage = new MessageSchema({
    username,
    message,
    ip,
  });
  await newMessage.save();
  res.send(newMessage);
});

export default router;
