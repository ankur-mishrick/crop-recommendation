import React, { useState, useContext } from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { IntlContext } from '../context/IntlContext';

const CropRecommendationComponent = () => {
  const { locale } = useContext(IntlContext);
  const messages = {
    en: { recommendation: 'Here are your crop recommendations.' },
    hi: { recommendation: 'यहाँ आपकी फसल सिफारिशें हैं।' },
    bn: { recommendation: 'এখানে আপনার ফসলের সুপারিশ রয়েছে।' }
  };

  const [selectedLocation, setSelectedLocation] = useState('Punjab');
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      crop: 'Wheat',
      confidence: 95,
      yield: '45-50 quintals/acre',
      description: 'Excellent conditions for wheat cultivation',
      icon: '🌾'
    },
    {
      id: 2,
      crop: 'Rice',
      confidence: 88,
      yield: '35-40 quintals/acre',
      description: 'Good moisture content in soil',
      icon: '🍚'
    },
    {
      id: 3,
      crop: 'Maize',
      confidence: 82,
      yield: '30-35 quintals/acre',
      description: 'Suitable for current climate conditions',
      icon: '🌽'
    }
  ]);

  const locations = ['Punjab', 'Haryana', 'Uttar Pradesh', 'Gujarat', 'Karnataka', 'Maharashtra'];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">AI Crop Recommendations</h2>

      {/* Location Selector */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FiMapPin className="text-secondary text-xl" />
          <label className="text-lg font-semibold text-primary">Select Location</label>
        </div>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-primary font-semibold"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition duration-300 border-t-4 border-secondary"
          >
            <div className="text-5xl mb-4">{rec.icon}</div>
            
            <h3 className="text-2xl font-bold text-primary mb-2">{rec.crop}</h3>
            
            <p className="text-gray-600 mb-4 text-sm">{rec.description}</p>

            {/* Confidence Score */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">AI Confidence</span>
                <span className="text-lg font-bold text-secondary">{rec.confidence}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-secondary to-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${rec.confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Yield */}
            <div className="bg-green-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600 font-semibold mb-1">Expected Yield</p>
              <p className="text-lg font-bold text-secondary">{rec.yield}</p>
            </div>

            <button className="w-full bg-secondary hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2">
              <FiSearch /> Get Details
            </button>
          </div>
        ))}
      </div>

      {/* AI Info Box */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent">
        <h4 className="text-lg font-bold text-primary mb-2">🤖 AI Insights</h4>
        <p className="text-gray-700 leading-relaxed">
          Our AI-powered system analyzes real-time weather data, soil conditions, historical yields, 
          and market trends to provide personalized crop recommendations. The confidence score indicates 
          the likelihood of successful cultivation based on current environmental factors.
        </p>
      </div>

      {/* Multilingual Recommendation Message */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <p className="text-blue-800 font-semibold">
          {messages[locale].recommendation}
        </p>
      </div>
    </div>
  );
};

export default CropRecommendationComponent;
