import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMealDetail } from "../actions/Actions";
import Header from "../components/Header";
import IStore from "../store/IStore";
import { IMeal } from "../types";

const Arr = Array.from(Array(20).keys());

const Meal = () => {
  let { mealId } = useParams();
  const dispatch = useDispatch();
  const meal = useSelector((state: IStore) => state.meals.mealDetail);

  useEffect(() => {
    console.log(mealId);
    if (!mealId) return;
    fetchMealDetail(dispatch, mealId);
    // eslint-disable-next-line
  }, [mealId]);

  return (
    <>
      <Header />
      {meal && (
        <div>
          <div className="detail-header">
            <div className="detail-left">
              <img src={meal.strMealThumb} alt={meal.strMealThumb} />
            </div>
            <div className="detail-right">
              <div className="detail-title">{meal.strMeal}</div>
              <div className="detail-content">
                {Arr.map(
                  (index) =>
                    meal[`strMeasure${index}` as keyof IMeal] && (
                      <div key={index} className="detail-content-item">
                        <b>{meal[`strMeasure${index}` as keyof IMeal]}</b>{" "}
                        <span>
                          {meal[`strIngredient${index}` as keyof IMeal]}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="detail-body">
            <div className="detail-left"></div>
            <div className="detail-right">
              <div className="detail-body-content">
                <iframe
                  className="detail-video"
                  height={'500'}
                  src={meal.strYoutube.replace("watch?v=", "embed/")}
                ></iframe>
                <pre className="detail-description">{meal.strInstructions}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Meal;
