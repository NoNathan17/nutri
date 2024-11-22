"use client";

import { TrendingUp, TrendingDown, TrendingUpDown } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const RadialChart = ({ bmi }: { bmi: number }) => {
  const maxBMI = 45;
  const normalizedBMI = Math.min((1 - (bmi / maxBMI)) * 360, 360); // Inverse the scale so higher BMI fills more
  // Chart data
  const chartData = [
    { name: "BMI", value: bmi, fill: "var(--color-safari)" },
  ];

  const chartConfig = {
    BMI: {
      label: "BMI",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col" style={{ backgroundColor: '#b4c9b1', borderColor: '#44624a'}}>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360 - normalizedBMI} // Fill proportionally to BMI
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="value" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {bmi.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          BMI
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
      <div className="flex items-center gap-2 font-medium leading-none" style={{color: '#44624a'}}>
        {bmi < 18.5 && (
          <>
            Underweight <TrendingUp className="h-4 w-4" />
          </>
        )}
        {bmi >= 18.5 && bmi <= 24.9 && (
          <>
            Healthy Range <TrendingUpDown className="h-4 w-4" />
          </>
        )}
        {bmi >= 25 && bmi <= 29.9 && (
          <>
            Overweight <TrendingDown className="h-4 w-4" />
          </>
        )}
        {bmi >= 30 && (
          <>
            Obese <TrendingDown className="h-4 w-4" />
          </>
        )}
      </div>
        <div className="leading-none text-muted-foreground" style={{color: '#44624a'}}>
          Showing total BMI, make sure to stay healthy!
        </div>
      </CardFooter>
    </Card>
  );
};

export default RadialChart;
