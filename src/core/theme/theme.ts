const neutrals = {
  black: "#0F0F0F",
  white: "#FFFFFF",
};

const brandPalette = {
  primaryAccent: "#f8475e",
  secondaryAccent: "#194155",
  secondaryBackground: "#0f2a44",
  error: "#f74c3c",
  background: "#051629",
  success: "#0ad38b",
  transparent: "transparent",
  borderColor: "#ddd",
  activeNavItem: "#ffffff33",
  link: "#00008b",
  buttonHover: "#1f66c1",
  redHover: "#e03e4e",
  inactive: "#f1f0f0",
  beige: "#fffff9",
};

type ThemeConfig = {
  accent: string;
  background: string;
  activeNavItem: string;
  inactive: string;
  error: string;
  secondaryBackground: string;
  inputBackground: string;
  backgroundLight: string;
  borderColor: string;
  transparent: string;
  success: string;
  text: string;
  textDark: string;
  black: string;
  buttonHover: string;
  redHover: string;
  beige: string;
};

const light: ThemeConfig = {
  accent: brandPalette.primaryAccent,
  background: brandPalette.secondaryAccent,
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
  buttonHover: brandPalette.buttonHover,
  inactive: brandPalette.inactive,
  redHover: brandPalette.redHover,
  beige: brandPalette.beige,
};

export const themes = {
  light,
};
