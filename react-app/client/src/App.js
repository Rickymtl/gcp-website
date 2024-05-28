// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import DropZonePage1 from './pages/DropZonePage1';
import DropZonePage2 from './pages/DropZonePage2';
import DropZonePage3 from './pages/DropZonePage3';
import DropZonePage4 from './pages/DropZonePage4';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dropzone1" element={<DropZonePage1/>} />
          <Route path="/dropzone2" element={<DropZonePage2/>} />
          <Route path="/dropzone3" element={<DropZonePage3/>} />
          <Route path="/dropzone4" element={<DropZonePage4/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
