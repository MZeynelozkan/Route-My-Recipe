import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { FoodsProvider } from "./contexts/FoodsContext";
import { MealProvider } from "./contexts/MealContext";
// import Main from "./pages/Main";
// import AboutUs from "./pages/AboutUs";
// import Recipes from "./pages/Recipes";
// import OldFoods from "./pages/OldFoods";
// import ShowRecipeDetail from "./pages/ShowRecipeDetail";

const Main = lazy(() => import("./pages/Main"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Recipes = lazy(() => import("./pages/Recipes"));
const OldFoods = lazy(() => import("./pages/OldFoods"));
const ShowRecipeDetail = lazy(() => import("./pages/ShowRecipeDetail"));

function App() {
  return (
    <div>
      <FoodsProvider>
        <MealProvider>
          <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route index element={<Main />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="recipes/:id" element={<ShowRecipeDetail />} />
                <Route path="recipes/query/:query" element={<Recipes />} />
                <Route
                  path="recipes/query/:query/:id"
                  element={<ShowRecipeDetail />}
                />
                <Route path="old" element={<OldFoods />} />
                <Route path="old/:id" element={<ShowRecipeDetail />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </MealProvider>
      </FoodsProvider>
    </div>
  );
}

export default App;
