import { useRef, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { useFood } from "../contexts/FoodsContext";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

function Recipes() {
  const { foods, loading, fetchFoods, dispatch } = useFood();
  const { query } = useParams();
  const prevQueryRef = useRef("");

  useEffect(() => {
    dispatch({ type: "clear/foods" });

    if (query !== prevQueryRef.current) {
      fetchFoods(query || "");
      prevQueryRef.current = query;
    }
  }, [query, fetchFoods, dispatch]);

  if (loading) {
    return (
      <div className="h-dvh">
        <Navbar />
        <Spinner />
      </div>
    );
  }

  if (!foods || foods.length === 0) {
    return (
      <div className="h-dvh">
        <Navbar />
        <div>No results found</div>
      </div>
    );
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

export default memo(Recipes);
