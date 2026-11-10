import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';
import SplashScreen from './components/SplashScreen';
import ParticleBackground from './components/ParticleBackground';
import './css/particles.css';

function App() {
  const darkMode = useDarkMode(true);
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AppContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyles />
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <ParticleBackground />
            <div className="App">
              <BrowserRouter>
                <MainApp />
              </BrowserRouter>
            </div>
          </>
        )}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
