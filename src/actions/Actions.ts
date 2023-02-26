import keys from "./ActionTypeKey";
import * as IActions from "./IActions";
import { Filter, IMeal } from "../types";
import { fetchMeal, fetchMeals } from "../api";
import { Dispatch } from "redux";

export const fetchMealList = (
  dispatch: Dispatch,
  search?: string,
  filter?: string
) => {
  fetchMeals(search, filter).then((res) => {
    dispatch(setMeals(res));
  });
};

export const fetchMealDetail = (dispatch: Dispatch, id: string) => {
  fetchMeal(id).then((res) => {
    dispatch(setMealDetail(res));
  });
};

export const setMeals = (meals: IMeal[]) => {
  return {
    type: keys.SET_MEALS,
    payload: { meals },
  };
};

export const setMealDetail = (mealDetail: IMeal | undefined) => {
  return {
    type: keys.SET_MEAL_DETAIL,
    payload: { mealDetail },
  };
};

export const setSearchValue = (
  searchValue: string
): IActions.ISetSearchValue => {
  return {
    type: keys.SET_SEARCH,
    payload: { searchValue },
  };
};

export const setFilterValue = (
  filterValue: Filter
): IActions.ISetFilterValue => {
  return {
    type: keys.SET_FILTER,
    payload: { filterValue },
  };
};
