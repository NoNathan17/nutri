
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "0.5", calories: 250, protein: 75 },
  { month: "1.0", calories: 500, protein: 130 },
  { month: "1.5", calories: 750, protein: 225 },
  { month: "2.0", calories: 1000, protein: 300 },
];

const chartConfig = {
  calories: {
    label: "Calories",
    color: "#9caf88",
  },
  protein: {
    label: "Protein",
    color: "#6e8f6b",
  },
} satisfies ChartConfig

const Bodybuilding = () => {
  const [bmi, setBmi] = useState(null);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        A plan tailored to build muscle and strength effectively!<br />
        BMI: {bmi ? bmi : "No Data Available"} | Maintenance Calories: {maintenanceCalories ? maintenanceCalories : "No Data Available"}
      </p>
      <Card style={{marginTop: '10px' }}>
        <CardHeader>
          <CardTitle>{name}'s Calorie Intake</CardTitle>
          <CardDescription>Muscle Gained / Week (lbs)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="calories"
                type="monotone"
                stroke={chartConfig.calories.color}
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="protein"
                type="monotone"
                stroke={chartConfig.protein.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Protein Intake per Calorie{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                Add depicted calories to maintenance
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
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
