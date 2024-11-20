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
      <div>
          <h1>Welcome to Nutri</h1>
          <p>{message || 'Loading...'}</p>
      </div>
  );
};

export default App;
