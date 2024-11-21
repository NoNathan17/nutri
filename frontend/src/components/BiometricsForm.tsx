import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

  const calculateBMI = (height: string, weight: string) => {
    const heightParts = height.split('"')
    const feet = parseInt(heightParts[0])
    const inches = parseInt(heightParts[1])

    const heightInInches = (feet * 12) + inches
    const weightInPounds = parseFloat(weight)

    const bmi = (weightInPounds / (heightInInches * heightInInches)) * 703

    return bmi

  }

  const calculateMaintenanceCalories = (weight: number, height: number, age: number, gender: string) => {
    let bmr = 0;
    if (gender === 'Male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    return bmr * 1.55;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const height = biometrics.height; 
    const weight = parseFloat(biometrics.weight); 
    const age = parseInt(biometrics.age);
    const gender = biometrics.gender;

    // Calculate BMI and maintenance calories
    const bmi = calculateBMI(height, biometrics.weight);
    const maintenanceCalories = calculateMaintenanceCalories(weight, weight, age, gender);

    // Store the calculated data in localStorage
    const userData = {
      bmi,
      maintenanceCalories,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post(
        'http://localhost:8000/api/biometrics/', 
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
          type="text"
          name="height"
          value={biometrics.height}
          onChange={handleChange}
          placeholder="Height"
          required
        />
        <input
          type="number"
          name="weight"
          value={biometrics.weight}
          onChange={handleChange}
          placeholder="Weight"
          required
        />
        <input
          type="number"
          name="age"
          value={biometrics.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <select
          name="gender"
          value={biometrics.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <Link to="/fitness_goal">
            <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default BiometricsForm;
