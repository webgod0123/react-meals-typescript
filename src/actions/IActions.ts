import { Action } from "redux";
import { Filter, IMeal } from "../types";
import keys from "./ActionTypeKey";

export interface ISetSearchValue extends Action {
  readonly type: keys.SET_SEARCH;
  payload?: {
    searchValue: string;
  };
}

export interface ISetFilterValue extends Action {
  readonly type: keys.SET_FILTER;
  payload?: {
    filterValue: Filter;
  };
}

export interface ISetMeals extends Action {
  readonly type: keys.SET_MEALS;
  payload?: {
    meals: IMeal[];
  };
}

export interface ISetMealDetail extends Action {
  readonly type: keys.SET_MEAL_DETAIL;
  payload?: {
    mealDetail: IMeal;
  };
}

