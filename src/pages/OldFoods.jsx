import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useFood } from "../contexts/FoodContext";

function OldFoods() {
  const { oldFoods } = useFood();

  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14 h-fit">
        <div
          className={`w-full max-w-[1300px] mx-auto ${
            oldFoods.length >= 3
              ? "grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4"
          }`}
        >
          {oldFoods?.map((food) => (
            <Card key={food.idMeal} randomFood={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OldFoods;
