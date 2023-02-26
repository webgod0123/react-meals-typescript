import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";
import { initialState } from "../store/initialState";
import IMealState from "../types";

export const mealsReducer: Reducer<IMealState> = (
  state: IMealState = initialState.meals,
  action: ActionTypes
): IMealState => {
  switch (action.type) {
    case ActionTypeKeys.SET_SEARCH:
      if (action.payload) {
        state.search = action.payload.searchValue;
      }

      return { ...state };

    case ActionTypeKeys.SET_FILTER:
      if (action.payload) {
        state.filter = action.payload.filterValue;
      }

      return { ...state };

    case ActionTypeKeys.SET_MEALS:
      if (action.payload) {
        state.meals = action.payload.meals;
      }

      return { ...state };

    case ActionTypeKeys.SET_MEAL_DETAIL:
      if (action.payload) {
        state.mealDetail = action.payload.mealDetail;
      }

      return { ...state };

    default:
      return state;
  }
};
