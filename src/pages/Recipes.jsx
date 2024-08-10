import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function Recipes() {
  const [foods, setFoods] = useState([]);

  useEffect(function () {
    async function fetchFoods() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Went Wrong");

        const data = await res.json();
        setFoods(data.meals);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchFoods();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14 h-fit">
        <div className="w-full max-w-[1300px] mx-auto ">
          {foods.map((food) => (
            <Card key={food.idMeal} randomFood={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
