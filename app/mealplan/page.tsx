export default function MealPlanDashboard() {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div>
          {" "}
          <h1> Meal Plan Generator </h1>
          <form>
            <div>
              <label htmlFor="dietType"> Diet Type </label>
              <input
                type="text"
                id="dietType"
                required
                placeholder="e.g. Vegetarian, Vegan, Keto, Mediterranean..."
              />
            </div>

            <div>
              <label htmlFor="calories"> Daily Calorie Goal </label>
              <input
                type="number"
                id="calories"
                required
                min={500}
                max={15000}
                placeholder="e.g. 2000"
              />
            </div>

            <div>
              <label htmlFor="allergies"> Allergies </label>
              <input
                type="text"
                id="allergies"
                required
                placeholder="e.g. Dairy, Nuts, Gluten, None..."
              />
            </div>

            <div>
              <label htmlFor="cuisine"> Cuisine Preference </label>
              <input
                type="text"
                id="cuisine"
                required
                placeholder="e.g. Italian, Mexican, Asian, None..."
              />
            </div>

            <div>
              <input type="checkbox" id="snacks" />
              <label htmlFor="snacks"> Include Snacks </label>
            </div>

            <div>
              <button type="submit">Generate Meal Plan</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>Weekly Meal Plan</h2>
      </div>{" "}
    </div>
  );
}
