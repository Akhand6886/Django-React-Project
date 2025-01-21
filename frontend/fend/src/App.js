import React from 'react';
// import './App.css'; // Global styles, optional
import './Routers/AppRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routers/AppRoutes';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <AppRoutes /> 
      </div>
    </Router>
  );
}

export default App;
