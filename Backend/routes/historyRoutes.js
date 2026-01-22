import express from 'express';
import Prediction from '../models/Prediction.js';

const router = express.Router();

// GET /api/history - Fetch last 10 predictions
router.get('/', async (req, res) => {
  try {
    const history = await Prediction.find()
      .sort({ created_at: -1 }) // Newest first
      .limit(10);
      
    res.json(history);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

export default router;