import express from "express";
import MessageSchema from "../schemas/MessageSchema.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { id, upvote } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  if (!id || upvote == null) {
    return res.status(400).send({
      error: "ID and upvote are required.",
    });
  }

  const message = await MessageSchema.findById(id);
  if (!message) {
    return res.status(400).send({
      error: "Invalid ID.",
    });
  }
  await message.vote(ip, upvote);

  res.send({
    message: "Vote registered.",
    upvotes: message.upvotes.length,
    downvotes: message.downvotes.length,
    userVote: message.hasUpvoted(ip),
  });
});
export default router;
