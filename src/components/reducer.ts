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

    case "pink":
      return "pink";

    case "lightBlue":
      return "lightBlue";

    case "yellow":
      return "yellow";

    default:
      return state;
  }
};
