import ReactCountryFlag from "react-country-flag";
import * as S from "./styled";
import { useTranslation } from "react-i18next";

const LanguageToggler = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  return (
    <S.LanguageTogglerContainer>
      <S.FlagButton
        onClick={toggleLanguage}
        aria-label={
          i18n.language === "en" ? "Switch to Swedish" : "Switch to English"
        }
      >
        <ReactCountryFlag
          countryCode={i18n.language === "en" ? "SE" : "GB"}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title={
            i18n.language === "en" ? "Switch to Swedish" : "Switch to English"
          }
        />
      </S.FlagButton>
    </S.LanguageTogglerContainer>
  );
};

export default LanguageToggler;
