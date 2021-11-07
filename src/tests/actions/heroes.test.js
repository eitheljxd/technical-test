import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startLoadingHeroes } from "../../actions/heroes";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "uidtesting",
  },
};
let store = mockStore(initState);

describe("Pruebas UI Actions", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });
  test("startLoadingHeroes debe cargar todos los heroes", async () => {
    await store.dispatch(startLoadingHeroes());
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.heroesLoad,
      payload: expect.any(Array),
    });
  });
});
