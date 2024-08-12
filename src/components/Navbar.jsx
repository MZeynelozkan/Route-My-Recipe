import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMeal } from "../contexts/MealContext";

function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const { oldMeals } = useMeal();

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      navigate(`/recipes/query/${inputValue.trim()}`);
      setInputValue(""); // Aramadan sonra input'u temizler
    }
  }

  function handleClear() {
    setInputValue("");
  }

  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-evenly px-3">
        <NavLink to="/">
          <span className="ms-2 text-2xl font-extrabold text-black dark:text-white">
            myRecipe
          </span>
        </NavLink>
        <div className="space-x-6">
          <NavLink className="font-bold hover:text-blue-600" to="/">
            Home
          </NavLink>
          <NavLink className="font-bold hover:text-blue-600" to="/aboutus">
            About Us
          </NavLink>
          <NavLink
            className="font-bold hover:text-blue-600"
            to={`${oldMeals?.length > 0 ? "/old" : "/recipes"}`}
          >
            Old Recipes
          </NavLink>

          <NavLink className="font-bold hover:text-blue-600" to="/recipes">
            Recipes
          </NavLink>
        </div>

        <div className="ms-5 flex w-[30%] items-center justify-between">
          <form className="flex w-full" onSubmit={handleSubmit}>
            <input
              type="search"
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-12 top-2 text-gray-500 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-9.707a1 1 0 011.414 0L10 9.586l1.879-1.88a1 1 0 111.414 1.415L11.414 11l1.88 1.879a1 1 0 01-1.415 1.414L10 12.414l-1.879 1.88a1 1 0 01-1.414-1.415L8.586 11l-1.88-1.879a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}

            <button
              type="submit"
              className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
