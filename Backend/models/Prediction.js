import mongoose from 'mongoose';

const PredictionSchema = new mongoose.Schema({
  // Link to user later (optional for now)
  user_id: { type: String, default: 'anonymous' }, 
  
  // The Inputs used
  inputs: {
    N: Number,
    P: Number,
    K: Number,
    ph: Number,
    lat: Number,
    lon: Number,
    temperature: Number,
    humidity: Number,
    rainfall: Number
  },

  // The Results
  predicted_crop: String,
  market_price: Number,
  
  // Auto-timestamp
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model('Prediction', PredictionSchema);