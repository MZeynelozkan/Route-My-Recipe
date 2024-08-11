import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";

import ShowRecipeDetail from "./pages/ShowRecipeDetail";
import { FoodProvider } from "./contexts/FoodContext";

function App() {
  return (
    <div>
      <FoodProvider>
        <BrowserRouter>
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
          </Routes>
        </BrowserRouter>
      </FoodProvider>
    </div>
  );
}

export default App;
