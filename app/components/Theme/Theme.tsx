import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

type ThemContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemContext = createContext<ThemContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(Theme.LIGHT);

  return (
    <ThemContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { Theme, ThemeProvider, useTheme };

// https://www.mattstobbs.com/remix-dark-mode/
