import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    upvotes: {
      type: [String],
      default: [],
    },
    downvotes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

MessageSchema.methods.vote = function (ip, isUpvote) {
  if (isUpvote) {
    this.downvotes = this.downvotes.filter((voterIp) => voterIp !== ip);
    if (!this.upvotes.includes(ip)) {
      this.upvotes.push(ip);
    }
  } else {
    this.upvotes = this.upvotes.filter((voterIp) => voterIp !== ip);
    if (!this.downvotes.includes(ip)) {
      this.downvotes.push(ip);
    }
  }
  return this.save();
};
/**
 * True if found an upvote, false if found a downvote, null if not found
 * @param {*} ip
 * @returns
 */
MessageSchema.methods.hasUpvoted = function (ip) {
  if (this.upvotes.includes(ip)) {
    return true;
  } else if (this.downvotes.includes(ip)) {
    return false;
  } else {
    return null;
  }
};

export default mongoose.model("Message", MessageSchema);
