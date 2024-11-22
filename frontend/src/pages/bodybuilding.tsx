
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Bodybuilding = () => {
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
    <h1 style={{ fontSize: '18px', marginTop: '15px' }}>Bodybuilding Plan</h1>
      <p style={{fontSize: '12px', marginTop: '0px' }}>
        A plan tailored to build muscle and strength effectively!
      </p>
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
        Muscle Gained(lbs)/Week
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }}
      >
        {(maintenanceCalories ?? 0) + 250}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>0.5</TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }}
      >
        {(maintenanceCalories ?? 0) + 500}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>1.0</TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }}
      >
        {(maintenanceCalories ?? 0) + 750}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>1.5</TableCell>
    </TableRow>
    <TableRow>
      <TableCell
        className="font-medium"
        style={{ textAlign: "center" }} 
      >
        {(maintenanceCalories ?? 0) + 1000}
      </TableCell>
      <TableCell style={{ textAlign: "center" }}>2.0</TableCell>
    </TableRow>
  </TableBody>
</Table>

            </div>
        )}

    </div>
      <Accordion type="single" collapsible className="w-full text-[#44624a]">
      <AccordionItem value="item-1" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Monday</AccordionTrigger>
        <AccordionContent>
          Chest and Triceps - Bench Press, Dumbbell Flys, Tricep Dips<br />
          + Grilled Chicken, Quinoa, Broccoli
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Tuesday</AccordionTrigger>
        <AccordionContent>
          Back and Biceps - Pull-Ups, Barbell Rows, Bicep Curls<br />
          + Salmon, Brown Rice, Asparagus
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Wednesday</AccordionTrigger>
        <AccordionContent>
          Shoulders and Abs - Shoulder Press, Lateral Raises, Planks<br />
          + Steak, Sweet Potatoes, Spinach
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Thursday</AccordionTrigger>
        <AccordionContent>
          Rest day !<br />
          + Light Salad, Avocado, Nuts
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Friday</AccordionTrigger>
        <AccordionContent>
          Legs - Squats, Lunges, Leg Press <br />
          + Turkey Breast, Green Beans, Rice
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Saturday</AccordionTrigger>
        <AccordionContent>
          Full Body - Deadlifts, Push-Ups, Kettlebell Swings <br />
          + Grilled Shrimp, Couscous, Kale
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7" className="border-b-[1px] border-[#44624a]">
        <AccordionTrigger>Sunday</AccordionTrigger>
        <AccordionContent>
          Rest day ! <br />
          + Protein Shake, Mixed Fruit
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
};

export default Bodybuilding;
