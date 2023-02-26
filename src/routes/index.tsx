import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as Switch,
} from "react-router-dom";
import Home from "../pages/Home";
import Meal from "../pages/MealDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/meal/:mealId" element={<Meal />} />
        <Route path="/" element={<Navigate to={'/home'} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
