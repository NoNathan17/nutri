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
import { Skeleton } from "@/components/ui/skeleton"

const Profile = () => {
  const [bmi, setBmi] = useState(null);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status

  const name = localStorage.getItem('name');

  useEffect(() => {
    // Fetch user profile data from the backend API
    console.log(name)
    axios
      .get(`http://127.0.0.1:8000/api/biometrics/?name=${name}`)  
      .then((response) => {
        setTimeout(() => {
          setBmi(response.data.bmi); 
          setMaintenanceCalories(response.data.maintenance_calories); 
          setLoading(false); 
        }, 1000);
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
    <div className="form-container flex flex-col space-y-3">
      <div>
        {/* Conditionally render skeleton loader or actual data */}
        {loading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[100px] w-[250px] rounded-xl" />
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          <>
            <h1 className="form-name">{ name }</h1>
            <h2>BMI: {bmi ? bmi : "No Data Available"}</h2>
            <h2>Maintenance Calories: {maintenanceCalories ? maintenanceCalories : "No Data Available"}</h2>
            <div>
              <Select onValueChange={(value) => setSelectedPlan(value)}>
                <SelectTrigger className="w-[280px]" style={{ backgroundColor: "#98b496" }}>
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
              <button className="redirect" onClick={redirection}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>
  </div>
);
};
export default Profile;
