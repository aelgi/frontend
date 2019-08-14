import React, { Dispatch, FC, useReducer, useImperativeHandle, useContext, createContext } from "react";
import Color from "color";
import { ITheme, DefaultTheme } from "./themes";
export * from "./themes";

export interface IThemeInfo {
    theme: ITheme;
    isMobile?: boolean;
}

interface IThemeAction<Action, Payload> {
    type: Action;
    payload: Payload;
}

export interface ISetTheme extends IThemeAction<"theme", ITheme> {}

export type ThemeActions = ISetTheme;

function themeReducer(state: IThemeInfo, action: ThemeActions): IThemeInfo {
    switch(action.type) {
        case "theme": {
            return {
                ...state,
                theme: action.payload,
            };
        }
    }
}

function initialThemeInfo() {
    return {
        theme: DefaultTheme(),
        isMobile: false,
    } as IThemeInfo;
}

type ThemeContextType = [IThemeInfo, Dispatch<ThemeActions>];
export const ThemeContext = createContext<ThemeContextType>([initialThemeInfo(), () => null]);

export const ThemeProvider: FC<{}> = props => {
    const [state, dispatch] = useReducer(themeReducer, initialThemeInfo());

    return <ThemeContext.Provider value={[state, dispatch]}>
        { props.children }
    </ThemeContext.Provider>
}

export const useTheme = () => {
    const [theme] = useContext(ThemeContext);
    return theme.theme;
}