import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Bodybuilding = () => {
  return (
    <div style={{ marginTop: '150px', width: '500px'}} className="form-container flex flex-col space-y-5">
      <h1 style={{ fontSize: '18px' }}>bodybuilding !!</h1>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex justify-center w-full">monday</AccordionTrigger>
        <AccordionContent>
          Chest and Triceps - Bench Press, Dumbbell Flys, Tricep Dips<br />
          + Grilled Chicken, Quinoa, Broccoli
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>tuesday</AccordionTrigger>
        <AccordionContent>
          Back and Biceps - Pull-Ups, Barbell Rows, Bicep Curls<br />
          + Salmon, Brown Rice, Asparagus
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>wednesday</AccordionTrigger>
        <AccordionContent>
          Shoulders and Abs - Shoulder Press, Lateral Raises, Planks<br />
          + Steak, Sweet Potatoes, Spinach
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>thursday</AccordionTrigger>
        <AccordionContent>
          Rest day !<br />
          + Light Salad, Avocado, Nuts
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>friday</AccordionTrigger>
        <AccordionContent>
          Legs - Squats, Lunges, Leg Press <br />
          + Turkey Breast, Green Beans, Rice
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>saturday</AccordionTrigger>
        <AccordionContent>
          Full Body - Deadlifts, Push-Ups, Kettlebell Swings <br />
          + Grilled Shrimp, Couscous, Kale
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>sunday</AccordionTrigger>
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
