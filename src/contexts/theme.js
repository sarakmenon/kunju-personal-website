import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('themeName')

  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('themeName', themeName)
  }, [themeName])

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(e.matches ? 'dark' : 'light')
      }
    }

    darkMediaQuery.addEventListener('change', handleChange)

    return () => {
      darkMediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleTheme = () => {
    setThemeName((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
