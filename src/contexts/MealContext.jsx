import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const MealContext = createContext();

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const initialState = {
  meal: {},
  oldMeals: [],
};

function mealReducer(state, action) {
  switch (action.type) {
    case "fetch/meal":
      const isMealExists = state.oldMeals.some(
        (food) => food.idMeal === action.payload.idMeal
      );
      return {
        ...state,
        meal: action.payload,
        oldMeals: isMealExists
          ? state.oldMeals
          : [...state.oldMeals, action.payload],
      };

    case "clear/meal":
      return {
        ...state,
        meal: {},
      };
    default:
      throw new Error("Unknown action type");
  }
}

function MealProvider({ children }) {
  const [{ meal, oldMeals }, dispatch] = useReducer(mealReducer, initialState);

  const fetchSingle = useCallback(
    async function fetchSingle(id) {
      if (!id) return;

      dispatch({ type: "clear/meal" });
      try {
        const res = await fetch(`${BASE_URL}${id}`);
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        dispatch({ type: "fetch/meal", payload: data.meals[0] || {} });
      } catch (error) {
        console.log(error.message);
      }
    },
    [dispatch]
  );

  const value = useMemo(
    () => ({
      meal,
      fetchSingle,
      oldMeals,
    }),
    [meal, fetchSingle, oldMeals]
  );

  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
}

function useMeal() {
  const context = useContext(MealContext);

  if (!context) throw new Error("useMeal must be used within a MealProvider");

  return context;
}

export { MealProvider, useMeal };
