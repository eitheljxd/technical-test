import { types } from "../types/types";
import { loadHeroes } from "../helpers/loadHeroes";

export const startLoadingHeroes = () => {
  return async (dispatch) => {
    const heroes = await loadHeroes();
    dispatch(setHeroes(heroes));
  };
};

export const setHeroes = (heroes) => ({
  type: types.heroesLoad,
  payload: heroes,
});
