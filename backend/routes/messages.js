import express from "express";
import MessageSchema from "../schemas/MessageSchema.js";
const router = express.Router();

const MESSAGE_COOLDOWN = 10 * 1000; // 1hour

router.get("/", async (req, res) => {
  const messages = await MessageSchema.find({}, { ip: 0, __v: 0, updatedAt: 0 }).sort({ createdAt: -1 });
  res.send(messages);
});

router.get("/can-send", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const existingMessage = await MessageSchema.findOne({
    ip: ip,
    createdAt: { $gte: new Date(Date.now() - MESSAGE_COOLDOWN) },
  });
  res.send({
    canSend: !existingMessage,
    timeToWait: existingMessage ? MESSAGE_COOLDOWN - (Date.now() - existingMessage.createdAt) : 0,
  });
});

router.post("/", async (req, res) => {
  const { title, message } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  if (!title || !message) {
    return res.status(400).send({
      error: "Title and message are required.",
    });
  }

  const existingMessage = await MessageSchema.findOne({
    ip: ip,
    createdAt: { $gte: new Date(Date.now() - MESSAGE_COOLDOWN) },
  });

  if (existingMessage) {
    const waitTime = MESSAGE_COOLDOWN - (Date.now() - existingMessage.createdAt);
    return res.status(400).send({
      error: "You have already sent a message recently.",
      timeToWait: Math.max(0, waitTime),
    });
  }

  const newMessage = new MessageSchema({
    title,
    message,
    ip,
  });
  await newMessage.save();
  res.send({ message: "Message sent.", timeToWait: MESSAGE_COOLDOWN });
});

export default router;
