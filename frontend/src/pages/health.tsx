import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const GeneralHealth = () => {
  

  return (
    <div style={{ marginTop: '150px', width: '1000px', height: '600px', backgroundColor: '#d8e3d3'}} className="form-container flex flex-col space-y-5">
    <h1 style={{ fontSize: '18px' }}>General Health Plan</h1>
    <div className="mt-4 text-[#44624a]">
      <p style={{fontSize: '12px' }}>
        Tips and routines to maintain overall well-being.
      </p>
    </div>
    <Accordion type="single" collapsible className="w-full text-[#44624a]">
    <AccordionItem value="item-1" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 1</AccordionTrigger>
      <AccordionContent>
      Light Cardio - 30 minutes brisk walk or cycling<br />
      + Chicken Salad with mixed greens and olive oil dressing
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 2</AccordionTrigger>
      <AccordionContent>
      Chicken Salad with mixed greens and olive oil dressing<br />
      + Grilled Fish, Brown Rice, Steamed Vegetables
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 3</AccordionTrigger>
      <AccordionContent>
      Strength Training - Bodyweight Exercises (squats, lunges)<br />
      + Turkey Sandwich, Whole Wheat Bread, Mixed Veggies
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 4</AccordionTrigger>
      <AccordionContent>
        Rest day!<br />
      + Smoothie w/ Spinach, Banana, Almond Milk
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 5</AccordionTrigger>
      <AccordionContent>
      Cardio - Swimming / Cycling 45 Min <br />
      + Grilled Chicken, Quinoa, Roasted Vegetables
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 6</AccordionTrigger>
      <AccordionContent>
      Full Body Strength - Bodyweight Exercises + Dumbbells <br />
        + Lentil Soup, Whole Grain Bread, Salad
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 7</AccordionTrigger>
      <AccordionContent>
      Rest day !<br />
      + Greek Yogurt w/ Berries, Nuts
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
  );
};

export default GeneralHealth;
