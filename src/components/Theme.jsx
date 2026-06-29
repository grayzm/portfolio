import React from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({children}) {

    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") || "dark"
    })

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    },[theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))

        console.log('Theme changed to Dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);