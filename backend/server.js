import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes //
app.get('/', (req, res) => {
  res.send('Hello World');
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
