import { createContext } from "react";
import { theme } from "../Theme/theme";
import { modalcolor } from "../Theme/modalcolor";

export const ThemeColorContext = createContext(theme);
export const ModalColorContext = createContext(modalcolor);