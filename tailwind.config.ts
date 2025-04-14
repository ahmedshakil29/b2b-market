import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";

// ✅ Base Tailwind color names to extract
const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
] as const;

type ColorName = (typeof baseColors)[number];

// ✅ Shade inversion mapping (light ↔ dark)
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
} as const;

type Shade = keyof typeof shadeMapping;
type TailwindColorShades = Record<Shade, string>;
type TailwindColors = Record<ColorName, TailwindColorShades>;

/**
 * ✅ Generate theme from Tailwind colors
 */
const generateThemeObject = (
  colorSet: TailwindColors,
  mapping: typeof shadeMapping,
  invert = false
): Record<ColorName, Record<Shade, string>> => {
  return baseColors.reduce((theme, color) => {
    const shades: Record<Shade, string> = {} as Record<Shade, string>;

    (Object.keys(mapping) as Shade[]).forEach((key) => {
      const shadeKey = invert ? mapping[key as Shade] : key;
      shades[key] = colorSet[color][shadeKey as Shade];
    });

    theme[color] = shades;
    return theme;
  }, {} as Record<ColorName, Record<Shade, string>>);
};

// ✅ Create light and dark themes
const lightTheme = generateThemeObject(colors as TailwindColors, shadeMapping);
const darkTheme = generateThemeObject(
  colors as TailwindColors,
  shadeMapping,
  true
);

// ✅ Compose complete themes
const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
  },
};

// ✅ Final Tailwind config
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};

export default config;
