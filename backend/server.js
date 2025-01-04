import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/tasks.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
