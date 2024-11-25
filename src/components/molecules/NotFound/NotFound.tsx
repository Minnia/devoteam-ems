import { useNavigate } from "react-router-dom";
import { themes } from "../../../core/theme/theme";
import { Typography } from "../../../core/theme/typography";
import * as S from "./styled";
import { Spacer } from "../../../core/styled";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    navigate("/login");
  };

  return (
    <S.NotFoundContainer>
      <Typography.Heading1 style={{ color: themes.light.error }}>
        {t("error.notFound.title")}
      </Typography.Heading1>
      <Typography.BodyLarge>{t("error.notFound.body")}</Typography.BodyLarge>
      <Typography.BodyMedium>
        {t("error.notFound.subText")}
      </Typography.BodyMedium>
      <Spacer height={16} />
      <S.StyledButton onClick={handleGoHome}>
        {t("globals.back")}
      </S.StyledButton>
    </S.NotFoundContainer>
  );
};

export default NotFound;
