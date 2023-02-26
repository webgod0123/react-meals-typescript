import IStore from "./IStore";

export const initialState: IStore = {
  meals: {
    meals: [],
    mealDetail: undefined,
    search: "",
    filter: undefined,
  },
};

export default initialState;
