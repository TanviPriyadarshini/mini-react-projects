import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null) //creates an empty bag

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    const theme = isDark ? "dark" : "light"

    useEffect(() => {
        isDark ? document.documentElement.classList.add('dark'): document.documentElement.classList.remove('dark')
    }, [isDark])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider> // put some value in the empty bag
    ) 

}