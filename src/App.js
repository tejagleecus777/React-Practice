import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import { ProtectedRoute } from './Common/AuthenticationCheck';
import DashBoard from './Components/DashBoard';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><DashBoard /></ProtectedRoute>}/>
          <Route exact path='/page1' element={<ProtectedRoute><Page1 /></ProtectedRoute>} />
          <Route exact path='/page2' element={<ProtectedRoute><Page2 /></ProtectedRoute>} />
          <Route exact path='/page3' element={<ProtectedRoute><Page3 /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
