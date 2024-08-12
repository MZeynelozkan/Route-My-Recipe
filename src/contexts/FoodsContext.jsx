import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const FoodsContext = createContext();

const API_URL_QUERY = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const API_URL_RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";

const initialState = {
  foods: [],
};

function foodsReducer(state, action) {
  switch (action.type) {
    case "fetch/foods":
      return {
        ...state,
        foods: action.payload,
      };
    case "clear/foods":
      return {
        ...state,
        foods: [],
      };
    default:
      throw new Error("Unknown action type");
  }
}

function FoodsProvider({ children }) {
  const [{ foods }, dispatch] = useReducer(foodsReducer, initialState);

  const fetchFoods = useCallback(async function fetchFoods(query) {
    dispatch({ type: "clear/foods" });
    try {
      const url = query ? `${API_URL_QUERY}${query}` : API_URL_RANDOM;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        dispatch({ type: "fetch/foods", payload: data.meals || [] });
      } else {
        throw new Error("Received non-JSON response");
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const value = useMemo(
    () => ({
      foods,
      fetchFoods,
    }),
    [foods, fetchFoods]
  );

  return (
    <FoodsContext.Provider value={value}>{children}</FoodsContext.Provider>
  );
}

function useFood() {
  const context = useContext(FoodsContext);

  if (!context) throw new Error("useFoods must be used within a FoodsProvider");

  return context;
}

export { FoodsProvider, useFood };
