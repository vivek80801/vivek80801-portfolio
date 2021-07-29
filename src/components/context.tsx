import React from "react";
import { IAction, themeReducer } from "./reducer";

export type Themes = "default" | "blue" | "pink" | "lightBlue" | "yellow";

export interface IThemeContext {
  themes: Themes;
  dispatch: React.Dispatch<IAction>;
}

export const ThemeChangerContext = React.createContext<any | IThemeContext>(
  "default"
);

export const ThemeChangerProvider: React.FC = ({ children }) => {
  const [themes, dispatch] = React.useReducer(themeReducer, "default");
  return (
    <ThemeChangerContext.Provider value={{ themes, dispatch }}>
      {children}
    </ThemeChangerContext.Provider>
  );
};
