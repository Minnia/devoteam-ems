const neutrals = {
  _100: "#F5F5F5",
  _200: "#E5E5E5",
  _300: "#D4D4D4",
  _400: "#A3A3A3",
  _50: "#FAFAFA",
  _500: "#737373",
  _600: "#525252",
  _700: "#404040",
  _800: "#262626",
  _900: "#171717",
  black: "#0F0F0F",
  white: "#FFFFFF",
};

const brandPalette = {
  primaryAccent: "#f8475e",
  secondaryAccent: "#194155",
  panelBackground: "#0A263E",
  secondaryBackground: "#0F2A44",
  highlight: "#FFC839",
  activeButton: "#FF8505",
  primaryText: "#010612",
  error: "#E74C3C",
  border: "#114967",
  background: "#051629",
  success: "#0AD38B",
  transparent: "transparent",
  warningOverlay: "#270000",
  borderColor: "#ddd",
  activeNavItem: "#FFFFFF33",
  button: "#2575fc",
};

type ThemeConfig = {
  accent: string;
  background: string;
  danger: string;
  activeNavItem: string;
  error: string;
  secondaryBackground: string;
  button: string;
  inputBackground: string;
  backgroundLight: string;
  borderColor: string;
  transparent: string;
  success: string;
  text: string;
  textDark: string;
  black: string;
};

const light: ThemeConfig = {
  accent: brandPalette.primaryAccent,
  background: brandPalette.secondaryAccent,
  danger: brandPalette.warningOverlay,
  button: brandPalette.button,
  secondaryBackground: brandPalette.secondaryBackground,
  error: brandPalette.error,
  inputBackground: brandPalette.background,
  transparent: brandPalette.transparent,
  success: brandPalette.success,
  text: neutrals.white,
  textDark: neutrals.black,
  backgroundLight: neutrals.white,
  borderColor: brandPalette.borderColor,
  black: neutrals.black,
  activeNavItem: brandPalette.activeNavItem,
};

export const themes = {
  light,
};
