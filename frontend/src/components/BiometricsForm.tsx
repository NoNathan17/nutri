import React, { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BiometricsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    gender: '',
  });

  const [bmiData, setBmiData] = useState<{ bmi: number; maintenanceCalories: number } | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateBMI = (height: string, weight: string) => {
    const heightParts = height.split("'");
    const feet = parseInt(heightParts[0]);
    const inches = parseInt(heightParts[1]);

    const totalHeightInInches = (feet * 12) + inches;
    const weightInPounds = parseFloat(weight);

    const bmi = (weightInPounds / (totalHeightInInches * totalHeightInInches)) * 703;
    return Math.round(bmi * 10) / 10; // Rounded to 1 decimal place
  };

  const calculateMaintenanceCalories = (weight: number, height: number, age: number, gender: string) => {
    let bmr = 0;
    if (gender === 'Male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return Math.round(bmr * 1.55); // Maintenance calories (rounded)
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { name, age, weight, height, gender } = formData;

    if (!name || !age || !weight || !height || !gender) {
      setError("All fields are required.");
      return;
    }

    const bmi = calculateBMI(height, weight);
    const maintenanceCalories = calculateMaintenanceCalories(
      parseFloat(weight),
      parseFloat(height) * 2.54, // Convert to cm
      parseInt(age),
      gender
    );

    const userData = { bmi, maintenanceCalories };
    localStorage.setItem('userData', JSON.stringify(userData));

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8000/fitness/api/biometrics/',
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Biometrics submitted:', response.data);

      // Show dialog with BMI and maintenance calories
      setBmiData({ bmi, maintenanceCalories });
      setShowDialog(true);
    } catch (error) {
      console.error('Error submitting biometrics:', error);
      setError("Failed to submit biometrics. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        {error && <div className="text-red-500">{error}</div>}

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="Daniel Li"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="age" className="text-right">Age</Label>
          <Input
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="19"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="gender" className="text-right">
            Gender
          </Label>
          <Select
            value={formData.gender}
            onValueChange={(value) => {
              setFormData({
                ...formData,
                gender: value,
              });
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="weight" className="text-right">Weight (lbs)</Label>
          <Input
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="265"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="height" className="text-right">Height (ft'in")</Label>
          <Input
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            className="col-span-3"
            placeholder="6'2"
          />
        </div>
      </form>

      {showDialog && bmiData && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <h3 className="text-lg font-bold">Results</h3>
          <p>BMI: {bmiData.bmi}</p>
          <p>Maintenance Calories: {bmiData.maintenanceCalories}</p>
          <button
            onClick={() => setShowDialog(false)}
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default BiometricsForm;
