import React from 'react';
import './index.css';

let Dashboard;
try {
  Dashboard = require('./pages/Dashboard').default;
} catch (e) {
  Dashboard = null;
}

export default function App() {
  if (!Dashboard) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        background: 'linear-gradient(135deg, #2d5016 0%, #6ba547 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️ Error Loading Dashboard</h1>
        <p style={{ fontSize: '18px', color: '#ffcccc' }}>Unable to load the Dashboard component</p>
      </div>
    );
  }

  return <Dashboard />;
}
