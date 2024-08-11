import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFood } from "../contexts/FoodContext";
import { useEffect } from "react";

function ShowRecipeDetail() {
  const { meal, fetchSingle } = useFood();
  const { id } = useParams();

  useEffect(
    function () {
      fetchSingle(id);
    },
    [id]
  );

  if (!meal || !meal.strMeal) {
    return <div>Loading...</div>;
  }

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
    strInstructions,
  } = meal;

  return (
    <div>
      <Navbar />
      <div className="w-full px-5 mt-14">
        <div className="border-solid border-2 shadow-md block max-w-[18rem] md:max-w-[24rem] lg:max-w-[36rem] xl:max-w-[48rem] mx-auto rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={strMealThumb}
              alt={strMeal}
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              {strMeal}
            </h5>
            <p className="text-base mb-2">Category: {strCategory}</p>
            <p className="text-base mb-2">Area: {strArea}</p>
            <p className="text-base mb-4">Tags: {strTags}</p>
            <p className="text-base">{strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowRecipeDetail;
