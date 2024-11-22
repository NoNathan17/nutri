import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const WeightLoss = () => {
  return (
    <div style={{ marginTop: '150px', width: '1000px', height: '600px', backgroundColor: '#d8e3d3'}} className="form-container flex flex-col space-y-5">
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
      Cardio - 30 Min Treadmill, 20 Min HIIT<br />
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
      Cardio - Cycling, 30 Min<br />
      + Lean Turkey, Sweet Potato, Roasted Brussel Sprouts
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 4</AccordionTrigger>
      <AccordionContent>
        Rest day !<br />
      + Salad w/ Mixed Greens, Nuts, Berries
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
      Rest day !<br />
      + Protein Shake, Almonds, Banana
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
  );
};

export default WeightLoss;
