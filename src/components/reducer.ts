import { Themes } from "./context";
export interface IAction {
  name: Themes;
}
export const themeReducer = (state: Themes = "default", action: IAction) => {
  switch (action.name) {
    case "default":
      return "default";

    case "blue":
      return "blue";

    default:
      return state;
  }
};
