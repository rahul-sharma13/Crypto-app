import React, {useState, useEffect, createContext} from 'react'

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme')
        if (typeof storedPrefs === 'string') {
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        } 
    }
    return 'light'
}

export const ThemeContext = createContext()

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;   //returns root element of the document (<html>).
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(()=> {
        rawSetTheme(theme)
    },[theme])

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// The { props.children } property allows you to create a generic template component that can be modified by the parent when it is invoked. This means that a parent component can pass whatever is needed in the child component, even generated layout features that can then be rendered by the child.