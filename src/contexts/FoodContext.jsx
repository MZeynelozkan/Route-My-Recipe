import { createContext, useContext, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

const FoodContext = createContext();

const API_URL_QUERY = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const API_URL_RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const initialState = {
  foods: [],
  meal: {},
  oldFoods: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "fetch/foods":
      return {
        ...state,
        foods: action.payload,
      };
    case "fetch/meal":
      return {
        ...state,
        meal: action.payload,
        oldFoods: state.oldFoods
          .map((food) => food.idMeal)
          .includes(action.payload.idMeal)
          ? state.oldFoods
          : [...state.oldFoods, action.payload],
      };

    case "clear/meal":
      return {
        ...state,
        foods: [],
        meal: {},
      };
    default:
      throw new Error("Unknown action type");
  }
}

function FoodProvider({ children }) {
  const [{ foods, meal, oldFoods }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchFoods(query) {
    dispatch({ type: "clear/meal" });
    try {
      const url = query ? `${API_URL_QUERY}${query}` : API_URL_RANDOM;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        console.log(data);
        dispatch({ type: "fetch/foods", payload: data.meals || [] });
      } else {
        throw new Error("Received non-JSON response");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleClear() {
    dispatch({ type: "clear/meal" });
  }

  async function fetchSingle(id) {
    if (!id) return; // Eğer id yoksa işlemi sonlandır
    dispatch({ type: "clear/meal" });
    try {
      const res = await fetch(`${BASE_URL}${id}`);
      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      console.log(data);
      dispatch({ type: "fetch/meal", payload: data.meals[0] || {} });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <FoodContext.Provider
      value={{ foods, meal, fetchFoods, fetchSingle, handleClear, oldFoods }}
    >
      {children}
    </FoodContext.Provider>
  );
}

function useFood() {
  const context = useContext(FoodContext);

  if (!context) throw new Error("useFood must be used within a FoodProvider");

  return context;
}

export { FoodProvider, useFood };
