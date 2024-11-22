import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const GeneralHealth = () => {
  const workoutPlan = [
    "Day 1: Light Cardio - 30 minutes brisk walk or cycling",
    "Day 2: Yoga - 45 minutes of stretching and mindfulness",
    "Day 3: Strength Training - Bodyweight exercises (squats, lunges)",
    "Day 4: Rest",
    "Day 5: Cardio - Swimming or cycling for 45 minutes",
    "Day 6: Full Body Strength - Bodyweight exercises + Dumbbells",
    "Day 7: Rest"
  ];

  const mealPlan = [
    "Day 1: Chicken Salad with mixed greens and olive oil dressing",
    "Day 2: Grilled Fish, Brown Rice, Steamed Vegetables",
    "Day 3: Turkey Sandwich, Whole Wheat Bread, Mixed Veggies",
    "Day 4: Rest Day - Smoothie with spinach, banana, almond milk",
    "Day 5: Grilled Chicken, Quinoa, Roasted Vegetables",
    "Day 6: Lentil Soup, Whole Grain Bread, Salad",
    "Day 7: Rest Day - Greek Yogurt with Berries and Nuts"
  ];

  return (
    <div style={{ marginTop: '150px', width: '1000px', height: '600px', backgroundColor: '#d8e3d3'}} className="form-container flex flex-col space-y-5">
    <h1 style={{ fontSize: '18px' }}>General Health Plan</h1>
    <div className="mt-4 text-[#44624a]">
      <p style={{fontSize: '12px' }}>
        Structured guidance for sustaining healthy practices.
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
      Strength Training - Bodyweight exercises (squats, lunges)<br />
      + Turkey Sandwich, Whole Wheat Bread, Mixed Veggies
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 4</AccordionTrigger>
      <AccordionContent>
        Rest day<br />
      + Smoothie with spinach, banana, almond milk
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 5</AccordionTrigger>
      <AccordionContent>
      Cardio - Swimming or cycling for 45 minutes <br />
      + Grilled Chicken, Quinoa, Roasted Vegetables
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 6</AccordionTrigger>
      <AccordionContent>
      Full Body Strength - Bodyweight exercises + Dumbbells <br />
        + Lentil Soup, Whole Grain Bread, Salad
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-7" className="border-b-[1px] border-[#44624a]">
      <AccordionTrigger>Day 7</AccordionTrigger>
      <AccordionContent>
      Rest day<br />
      + Rest Day - Greek Yogurt with Berries and Nuts
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
  );
};

export default GeneralHealth;
