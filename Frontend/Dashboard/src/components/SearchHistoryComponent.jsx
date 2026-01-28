import React, { useState, useContext } from 'react';
import { FiSearch, FiClock, FiTrash2 } from 'react-icons/fi';
import { IntlContext } from '../context/IntlContext';

const SearchHistoryComponent = () => {
  const { locale } = useContext(IntlContext);
  const messages = {
    en: {
      searchHistory: 'Search History',
      clearAll: 'Clear All',
      noHistory: 'No search history available',
      startSearching: 'Start searching for crop recommendations',
      location: 'Location',
      weather: 'Weather',
      recommendation: 'Recommendation'
    },
    hi: {
      searchHistory: 'खोज इतिहास',
      clearAll: 'सभी को साफ करें',
      noHistory: 'कोई खोज इतिहास उपलब्ध नहीं है',
      startSearching: 'फसल सिफारिशों के लिए खोजना शुरू करें',
      location: 'स्थान',
      weather: 'मौसम',
      recommendation: 'सिफारिश'
    },
    bn: {
      searchHistory: 'অনুসন্ধান ইতিহাস',
      clearAll: 'সব মুছে ফেলুন',
      noHistory: 'কোনও অনুসন্ধান ইতিহাস উপলব্ধ নেই',
      startSearching: 'ফসলের সুপারিশের জন্য অনুসন্ধান শুরু করুন',
      location: 'অবস্থান',
      weather: 'আবহাওয়া',
      recommendation: 'সুপারিশ'
    }
  };
  const [searchHistory, setSearchHistory] = useState([
    {
      id: 1,
      query: 'Wheat - Disease Prevention',
      timestamp: '2024-01-20 14:30',
      location: 'Punjab',
      weather: '28°C, 65% Humidity',
      recommendation: 'Fungicide spray recommended',
      status: 'Completed'
    },
    {
      id: 2,
      query: 'Rice - Irrigation Schedule',
      timestamp: '2024-01-19 10:15',
      location: 'Punjab',
      weather: '26°C, 72% Humidity',
      recommendation: 'Irrigate for 4-5 days',
      status: 'Completed'
    },
    {
      id: 3,
      query: 'Maize - Pest Management',
      timestamp: '2024-01-18 09:45',
      location: 'Haryana',
      weather: '25°C, 60% Humidity',
      recommendation: 'Apply neem oil spray',
      status: 'Completed'
    },
    {
      id: 4,
      query: 'Cotton - Fertilizer',
      timestamp: '2024-01-17 16:20',
      location: 'Gujarat',
      weather: '30°C, 58% Humidity',
      recommendation: 'Apply potassium fertilizer',
      status: 'Completed'
    },
    {
      id: 5,
      query: 'Sugarcane - Harvesting',
      timestamp: '2024-01-16 12:00',
      location: 'Uttar Pradesh',
      weather: '24°C, 70% Humidity',
      recommendation: 'Optimal harvest time in 2 weeks',
      status: 'Pending'
    },
  ]);

  const deleteHistory = (id) => {
    setSearchHistory(searchHistory.filter(item => item.id !== id));
  };

  const clearAllHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-primary">{messages[locale].searchHistory}</h2>
        {searchHistory.length > 0 && (
          <button
            onClick={clearAllHistory}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2"
          >
            <FiTrash2 /> {messages[locale].clearAll}
          </button>
        )}
      </div>

      {searchHistory.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center">
          <FiSearch className="mx-auto text-4xl text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">{messages[locale].noHistory}</p>
          <p className="text-gray-500 text-sm mt-2">{messages[locale].startSearching}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {searchHistory.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition duration-200 border-l-4 border-secondary"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-primary">{item.query}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <FiClock className="text-gray-500" />
                    <span>{item.timestamp}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status}
                  </span>
                  <button
                    onClick={() => deleteHistory(item.id)}
                    className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition duration-200"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">{messages[locale].location}</p>
                  <p className="text-gray-900">{item.location}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">{messages[locale].weather}</p>
                  <p className="text-gray-900">{item.weather}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">{messages[locale].recommendation}</p>
                  <p className="text-gray-900">{item.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchHistoryComponent;
