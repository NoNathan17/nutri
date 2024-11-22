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
    <div style={{ marginTop: '150px', width: '1000px', height: 'auto', backgroundColor: '#d8e3d3'}} className="form-container flex flex-col space-y-5">
    <h1 style={{ fontSize: '18px', marginTop: '15px' }}>Weight Loss Plan</h1>
      <p style={{fontSize: '12px', marginTop: '0px' }}>
        Structured guidance for healthy and sustainable weight loss!<br />
        BMI: { bmi } | Maintenance Calories: { maintenanceCalories }
      </p>
    <div>
      {loading ? (<div></div>
          
        ) : (
            <div className="mt-4 text-[#44624a]" style={{fontSize: '12px', marginTop: '0px' }}>
              <hr style={{ borderBottom: "2px solid #44824a" }} />
              <Table
  style={{
    marginTop: "10px",
    marginBottom: "10px",
    width: "1000px",
    backgroundColor: "#d8e3d3",
    borderRadius: "10px",
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
        Calories Consumed / Day
      </TableHead>
      <TableHead
        style={{
          color: "#44624a",
          textAlign: "center",
        }}
      >
        Pounds Lost / Week
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
<br/>
<hr style={{ borderBottom: "2px solid #44824a" }} />
            </div>
        )}

    </div>
    <Accordion type="single" collapsible className="w-full text-[#44624a]">
    <AccordionItem value="item-1" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Monday</AccordionTrigger>
      <AccordionContent>
      Cardio - 30 minutes on treadmill, 20 minutes HIIT<br />
      + Grilled Chicken Salad, Quinoa, Avocado
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Tuesday</AccordionTrigger>
      <AccordionContent>
      Full Body Strength - Squats, Push-Ups, Dumbbell Rows<br />
      + Grilled Salmon, Brown Rice, Steamed Veggies
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Wednesday</AccordionTrigger>
      <AccordionContent>
      Cardio - Cycling, 30 minutes<br />
      + Lean Turkey, Sweet Potato, Roasted Brussel Sprouts
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Thursday</AccordionTrigger>
      <AccordionContent>
        Rest day !<br />
      + Salad with Mixed Greens, Nuts, Berries
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Friday</AccordionTrigger>
      <AccordionContent>
      Lower Body - Lunges, Leg Press, Deadlifts <br />
      + Baked Chicken, Cauliflower Rice, Spinach
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Saturday</AccordionTrigger>
      <AccordionContent>
      Upper Body - Push-Ups, Pull-Ups, Bicep Curls <br />
        + Grilled Shrimp, Zucchini Noodles, Garlic
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Sunday</AccordionTrigger>
      <AccordionContent>
      Rest day !<br />
      + Protein Shake, Almonds, Banana
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
  );
};

export default WeightLoss;
