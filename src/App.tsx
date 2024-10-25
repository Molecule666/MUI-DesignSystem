import React from "react";
import MuiProvider from "theme/provider";
import "./App.css";
import AppRoute from "routes/app.route";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
    const themeMode = localStorage.getItem("paletteMode") as "light" | "dark";

    const [mode, setMode] = React.useState<"light" | "dark">(!!themeMode ? themeMode : "light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const mode = prevMode === "light" ? "dark" : "light";
                    localStorage.setItem("paletteMode", mode);
                    return mode;
                });
            },
        }),
        []
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiProvider direction={"rtl"} mode={mode}>
                <AppRoute />
            </MuiProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
