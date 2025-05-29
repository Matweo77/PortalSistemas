import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children, defaultTheme = 'system', ...props }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Eliminar clases antiguas.
    root.classList.remove('light', 'dark');
    // Forzar a agregar tema claro independiente del tema del sistema o navegador.
    root.classList.add('light') // Esto fue lo que agregue para forzar el tema claro.
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => setTheme(newTheme),
  };

  return (
    <ThemeContext.Provider value={value} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};