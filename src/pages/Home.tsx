import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterValue,
  setSearchValue,
  fetchMealList,
} from "../actions/Actions";
import "../assets/styles/home.css";
import Button from "../components/Button";
import Meal from "../components/Meal";
import IStore from "../store/IStore";
import { Filter } from "../types";

const Home = () => {
  const dispatch = useDispatch();
  const meals = useSelector((state: IStore) => state.meals.meals);
  const search = useSelector((state: IStore) => state.meals.search);
  const filter = useSelector((state: IStore) => state.meals.filter);

  const fetchMeals = () => {
    fetchMealList(dispatch, search, filter);
  };

  useEffect(() => {
    if (search) fetchMeals();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!filter) return;
    fetchMeals();
    // eslint-disable-next-line
  }, [filter]);

  return (
    <>
      <div className="home-header">
        <div className="home-header-overlay">
          <div className="home-header-hero">
            <div className="home-header-title">Only Quality Food</div>
            <div className="home-header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
          <div className="home-header-search">
            <div className="home-header-search-title">Search our database</div>
            <form
              className="home-header-search-bar"
              onSubmit={(e) => {
                e.preventDefault();
                fetchMeals();
              }}
            >
              <input
                value={search}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                placeholder="search for a meal..."
              />
              <button>Search</button>
            </form>
            <div className="home-header-search-filter">
              by
              <div className="btn-group">
                {(Object.keys(Filter) as Array<keyof typeof Filter>).map(
                  (key, index) => (
                    <Button
                      key={index}
                      text={Filter[key]}
                      cssClass={`filter-btn ${
                        filter === Filter[key] && "active"
                      }`}
                      onClick={() => dispatch(setFilterValue(Filter[key]))}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {meals.length > 0 && (
        <div className="home-meals-container">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
