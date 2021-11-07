import { types } from "../types/types";

const initialState = {
  heroes: [],
  active: null,
};

export const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.heroesLoad:
      return {
        ...state,
        heroes: [...action.payload],
      };

    default:
      return state;
  }
};
