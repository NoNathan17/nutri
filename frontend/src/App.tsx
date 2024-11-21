import React, { useEffect, useState } from 'react';
import api from './services/api';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
      const fetchMessage = async () => {
          try {
              const response = await api.get('/');
              setMessage(response.data.message);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchMessage();
  }, []);

  return (
      <div className="app-container">
          <h1>nutri !!</h1>
          <p>
            a fitness application designed to help you meet your personal <br />
            fitness goals. made by jay + nathan + danny</p>
          <p>{/*message || 'Loading...'*/}</p>
      </div>
  );
};

export default App;
