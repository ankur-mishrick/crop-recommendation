import React, { useState, useEffect, useContext } from 'react';
import { FiCloud, FiDroplets, FiWind } from 'react-icons/fi';
import { IntlContext } from '../context/IntlContext';

const WeatherComponent = ({ location }) => {
  const { locale } = useContext(IntlContext);
  const messages = {
    en: {
      title: 'Weather Information',
      temperature: 'Temperature',
      humidity: 'Humidity',
      windSpeed: 'Wind Speed',
      rainfall: 'Rainfall',
      location: 'Location',
      condition: 'Condition'
    },
    hi: {
      title: 'मौसम की जानकारी',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      windSpeed: 'हवा की गति',
      rainfall: 'वर्षा',
      location: 'स्थान',
      condition: 'स्थिति'
    },
    bn: {
      title: 'আবহাওয়া তথ্য',
      temperature: 'তাপমাত্রা',
      humidity: 'আর্দ্রতা',
      windSpeed: 'বায়ু গতি',
      rainfall: 'বৃষ্টিপাত',
      location: 'অবস্থান',
      condition: 'অবস্থা'
    }
  };
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Mock weather data - replace with real API call
        const mockWeather = {
          temperature: 28,
          humidity: 65,
          windSpeed: 12,
          condition: 'Partly Cloudy',
          location: location || 'Default Location',
          rainfall: 45,
        };
        setWeather(mockWeather);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 animate-pulse">
        <div className="h-40 bg-blue-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">{messages[locale].title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Temperature */}
        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].temperature}</p>
              <p className="text-3xl font-bold text-primary">{weather?.temperature}°C</p>
            </div>
            <FiCloud className="text-4xl text-blue-500" />
          </div>
        </div>

        {/* Humidity */}
        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-cyan-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].humidity}</p>
              <p className="text-3xl font-bold text-primary">{weather?.humidity}%</p>
            </div>
            <FiDroplets className="text-4xl text-cyan-500" />
          </div>
        </div>

        {/* Wind Speed */}
        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].windSpeed}</p>
              <p className="text-3xl font-bold text-primary">{weather?.windSpeed} km/h</p>
            </div>
            <FiWind className="text-4xl text-green-500" />
          </div>
        </div>

        {/* Rainfall */}
        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">{messages[locale].rainfall}</p>
              <p className="text-3xl font-bold text-primary">{weather?.rainfall} mm</p>
            </div>
            <FiCloud className="text-4xl text-purple-500" />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
        <p className="text-gray-600 text-sm">{messages[locale].location}</p>
        <p className="text-lg font-semibold text-primary">{weather?.location}</p>
        <p className="text-gray-700 mt-2">{messages[locale].condition}: <span className="font-semibold">{weather?.condition}</span></p>
      </div>
    </div>
  );
};

export default WeatherComponent;
