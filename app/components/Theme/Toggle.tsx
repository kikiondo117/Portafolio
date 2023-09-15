import { Theme, useTheme } from "./Theme";

export function Toggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    console.log("entrando");
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <button className="cursor-pointer rounded-md p-4" onClick={toggleTheme}>
      {theme === "light" ? "🌑" : "🌞"}
    </button>
  );
}
