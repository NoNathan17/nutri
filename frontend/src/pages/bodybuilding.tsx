import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Bodybuilding = () => {
  return (
    <div style={{ marginTop: '150px', width: '500px', height: '600px', backgroundColor: '#d8e3d3'}} className="form-container flex flex-col space-y-5">
      <h1 style={{ fontSize: '18px' }}>Bodybuilding Plan !!</h1>
      <div className="mt-4 text-[#44624a]">
        <p style={{fontSize: '12px' }}>
          A plan tailored to build muscle and strength effectively.
        </p>
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
