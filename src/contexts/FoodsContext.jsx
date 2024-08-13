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
  loading: false, // loading durumunu ekledik
};

function foodsReducer(state, action) {
  switch (action.type) {
    case "fetch/foods":
      return {
        ...state,
        foods: action.payload,
        loading: false, // veri yüklendiğinde loading'i false yap
      };
    case "clear/foods":
      return {
        ...state,
        foods: [],
      };
    case "set/loading": // loading durumunu güncelle
      return {
        ...state,
        loading: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function FoodsProvider({ children }) {
  const [{ foods, loading }, dispatch] = useReducer(foodsReducer, initialState);

  const fetchFoods = useCallback(async function fetchFoods(query) {
    dispatch({ type: "clear/foods" });
    dispatch({ type: "set/loading", payload: true }); // loading'i true yap

    try {
      const url = query ? `${API_URL_QUERY}${query}` : API_URL_RANDOM;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      await new Promise((resolve) => setTimeout(resolve, 600));
      dispatch({ type: "fetch/foods", payload: data.meals || [] });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "set/loading", payload: false });
    } finally {
      dispatch({ type: "set/loading", payload: false });
    }
  }, []);

  const value = useMemo(
    () => ({
      foods,
      loading,
      fetchFoods,
      dispatch,
    }),
    [foods, loading, fetchFoods]
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
