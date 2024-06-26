import { useState } from 'react'
import { ThemeProvider } from './context/Theme'
import { useEffect } from 'react'
import { ThemeButton } from './components/button/ThemeButton'
import { Card } from './components/Card/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  // Actual change in theme mode
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/**theme comp */}
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {/**card comp */}
                  <Card />
                  
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
