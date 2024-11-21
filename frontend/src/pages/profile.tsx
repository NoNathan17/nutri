import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  const [bmi, setBmi] = useState(null);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);
  const name = localStorage.getItem('username');

  useEffect(() => {
    // Fetch user profile data from the backend API
    axios
      .get(`http://127.0.0.1:8000/api/biometrics/?name=${name}`)  
      .then((response) => {
        // Assuming the response contains the necessary data
        setBmi(response.data.bmi);
        setMaintenanceCalories(response.data.maintenance_calories);
      })
      .catch((error) => {
        console.error("There was an error fetching the biometrics data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Your Profile</h1>
      <div>
        {/* Conditionally render the BMI and Maintenance Calories */}
        <h2>BMI: {bmi ? bmi : "Loading..."}</h2>
        <h2>Maintenance Calories: {maintenanceCalories ? maintenanceCalories : "Loading..."}</h2>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select Fitness Plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Bodybuilding">Bodybuilding</SelectItem>
              <SelectItem value="Weight Loss">Weight Loss</SelectItem>
              <SelectItem value="GeneralHealth">General Health</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Profile;
