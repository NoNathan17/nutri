import react from 'react'
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import ProtectedRoute from "./components/ProtectedRoute"
import logo from './logo.svg';
import './App.css';

function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
  }
  
  function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
  }
  
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>nutri !!</h1>
        <p>
          a fitness application designed to help you meet your personal <br />
          fitness goals. made by jay + nathan + danny
        </p>
        <p>{/*message || 'Loading...'*/}</p>
  
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );  
};

export default App;
