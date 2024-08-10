import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Recipes from "./pages/Recipes";
import Recipess from "./pages/Recipess";
import ShowRecipeDetail from "./pages/ShowRecipeDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<ShowRecipeDetail />} />
          <Route path="recipes/query/:query" element={<Recipess />} />
          <Route
            path="recipes/query/:query/:id"
            element={<ShowRecipeDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
