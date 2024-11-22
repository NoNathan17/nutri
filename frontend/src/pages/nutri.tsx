import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const meals = [
  {
    date: "11/22/24",
    calories: "95",
    food: "Apple",
    cost: "$0.62",
  },
  {
    date: "11/23/24",
    calories: "440",
    food: "Egg Salad",
    cost: "$5.49",
  },
  {
    date: "11/23/24",
    calories: "231",
    food: "Croissant",
    cost: "$4.79",
  },
]

export function Nutri() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-y-8">
        {/* Table */}
        <Table style={{ marginTop: '150px', width: '1000px', backgroundColor: '#d8e3d3', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <TableCaption style={{ color: '#44624a', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
            A list of your recent meals!
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead style={{ color: '#44624a', width: '100px'}}>Date</TableHead>
              <TableHead style={{ color: '#44624a' }}>Calories</TableHead>
              <TableHead style={{ color: '#44624a' }}>Food</TableHead>
              <TableHead style={{ color: '#44624a', textAlign: 'right'}}>Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meals.map((meal) => (
            <TableRow key={meal.date} style={{color: '#44624a' }}>
                <TableCell className="font-medium">{meal.date}</TableCell>
                <TableCell>{meal.calories}</TableCell>
                <TableCell>{meal.food}</TableCell>
                <TableCell className="text-right">{meal.cost}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        <TableFooter>
            <TableRow style={{ backgroundColor: '#d8e3d3' }}>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$10.90</TableCell>
            </TableRow>
        </TableFooter>
        </Table>
        <hr style={{ borderTop: "2px solid #44824a"}} />
        {/* Card with Form */}
        <Card
            className="w-[1000px]"
            style={{
                backgroundColor: "#d8e3d3",
                borderRadius: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
          <CardHeader>
            <CardTitle>Did you eat yet today?</CardTitle>
            <CardDescription style={{color: '#44624a' }}>Daily calorie needs vary based on age, gender, and activity, but 2,000 calories is a general guideline. Three meals a day are recommended!</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                {/* Date Picker */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="date">Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        style={{ backgroundColor: "#d8e3d3"}}
                        >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>

                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                {/* Calories Select */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="food">Calories</Label>
                  <Input id="food" placeholder="243" />
                </div>
                {/* Food Input */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="food">Food</Label>
                  <Input id="food" placeholder="Matcha Latte" />
                </div>
                {/* Cost Input */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="cost">Cost</Label>
                  <Input id="cost" placeholder="7.25" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" style={{ backgroundColor: "#d8e3d3", borderColor: "#44624a"}}>Clear</Button>
            <Button variant="outline" style={{ backgroundColor: "#d8e3d3", borderColor: "#44624a"}}>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Nutri
