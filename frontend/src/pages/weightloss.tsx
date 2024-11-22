import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const WeightLoss = () => {
  const [bmi, setBmi] = useState(null);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status

  const name = localStorage.getItem('name');

  useEffect(() => {
    // Fetch user profile data from the backend API
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
  return (
    <div style={{ marginTop: '150px', width: '1000px', height: '900px', backgroundColor: '#d8e3d3'}} className="form-container flex flex-col space-y-5">
    <div>
      {loading ? (<div></div>
          
        ) : (
            <div className="mt-4 text-[#44624a]">
              <h1 style={{ fontSize: '30px' }}>{ name }</h1>
              <h2>BMI: {bmi ? bmi : "No Data Available"}</h2>
              <h2>Given your maintenance calorie count of {maintenanceCalories ? maintenanceCalories : "No Data Available"}</h2>
              <Table
  style={{
    marginTop: "25px",
    width: "1000px",
    backgroundColor: "#d8e3d3",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }}
>
  <TableHeader>
    <TableRow>
      <TableHead
        style={{
          color: "#44624a",
          textAlign: "center",
        }}
      >
        Calories Consumed/Day
      </TableHead>
      <TableHead
        style={{
          color: "#44624a",
          textAlign: "center",
        }}
      >
        Lbs Lost/Week
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }}
      >
        {(maintenanceCalories ?? 0) - 250}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>0.5</TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }}
      >
        {(maintenanceCalories ?? 0) - 500}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>1.0</TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }}
      >
        {(maintenanceCalories ?? 0) - 750}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>1.5</TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }} 
      >
        {(maintenanceCalories ?? 0) - 1000}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>2.0</TableCell>
    </TableRow>
  </TableBody>
</Table>

            </div>
        )}

    </div>
    <h1 style={{ fontSize: '18px' }}>Weight Loss Plan !!</h1>
    <div className="mt-4 text-[#44624a]">
      <p style={{fontSize: '12px' }}>
        Structured guidance for healthy and sustainable weight loss.
      </p>
    </div>
    <Accordion type="single" collapsible className="w-full text-[#44624a]">
    <AccordionItem value="item-1" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 1</AccordionTrigger>
      <AccordionContent>
      Cardio - 30 minutes on treadmill, 20 minutes HIIT<br />
      + Grilled Chicken Salad, Quinoa, Avocado
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 2</AccordionTrigger>
      <AccordionContent>
      Full Body Strength - Squats, Push-Ups, Dumbbell Rows<br />
      + Grilled Salmon, Brown Rice, Steamed Veggies
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 3</AccordionTrigger>
      <AccordionContent>
      Cardio - Cycling, 30 minutes<br />
      + Lean Turkey, Sweet Potato, Roasted Brussel Sprouts
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 4</AccordionTrigger>
      <AccordionContent>
        Rest day<br />
      + Salad with Mixed Greens, Nuts, Berries
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 5</AccordionTrigger>
      <AccordionContent>
      Lower Body - Lunges, Leg Press, Deadlifts <br />
      + Baked Chicken, Cauliflower Rice, Spinach
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 6</AccordionTrigger>
      <AccordionContent>
      Upper Body - Push-Ups, Pull-Ups, Bicep Curls <br />
        + Grilled Shrimp, Zucchini Noodles, Garlic
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 7</AccordionTrigger>
      <AccordionContent>
      Rest day<br />
      + Protein Shake, Almonds, Banana
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
  );
};

export default WeightLoss;
