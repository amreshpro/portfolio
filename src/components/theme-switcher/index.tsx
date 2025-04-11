// ThemeToggleButton.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../provider/ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

