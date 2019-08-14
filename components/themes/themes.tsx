import Color from "color";

export interface ITheme {
    primary: Color;
    background: Color;

    white: Color;
    black: Color;

    status: {
        error: Color;
        warning: Color;
        success: Color;
        info: Color;
    }
}

export function DefaultTheme() {
    return {
        primary: Color("#7EC0EE"),
        background: Color("#DDDDDD"),
        white: Color("#FFFFFF"),
        black: Color("#000000"),

        status: {
            error: Color("#C50707"),
            success: Color("#25C309"),
            warning: Color("#F59229"),
            info: Color("#1F93FF"),
        }
    } as ITheme;
}

export function DarkTheme() {
    return {
        primary: Color("#7EC0EE"),
        background: Color("#000000"),
        white: Color("#FFFFFF"),
        black: Color("#000000"),

        status: {
            error: Color("#C50707"),
            success: Color("#25C309"),
            warning: Color("#F59229"),
            info: Color("#1F93FF"),
        }
    } as ITheme;
}