import { Link } from "react-router-dom";
import { IMeal } from "../types";

const Meal = ({ meal }: { meal: IMeal }) => {
  return (
    <Link to={`/meal/${meal.idMeal}`} className="meal-container">
      <div className="meal-content">
        <div className="meal-img">
          <img src={meal.strMealThumb} alt={meal.strMealThumb} />
        </div>
        <div className="meal-name">{meal.strMeal}</div>
      </div>
    </Link>
  );
};

export default Meal;
