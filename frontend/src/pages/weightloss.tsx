const WeightLoss = () => {
  const workoutPlan = [
    "Day 1: Cardio - 30 minutes on treadmill, 20 minutes HIIT",
    "Day 2: Full Body Strength - Squats, Push-Ups, Dumbbell Rows",
    "Day 3: Cardio - Cycling, 30 minutes",
    "Day 4: Rest",
    "Day 5: Lower Body - Lunges, Leg Press, Deadlifts",
    "Day 6: Upper Body - Push-Ups, Pull-Ups, Bicep Curls",
    "Day 7: Rest"
  ];

  const mealPlan = [
    "Day 1: Grilled Chicken Salad, Quinoa, Avocado",
    "Day 2: Grilled Salmon, Brown Rice, Steamed Veggies",
    "Day 3: Lean Turkey, Sweet Potato, Roasted Brussel Sprouts",
    "Day 4: Rest Day - Salad with Mixed Greens, Nuts, Berries",
    "Day 5: Baked Chicken, Cauliflower Rice, Spinach",
    "Day 6: Grilled Shrimp, Zucchini Noodles, Garlic",
    "Day 7: Rest Day - Protein Shake, Almonds, Banana"
  ];

  return (
    <div className="form-container flex flex-col space-y-5">
      <h1>Weight Loss Plan</h1>

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

export default WeightLoss;
