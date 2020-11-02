import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../themes/themes'
import { GlobalStyles } from '../themes/global'
import { useDarkMode } from '../hooks/useDarkMode'
import Toggle from './Toggler'

const Title = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="title">
          <div className='menu'>
            <h1>FireGram</h1>
            <div style={{ display: 'flex' }}>
              <p>Welcome, Guys !</p>
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
          </div>
          <h2>Your Photos</h2>
          <p>Upload your favourite photos here <span role='img' aria-label='okay'>&#128076;</span></p>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Title