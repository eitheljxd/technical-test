import { types } from "../../types/types";

describe("Test for own types", () => {
  test("The types should exist with a specific object", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",

      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      heroesLoad: "[Heroes] Load heroes",
    });
  });
});
