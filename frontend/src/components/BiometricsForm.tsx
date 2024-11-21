// src/components/BiometricsForm.tsx

import React, { useState } from 'react';
import axios from 'axios';

interface Biometrics {
  height: string;
  weight: string;
  age: string;
  gender: string;
}

const BiometricsForm: React.FC = () => {
  const [biometrics, setBiometrics] = useState<Biometrics>({
    height: '',
    weight: '',
    age: '',
    gender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBiometrics({ ...biometrics, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // Assuming JWT stored in localStorage
      const response = await axios.post(
        'http://localhost:8000/fitness/api/biometrics/', // Make sure to use your actual API URL
        biometrics,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Biometrics submitted:', response.data);
    } catch (error) {
      console.error('Error submitting biometrics:', error);
    }
  };

  return (
    <div>
      <h1>Enter Your Biometrics</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="height"
          value={biometrics.height}
          onChange={handleChange}
          placeholder="Height (cm)"
        />
        <input
          type="number"
          name="weight"
          value={biometrics.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
        />
        <input
          type="number"
          name="age"
          value={biometrics.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <select
          name="gender"
          value={biometrics.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BiometricsForm;
