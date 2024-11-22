const Bodybuilding = () => {
  const workoutPlan = [
    "Day 1: Chest and Triceps - Bench Press, Dumbbell Flys, Tricep Dips",
    "Day 2: Back and Biceps - Pull-Ups, Barbell Rows, Bicep Curls",
    "Day 3: Shoulders and Abs - Shoulder Press, Lateral Raises, Planks",
    "Day 4: Rest",
    "Day 5: Legs - Squats, Lunges, Leg Press",
    "Day 6: Full Body - Deadlifts, Push-Ups, Kettlebell Swings",
    "Day 7: Rest"
  ];

  const mealPlan = [
    "Day 1: Grilled Chicken, Quinoa, Broccoli",
    "Day 2: Salmon, Brown Rice, Asparagus",
    "Day 3: Steak, Sweet Potatoes, Spinach",
    "Day 4: Rest Day - Light Salad, Avocado, Nuts",
    "Day 5: Turkey Breast, Green Beans, Rice",
    "Day 6: Grilled Shrimp, Couscous, Kale",
    "Day 7: Rest Day - Protein Shake, Mixed Fruit"
  ];

  return (
    <div className="form-container flex flex-col space-y-5">
      <h1>Bodybuilding Plan</h1>

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

export default Bodybuilding;
