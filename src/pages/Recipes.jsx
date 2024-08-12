import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useFood } from "../contexts/FoodsContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipes() {
  const { foods, fetchFoods } = useFood();
  const { query } = useParams();

  useEffect(
    function () {
      fetchFoods(query);
    },
    [query, fetchFoods]
  );

  if (!foods || foods.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14 h-fit">
        <div
          className={`w-full max-w-[1300px] mx-auto ${
            foods.length >= 3
              ? "grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4"
          }`}
        >
          {foods.map((food) => (
            <Card key={food.idMeal} randomFood={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
