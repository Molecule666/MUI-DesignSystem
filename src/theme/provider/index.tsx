import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import defaultTheme, { getDesignTokens } from "theme/default";
import withLowDensity from "../lowDensity";
import { deepmerge } from "@mui/utils";
import { useMediaQuery } from "@mui/material";
import { enUS } from "@mui/material/locale";
import { IMuiProviderProps } from "widget/Provider";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// تعریف استایل‌های سراسری
const inputGlobalStyles = <CssBaseline enableColorScheme />;

const MuiProvider: React.FC<IMuiProviderProps> = (props) => {
    const { mode, theme, lowDensity, localization, direction } = props;

    // تشخیص ترجیح کاربر برای حالت تاریک
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    React.useEffect(() => {
        // تنظیم جهت متن در HTML
        document.dir = direction || "rtl";
    }, [direction]);

    // ساخت و ادغام تم
    const themeValue = React.useMemo(() => {
        let applyTheme = defaultTheme;

        if (theme) {
            applyTheme = deepmerge(applyTheme, theme);
        }

        if (lowDensity) {
            applyTheme = deepmerge(applyTheme, withLowDensity);
        }

        // اصلاح تعیین حالت روشن/تاریک تم
        if (applyTheme?.palette) {
            applyTheme.palette.mode = mode || (prefersDarkMode ? "dark" : "light");
        }

        if (direction) {
            applyTheme = { ...applyTheme, direction };
        }

        // استفاده از createTheme برای ساختن تم
        let createdTheme = createTheme(
            applyTheme,
            getDesignTokens(mode ?? "light"),
            localization || enUS
        );

        let createdResponsiveTheme = responsiveFontSizes(createdTheme);

        return createdResponsiveTheme;
    }, [mode, theme, prefersDarkMode, lowDensity, localization, direction]);

    console.log("themeValue => ", themeValue);

    // تعیین کامپوننت برای تغییر جهت
    // const ChangeDirection = direction === "rtl" ? RTL : Noop;

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={themeValue}>
                {inputGlobalStyles}
                {props.children}
            </ThemeProvider>
        </CacheProvider>
    );
};
export default MuiProvider;
