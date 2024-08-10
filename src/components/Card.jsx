import { Link } from "react-router-dom";

function Card({ randomFood }) {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb, strTags } =
    randomFood;

  return (
    <div className="relative w-full max-w-[450px] mx-auto ">
      <Link to={`${idMeal}`}>
        <div className="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark ">
          <img className="rounded-lg max-h-[450px]" src={strMealThumb} alt="" />
          <div className="absolute top-0 p-6">
            <h5 className="mb-2 text-2xl  leading-tight font-extrabold ">
              {strMeal}
            </h5>
            <p className="mb-4 text-base ">{strCategory}</p>
            <p className=" text-xl">
              <small>{strArea}</small>
              <br />
              <small>{strTags}</small>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
