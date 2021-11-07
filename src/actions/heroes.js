import { types } from "../types/types";
import { loadHeroes } from "../helpers/loadHeroes";
import { finishLoading, startLoading } from "./ui";

export const startLoadingHeroes = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    const heroes = await loadHeroes();
    dispatch(setHeroes(heroes));
    dispatch(finishLoading());
  };
};

export const setHeroes = (heroes) => ({
  type: types.heroesLoad,
  payload: heroes,
});
