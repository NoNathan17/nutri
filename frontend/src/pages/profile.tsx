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

    const [selectedPlan, setSelectedPlan] = useState("");
  
    const redirection = () => {
      // Redirect based on the selected option
      if (selectedPlan == "Bodybuilding") {
        window.location.href = "/bodybuilding";
      } else if (selectedPlan == "Weight Loss") {
        window.location.href = "/weightloss";
      } else if (selectedPlan == "GeneralHealth") {
        window.location.href = "/health";
      }
    };
  return (
    <div className="form-container">
      <h1 className="form-name">Your Profile</h1>
      <div>
        {/* Conditionally render the BMI and Maintenance Calories */}
        <h2>BMI: {bmi ? bmi : "Loading..."}</h2>
        <h2>Maintenance Calories: {maintenanceCalories ? maintenanceCalories : "Loading..."}</h2>
      </div>
      <div>
        <Select onValueChange={(value) => setSelectedPlan(value)}>
        <SelectTrigger className="w-[280px]" background-color="#98b496">
                <SelectValue placeholder="Select Fitness Plan" />
                </SelectTrigger>
                <SelectContent className="select-content">
                <SelectGroup>
                    <SelectItem className="select-item" value="Bodybuilding">Bodybuilding</SelectItem>
                    <SelectItem className="select-item" value="Weight Loss">Weight Loss</SelectItem>
                    <SelectItem className="select-item" value="GeneralHealth">General Health</SelectItem>
                </SelectGroup>
                </SelectContent>

        </Select>
        <button className="redirect" onClick={redirection}>Submit</button>
      </div>
    </div>
  );
};

export default Profile;
