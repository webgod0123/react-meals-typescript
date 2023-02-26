import { combineReducers } from "redux";
import IStore from "../store/IStore";
import { mealsReducer } from "./MealsReducer";

const rootReducer = combineReducers<IStore>({
  meals: mealsReducer,
});

export default rootReducer;
