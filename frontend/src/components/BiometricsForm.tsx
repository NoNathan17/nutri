import React, { useState } from 'react';
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { DialogFooter } from "@/components/ui/dialog"
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
    sex: '',
  });

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

  const calculateMaintenanceCalories = (weight: number, height: number, age: number, sex: string) => {
    let bmr = 0;
    if (sex === 'Male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return Math.round(bmr * 1.55); // Maintenance calories (rounded)
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
  
    const { name, age, weight, height, sex } = formData;
  
    if (!name || !age || !weight || !height || !sex) {
      setError("All fields are required.");
      return;
    }
  
    // Calculate BMI and maintenance calories
    const bmi = calculateBMI(height, weight);
    const maintenanceCalories = calculateMaintenanceCalories(
      parseFloat(weight),
      parseFloat(height) * 2.54, // Convert height from feet and inches to cm
      parseInt(age),
      sex
    );
  
    // Prepare the data to be sent to the backend
    const biometricsData = { name, age, weight, height, sex, bmi, maintenance_calories: maintenanceCalories };
  
    try {
      const response = await axios.post(
        'http://localhost:8000/api/biometrics/', 
        biometricsData,  // Send biometric data
      );
      console.log('Biometrics submitted:', response.data);
  
      // Optionally, store the calculated values in local storage or state
      localStorage.setItem('biometricsData', JSON.stringify({ bmi, maintenanceCalories }));
  
      // Show the dialog with the submitted data
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
          <Label htmlFor="sex" className="text-right">
            Sex
          </Label>
          <Select
            value={formData.sex}
            onValueChange={(value) => {
              setFormData({
                ...formData,
                sex: value,
              });
            }}
          >
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Sex" />
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
        <DialogFooter>
              <Button type="submit">Get Reccomendations</Button>
          </DialogFooter>
      </form>
    </>
  );
};

export default BiometricsForm;
