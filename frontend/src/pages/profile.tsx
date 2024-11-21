import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const Profile = () => {
    return (
      <div>
        <h1>Your Profile</h1>
        <div>
          <h2>BMI: Obese</h2> {/* Use API to calculate this later */}
          <h2>Maintenance Calories: Lose weight</h2> 
        </div>
        <div>
        </div>
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
      
    );
  };
  
  export default Profile;
  