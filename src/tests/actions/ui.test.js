import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Test UI Actions", () => {
  test("All actions should be executed", () => {
    const action = setError("Ups");
    const finishLoadingUI = finishLoading();
    const startLoadingUI = startLoading();
    const removeErrorUI = removeError();
    expect(action).toEqual({
      type: types.uiSetError,
      payload: "Ups",
    });

    expect(finishLoadingUI).toEqual({
      type: types.uiFinishLoading,
    });
    expect(startLoadingUI).toEqual({
      type: types.uiStartLoading,
    });
    expect(removeErrorUI).toEqual({
      type: types.uiRemoveError,
    });
  });
});
