import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MamaBotDashboard from './components/MamaBotDashboard';
import Graph from './components/Graph';
import Form from './components/Form';
import List from './components/List';
import Reports from './components/Reports'; 
import Smart from './components/Smart';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`App ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen flex flex-col`}>
      
      {/* Navbar */}
      <nav className={`navbar ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold">PennyMama</h1>
          <ul className="hidden md:flex">
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>Home</li>
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>About</li>
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>Services</li>
          </ul>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
        <button
                onClick={toggleMode}
                className="absolute top-4 right-4 text-sm p-2 rounded hover:bg-blue-600 transition-colors"
            >
                {isDarkMode ? '🌙' : '☀️'}
            </button>


      </nav>

      <a href="#" className="btnupi">Connect UPI</a>

      <div className={`relative w-full max-w-6xl shadow-lg rounded-lg overflow-hidden mx-auto mt-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {/* Sidebar */}
        <div className={`sidebar fixed top-0 left-0 w-64 h-full ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white transition-transform duration-300 ${isSidebarOpen ? 'transform-none' : '-translate-x-full'}`}>
          <ul className="mt-20">
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-600'}`}>Home</li>
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-600'}`}>About</li>
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-600'}`}>Services</li>
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-600'}`}>Login</li>
            <li className={`p-4 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-600'}`}>Register</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg p-6">
          <h1 className={`text-4xl py-8 mb-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-800 text-white'} rounded`}>Welcome to PennyMama</h1>

          {/* Grid layout for Graph and Form */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Graph on the left */}
            <Graph />
            
            {/* Form on the right */}
            <Form />
          </div>

          {/* Reports Section */}
          <Reports isDark={isDarkMode} />

          {/* Include the Smart component here */}
          <Smart />

          {/* MamaBot Dashboard */}
          <MamaBotDashboard />
        </div>
      </div>
    </div>
    
  );
}

export default App;
