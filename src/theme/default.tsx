import React from "react";
import { LinkProps, PaletteMode, SvgIcon, ThemeOptions } from "@mui/material";
import { Box } from "@mui/system";
// import { CheckedTrueSvg } from "../assets";
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import LinkBehavior from "../components/LinkBehavior";

const theme: ThemeOptions = {
    direction: "rtl",
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1920,
        },
        unit: "px",
    },
    components: {
        MuiTypography: {
            defaultProps: {
                color: "text.primary",
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.MuiIconButton-root": {
                        padding: "4px",
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: { disableElevation: true, size: "base" },
            styleOverrides: {
                sizeSmall: { padding: "4px 6px", lineHeight: 1 },
                sizeXs: {
                    padding: "7px 11px",
                    fontSize: "1.3rem",
                    lineHeight: 1.23,
                },
                sizeSm: {
                    padding: "9px 13px",
                    lineHeight: 1.23,
                },
                sizeBase: {
                    padding: "10px 24px",
                    lineHeight: 1.43,
                    fontSize: "1.4rem",
                },
                sizeLg: {
                    padding: "9px 17px",
                    lineHeight: 1.72,
                },
                sizeXl: {
                    padding: "13px 25px",
                    lineHeight: 1.6,
                    fontSize: "1.5rem",
                },
            },
        },
        MuiFab: {
            defaultProps: { size: "base", color: "primary" },
            styleOverrides: {
                root: {
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:active": {
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    },
                },
                extended: {
                    width: "auto !important",
                },
                sizeXs: {
                    height: 30,
                    width: 30,
                },
                sizeSm: {
                    height: 34,
                    width: 34,
                },
                sizeBase: {
                    height: 38,
                    width: 38,
                },
                sizeLg: {
                    height: 42,
                    width: 42,
                },
                sizeXl: {
                    height: 50,
                    width: 50,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: "#979EA8",
                    fontSize: "1.4rem",
                    "&.Mui-disabled": {
                        color: "#B8BCC2",
                    },
                    "&.Mui-error": {
                        color: "red",
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                inputSizeSmall: {
                    paddingTop: "2px !important",
                    paddingBottom: "2px !important",
                    height: "2.2rem",
                },
                input: {
                    paddingTop: "10px !important",
                    paddingBottom: "13px !important",
                    fontSize: "1.4rem",
                    "@media (max-width:899px)": {
                        fontSize: "1.2rem",
                    },
                },
                root: {
                    ":hover": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "primary.main !important",
                        },
                    },
                    // "& .Mui-error": {
                    //     borderColor: "error.main", // Styling for error state
                    // },
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                disableRipple: true,
                icon: (
                    <Box
                        sx={{
                            width: "16px",
                            height: "16px",
                            background: "transparent",
                            border: "2px solid #D5D6D8",
                            borderRadius: "5px",
                        }}
                    />
                ),
                sx: {
                    "&:hover": { bgcolor: "transparent" },
                    "&:error": { borderColor: "error.main" },
                },
            },
        },
        MuiChip: {
            defaultProps: {},
        },
        MuiRadio: {
            defaultProps: {
                sx: {
                    "&:hover": { bgcolor: "transparent" },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
        h1 {
          color: grey;
        }
        html {
          font-size: 62.5%;
        }
      `,
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    marginRight: "1.5rem",
                    "& .MuiPagination-ul li button": {
                        color: "#fff",
                        backgroundColor: "#3b3b43",
                        borderRadius: 4,
                        minWidth: "25px",
                        height: "25px",
                        margin: "2px",
                    },
                    "& .Mui-selected": {
                        border: `solid 1px #FADD62`,
                        backgroundColor: `#FFEEA7 !important`,
                    },
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-head": {
                        padding: "0.4rem 1.3rem",
                        lineHeight: 1.4,
                        fontSize: "1.2rem",
                        textAlign: "left",
                        fontWeight: 400,
                        "@media (max-width:899px)": {
                            padding: "0.4rem 0.5rem",
                        },
                    },
                    "& .MuiTableCell-body": {
                        fontSize: "1.4rem",
                        textAlign: "left",
                        fontWeight: 500,
                        lineHeight: 1.6,
                        padding: "0.4rem 1.3rem",
                        "@media (max-width:899px)": {
                            padding: "0.4rem 0.5rem",
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(37 43 61 / 70%) !important",
                    color: "#d6d5dd",
                },
                option: {
                    padding: "8px",
                    borderBottom: "solid 1px #313136",
                    "&.Mui-focused": {
                        backgroundColor: "#212639 !important",
                        color: "#537FE7 !important",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "unset",
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: "1.1rem !important",
                },
            },
            defaultProps: {
                sx: {
                    // "&:hover": { bgcolor: "transparent" },
                    color: "error.main",
                    // textAlign: "right",
                },
            },
        },
    },
    shape: {
        borderRadius: 8,
        rounded: "1000rem",
    },
    // shadows: [
    //     "none",
    //     "0 1px 15px 0 rgba(0, 0, 0, 0.5)",
    //     "0 0.5px 0.5px 0 rgba(0, 0, 0, 0.14)",
    //     // other shadow definitions
    // ],
    typography: {
        htmlFontSize: 10,
        fontFamily: "YekanBakh",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 700,
            fontSize: "3.6rem",
            lineHeight: 1,
        },
        h2: {
            fontWeight: 500,
            fontSize: "2.2rem",
            lineHeight: 1,
            color: "primary.main",
        },
        h3: {
            fontWeight: 500,
            fontSize: "2rem",
            lineHeight: 1,
            color: "primary.main",
        },
        h4: {
            fontWeight: 400,
            fontSize: "2rem",
            lineHeight: 1,
        },
        h5: {
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: 1,
        },
        h6: {
            fontWeight: 400,
            fontSize: "1.6rem",
            lineHeight: 1,
        },
        subtitle1: { fontWeight: 400, fontSize: "1.4rem", lineHeight: 1.6 },
        subtitle2: { fontWeight: 400, fontSize: "1.2rem", lineHeight: 1.4 },
        body1: { fontWeight: 400, fontSize: "1.6rem", lineHeight: 1 },
        body2: { fontWeight: 400, fontSize: "1.3rem", lineHeight: 1 },
        button: { fontWeight: 400, fontSize: "1.4rem", lineHeight: 1 },
        caption: { fontWeight: 400, fontSize: "1.6rem", lineHeight: 1 },
        overline: { fontWeight: 400, fontSize: "1.6rem", lineHeight: 1 },
    },
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  common: {
                      black: "#000",
                      white: "#fff",
                  },
                  primary: {
                      main: "#537FE7",
                      light: "#BBD3FF",
                      dark: "#2947A6",
                      contrastText: "#fff",
                  },
                  secondary: {
                      main: "#09AA70",
                      light: "#99F6B9",
                      dark: "#047A67",
                      contrastText: "#fff",
                  },
                  error: {
                      main: "#D62F3A",
                      contrastText: "#fff",
                  },
                  warning: {
                      main: "#ed6c02",
                      contrastText: "#fff",
                  },
                  info: {
                      main: "#0288d1",
                      contrastText: "#fff",
                  },
                  success: {
                      main: "#02c076",
                      contrastText: "#fff",
                  },
                  grey: {
                      100: "#E6E6E6",
                      200: "#D5D6D8",
                      500: "#76808F",
                      700: "#37465C",
                      A100: "#FBFBFB",
                  },
                  background: {
                      paper: "#ffffff",
                      default: "#f8f8f8",
                      tableOdd: "#f5f5f5",
                  },
                  text: {
                      primary: "#252B3D",
                      secondary: "#6B7280",
                      disabled: "#797979",
                  },
                  divider: "#bdbdbd",
              }
            : {
                  // پالت رنگ برای حالت تاریک
                  common: {
                      black: "#000",
                      white: "#fff",
                  },
                  primary: {
                      light: "#BBD3FF", // 200
                      main: "#537FE7", // 500
                      dark: "#2947A6", // 700
                      contrastText: "#fff",
                  },
                  secondary: {
                      light: "#99F6B9", // 200
                      main: "#09AA70", // 500
                      dark: "#047A67", // 700
                      contrastText: "#fff",
                  },
                  error: {
                      main: "#D9004E",
                      contrastText: "#fff",
                  },
                  warning: {
                      main: "#ed6c02",
                      contrastText: "#fff",
                  },
                  info: {
                      main: "#0288d1",
                      contrastText: "#fff",
                  },
                  success: {
                      main: "#02c076",
                      contrastText: "#fff",
                  },
                  grey: {
                      100: "#E6E6E6",
                      200: "#D5D6D8",
                      500: "#76808F",
                      700: "#37465C",
                      A100: "#FBFBFB",
                  },
                  background: {
                      paper: "#141B27",
                      default: "#000203",
                      tableOdd: "#1e202e",
                  },
                  text: {
                      primary: "#ffffff",
                      secondary: "#CDD0D4",
                      disabled: "#7a7a7a",
                  },
                  divider: "#424A58",
              }),
    },
});

export default theme;
