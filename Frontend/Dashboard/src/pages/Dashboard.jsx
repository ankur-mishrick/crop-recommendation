import React, { useState, createContext, useContext } from 'react';
import { FiMenu, FiX, FiHome, FiSettings, FiLogOut } from 'react-icons/fi';
import UserDetailsComponent from '../components/UserDetailsComponent';
import WeatherComponent from '../components/WeatherComponent';
import SearchHistoryComponent from '../components/SearchHistoryComponent';
import CropRecommendationComponent from '../components/CropRecommendationComponent';
import IntlProvider, { IntlContext } from '../context/IntlContext';

const messages = {
  en: { greeting: 'Hello' },
  hi: { greeting: 'नमस्ते' },
  bn: { greeting: 'হ্যালো' }
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');
  const { locale, setLocale } = useContext(IntlContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <IntlProvider>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-20'
          } bg-gradient-to-b from-primary to-green-700 text-white transition-all duration-300 shadow-lg overflow-hidden`}
        >
          <div className="p-6 flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-2xl font-bold">CropAI</h1>
            )}
            <button
              onClick={toggleSidebar}
              className="text-white hover:bg-green-600 p-2 rounded transition duration-200"
            >
              {sidebarOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-8">
            <button
              onClick={() => setActiveSection('overview')}
              className={`w-full text-left px-6 py-3 flex items-center gap-4 transition duration-200 ${
                activeSection === 'overview'
                  ? 'bg-secondary border-l-4 border-accent'
                  : 'hover:bg-green-600'
              }`}
            >
              <FiHome className="text-xl" />
              {sidebarOpen && <span>Dashboard</span>}
            </button>

            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full text-left px-6 py-3 flex items-center gap-4 transition duration-200 ${
                activeSection === 'profile'
                  ? 'bg-secondary border-l-4 border-accent'
                  : 'hover:bg-green-600'
              }`}
            >
              <FiHome className="text-xl" />
              {sidebarOpen && <span>Profile</span>}
            </button>

            <button
              onClick={() => setActiveSection('recommendations')}
              className={`w-full text-left px-6 py-3 flex items-center gap-4 transition duration-200 ${
                activeSection === 'recommendations'
                  ? 'bg-secondary border-l-4 border-accent'
                  : 'hover:bg-green-600'
              }`}
            >
              <FiHome className="text-xl" />
              {sidebarOpen && <span>Recommendations</span>}
            </button>

            <button
              onClick={() => setActiveSection('history')}
              className={`w-full text-left px-6 py-3 flex items-center gap-4 transition duration-200 ${
                activeSection === 'history'
                  ? 'bg-secondary border-l-4 border-accent'
                  : 'hover:bg-green-600'
              }`}
            >
              <FiHome className="text-xl" />
              {sidebarOpen && <span>History</span>}
            </button>
          </nav>

          {/* Footer Navigation */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-green-600 p-4 space-y-2">
            <button className="w-full text-left px-2 py-2 flex items-center gap-4 hover:bg-green-600 rounded transition duration-200">
              <FiSettings className="text-xl" />
              {sidebarOpen && <span>Settings</span>}
            </button>
            <button className="w-full text-left px-2 py-2 flex items-center gap-4 hover:bg-green-600 rounded transition duration-200">
              <FiLogOut className="text-xl" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-primary">
                {activeSection === 'overview' && 'Dashboard Overview'}
                {activeSection === 'profile' && 'User Profile'}
                {activeSection === 'recommendations' && 'Crop Recommendations'}
                {activeSection === 'history' && 'Search History'}
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center text-white font-bold text-lg">
                  RK
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="p-6 max-w-7xl mx-auto">
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <UserDetailsComponent />
                <WeatherComponent location="Punjab, India" />
                <CropRecommendationComponent />
                <SearchHistoryComponent />
              </div>
            )}

            {activeSection === 'profile' && (
              <div className="space-y-8">
                <UserDetailsComponent />
              </div>
            )}

            {activeSection === 'recommendations' && (
              <div className="space-y-8">
                <CropRecommendationComponent />
              </div>
            )}

            {activeSection === 'history' && (
              <div className="space-y-8">
                <SearchHistoryComponent />
              </div>
            )}
          </div>
        </main>
      </div>
    </IntlProvider>
  );
};

export default Dashboard;
