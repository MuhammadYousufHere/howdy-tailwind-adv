import React from 'react';
const ThemeContext = React.createContext('theme-light');
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('theme-light');
  function toggleTheme() {
    setTheme((currnetTheme) =>
      currnetTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
    );
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "'useTheme' context must be initialized inside 'ThemeProvider'"
    );
  }
  return context;
}
