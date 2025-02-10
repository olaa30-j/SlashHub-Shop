
type ThemeColors = "Orange" | "Blue" | "Green" | "Rose" | "Zinc";

interface ThemeColorStateParams{
    themeColor: ThemeColors;
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>> 
}