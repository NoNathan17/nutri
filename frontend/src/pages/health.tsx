"use client"

import { Bar, BarChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Data representing calories burned by each type of exercise on different days
const chartData = [
  { date: "2024-07-15", rest: 15},
  { date: "2024-07-16", briskWalking: 190 },
  { date: "2024-07-17", yoga: 180 },
  { date: "2024-07-18", strengthTraining: 350 },
  { date: "2024-07-19", rest: 15 },
  { date: "2024-07-20", cycling: 250 },
  { date: "2024-07-21", strengthTraining: 350 }
]

const chartConfig = {
  briskWalking: {
    label: "Brisk Walking",
    color: "#9cba9c",
  },
  cycling: {
    label: "Cycling | Swimming",
    color: "#b5d0b5",
  },
  yoga: {
    label: "Yoga",
    color: "#a3c4a3",
  },
  strengthTraining: {
    label: "Strength Training",
    color: "#6f9e6f",
  },
  swimming: {
    label: "Swimming",
    color: "#d1e0d1",
  },
  rest: {
    label: "Rest",
    color: "#88b488",
  },
} satisfies ChartConfig

export function GeneralHealth() {
  return (
    <div style={{ marginTop: "150px", width: "1000px", height: "auto", backgroundColor: "#d8e3d3" }} className="form-container flex flex-col space-y-5">
      {/* Header Section */}
      <h1 style={{ fontSize: '18px', marginTop: '15px' }}>General Health Plan</h1>
        <p style={{ fontSize: '12px', marginTop: '0px'}}>Tips and routines to maintain overall well-being and happiness!</p>

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>Calories Burned</CardTitle>
          <CardDescription>Oriented to make you happy and healthy!</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    weekday: "short",
                  })
                }}
              />
              {/* Brisk Walking */}
              <Bar
                dataKey="briskWalking"
                stackId="a"
                fill={chartConfig.briskWalking.color}
                radius={[4, 4, 0, 0]}
              />
              {/* Cycling */}
              <Bar
                dataKey="cycling"
                stackId="a"
                fill={chartConfig.cycling.color}
                radius={[4, 4, 0, 0]}
              />
              {/* Yoga */}
              <Bar
                dataKey="yoga"
                stackId="a"
                fill={chartConfig.yoga.color}
                radius={[4, 4, 0, 0]}
              />
              {/* Strength Training */}
              <Bar
                dataKey="strengthTraining"
                stackId="a"
                fill={chartConfig.strengthTraining.color}
                radius={[4, 4, 0, 0]}
              />
              {/* Swimming */}
              <Bar
                dataKey="swimming"
                stackId="a"
                fill={chartConfig.swimming.color}
                radius={[4, 4, 0, 0]}
              />
              {/* Rest */}
              <Bar
                dataKey="rest"
                stackId="a"
                fill={chartConfig.rest.color}
                radius={[4, 4, 0, 0]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="w-[180px]"
                    formatter={(value, name, item, index) => (
                      <>
                        <div
                          className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
                          style={{
                            backgroundColor: chartConfig[name as keyof typeof chartConfig]?.color,
                          }}
                        />
                        {chartConfig[name as keyof typeof chartConfig]?.label || name}
                        <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                          {value}
                          <span className="font-normal text-muted-foreground">
                            kcal
                          </span>
                        </div>
                        {index === 1 && (
                          <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                            Total
                            <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                              {item.payload.briskWalking + item.payload.cycling + item.payload.yoga + item.payload.strengthTraining + item.payload.swimming + item.payload.fullBodyStrength}
                              <span className="font-normal text-muted-foreground">
                                kcal
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  />
                }
                cursor={false}
                defaultIndex={1}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Accordion Section */}
      <Accordion type="single" collapsible className="w-full text-[#44624a]">
        <AccordionItem value="item-1" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Monday</AccordionTrigger>
          <AccordionContent>
            Brisk Walking - 30 Min<br />
            + Chicken Salad with Mixed Greens, Olive Oil Dressing
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Tuesday</AccordionTrigger>
          <AccordionContent>
            Gentle Yoga - 30 Min Flow<br />
            + Grilled Fish, Brown Rice, Steamed Vegetables
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Wednesday</AccordionTrigger>
          <AccordionContent>
            Strength Training - Bodyweight Exercises (Squats, Lunges)<br />
            + Turkey Sandwich, Whole Wheat Bread, Mixed Veggies
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Thursday</AccordionTrigger>
          <AccordionContent>
            Rest Day!<br />
            + Smoothie with Spinach, Banana, Almond Milk
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Friday</AccordionTrigger>
          <AccordionContent>
            Cardio - 45 Min Swimming or Cycling<br />
            + Grilled Chicken, Quinoa, Roasted Vegetables
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Saturday</AccordionTrigger>
          <AccordionContent>
            Strength Training - Bodyweight Exercises + Dumbbells<br />
            + Lentil Soup, Whole Grain Bread, Salad
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-b-[1px] border-[#44624a]">
          <AccordionTrigger>Sunday</AccordionTrigger>
          <AccordionContent>
            Rest Day!<br />
            + Greek Yogurt with Berries, Nuts
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default GeneralHealth;
