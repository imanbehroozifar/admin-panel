import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: `"YekanBakh","Roboto"`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900,
    },
    direction: "rtl",
    palette: {
        primary: {
            main: "#f4b504",
            light: "#ffbc03",
            dark: "#c79406",
        },
        secondary: {

            main: "#182041",
            light: "#1f2d63",
            dark: "#0c1021"
        }
    }
});