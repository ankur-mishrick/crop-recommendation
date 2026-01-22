import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cropRoutes from "./routes/cropRoutes.js";
import historyRoutes from './routes/historyRoutes.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION - use cloud or local address based on env variable (preferably cloud).
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

app.use("/api/crop", cropRoutes);
app.use("/api/history", historyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});

export default app;
