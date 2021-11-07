import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Test for Auth Reducer", () => {
  test("Should be login correctly", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "Eithel",
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({
      uid: "abc",
      name: "Eithel",
    });
  });

  test("Should be logout correctly", () => {
    const initState = {};
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });

  test("Should not make changes to the state with an unmapped action", () => {
    const initState = {};
    const action = {
      type: "testActionError",
    };
    const state = authReducer(initState, action);
    expect(state).toEqual(initState);
  });
});
