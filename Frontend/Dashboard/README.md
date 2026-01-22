# 🌾 CropAI - AI-Powered Crop Recommendation System Dashboard

A modern, responsive dashboard built with React, JSX, and Tailwind CSS that provides intelligent crop recommendations based on user location, weather conditions, and farming data.

## 📋 Features

### 1. **User Profile Section**
   - Display user details and profile information
   - Show farm size, soil type, and crop preferences
   - Contact information and location tracking
   - Profile picture and membership status

### 2. **Weather Component**
   - Real-time weather data display
   - Temperature, humidity, wind speed monitoring
   - Rainfall tracking
   - Location-based weather information
   - Weather condition indicators

### 3. **AI Crop Recommendations**
   - Machine learning-based crop suggestions
   - Confidence score for each recommendation
   - Expected yield predictions
   - Location-based recommendations
   - Detailed crop insights

### 4. **Search History**
   - Complete search history with timestamps
   - Weather conditions at time of search
   - Previous recommendations
   - Location tracking for each search
   - Delete and clear history options

### 5. **Responsive Sidebar Navigation**
   - Toggle-able navigation menu
   - Quick access to all sections
   - Mobile-friendly design
   - Intuitive navigation flow

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: Vite 5.0.0
- **Icons**: React Icons 4.12.0
- **Package Manager**: npm

## 📦 Project Structure

```
crop-dashboard/
├── src/
│   ├── components/
│   │   ├── WeatherComponent.jsx
│   │   ├── UserDetailsComponent.jsx
│   │   ├── SearchHistoryComponent.jsx
│   │   └── CropRecommendationComponent.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
```bash
cd e:\Crop\Dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Tailwind CSS and dependencies**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🎯 Component Overview

### UserDetailsComponent
Displays comprehensive user profile information including:
- Personal details (name, email, phone)
- Location information
- Farm details (size, soil type, crops)
- Profile photo

### WeatherComponent
Shows real-time weather metrics:
- Temperature display with icon
- Humidity percentage
- Wind speed in km/h
- Rainfall amount
- Location-based weather

### CropRecommendationComponent
Provides AI-powered recommendations featuring:
- Crop suggestions with confidence scores
- Expected yield predictions
- Location selector dropdown
- Visual confidence bars
- Detailed crop descriptions

### SearchHistoryComponent
Maintains search records with:
- Timestamped search queries
- Location information
- Weather conditions at search time
- Previous recommendations
- Status indicators (Completed/Pending)
- Delete functionality

## 🎨 Tailwind CSS Configuration

Custom colors configured:
- **Primary**: `#2d5016` (Dark Green)
- **Secondary**: `#6ba547` (Sage Green)
- **Accent**: `#fbbf24` (Amber)
- **Light**: `#f3f4f6` (Light Gray)

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm npm preview
```

## 🌐 Integration Points

The dashboard is ready for integration with:
- **Weather APIs**: OpenWeatherMap, Weather.com
- **Location Services**: Geolocation API, Google Maps
- **Database**: User profiles, search history
- **Authentication**: Login/Logout functionality
- **Backend Services**: Crop recommendation engine

## 📈 Future Enhancements

- Real API integration for weather data
- Database connectivity for user data persistence
- Advanced filtering and search capabilities
- Data visualization charts and graphs
- Mobile app version
- Multi-language support
- Dark mode theme
- Push notifications

## 📝 Customization

### Modifying Colors
Edit `tailwind.config.js` to change color schemes:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#your-color',
      'secondary': '#your-color',
    }
  }
}
```

### Adding New Components
Create new component files in `src/components/` and import them in the Dashboard:
```jsx
import YourComponent from '../components/YourComponent';
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Dependencies Issues
```bash
npm install
npm audit fix
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Support

For support and questions, please create an issue in the project repository.

---

**Happy Farming with CropAI! 🌾**
