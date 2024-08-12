import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useMeal } from "../contexts/MealContext";

function OldFoods() {
  const { oldMeals } = useMeal();

  if (oldMeals.length === 0) {
    return <div>No previously viewed meals.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14 h-fit">
        <div
          className={`w-full max-w-[1300px] mx-auto ${
            oldMeals.length >= 3
              ? "grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4"
          }`}
        >
          {oldMeals.map((food) => (
            <Card key={food.idMeal} randomFood={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OldFoods;
