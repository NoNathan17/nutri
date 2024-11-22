import React from "react";

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
    <div className="form-container flex flex-col space-y-5">
      <h1>General Health Plan</h1>

      <div>
        <h2>Weekly Workout Plan</h2>
        <ul className="list-disc pl-5">
          {workoutPlan.map((workout, index) => (
            <li key={index}>{workout}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Weekly Meal Plan</h2>
        <ul className="list-disc pl-5">
          {mealPlan.map((meal, index) => (
            <li key={index}>{meal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeneralHealth;
