import { Filter, IMeal } from "../types";

const api = "https://themealdb.com/api/json/v1/1/";

export const fetchMeals = async (
  search?: string,
  filter?: string
): Promise<IMeal[]> => {
  let url = api;

  switch (filter) {
    case Filter.CATEGORY:
      url += `filter.php?c=${search}`;
      break;
    case Filter.INGREDIENT:
      url += `filter.php?i=${search}`;
      break;
    case Filter.AREA:
      url += `filter.php?a=${search}`;
      break;
    default:
      url += `search.php?s=${search}`;
  }

  const res = await fetch(url);
  const result = await res.json();
  return result.meals ? result.meals : [];
};

export const fetchMeal = async (id: string): Promise<IMeal | undefined> => {
  const res = await fetch(`${api}lookup.php?i=${id}`);
  const result = await res.json();
  return result.meals ? result.meals[0] : undefined;
};
