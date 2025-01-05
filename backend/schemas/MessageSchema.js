import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
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
});

export default mongoose.model('Message', MessageSchema);
