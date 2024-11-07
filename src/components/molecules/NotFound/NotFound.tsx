import { useNavigate } from "react-router-dom";
import { themes } from "../../core/theme/theme";
import { Typography } from "../../core/theme/typography";
import * as S from "./styled";
import { Spacer } from "../../core/styled";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <S.NotFoundContainer>
      <Typography.Heading1 style={{ color: themes.light.error }}>
        404 - Page Not Found
      </Typography.Heading1>
      <Typography.BodyLarge>
        Oops! It seems we couldn’t find the page you’re looking for, or
        something went wrong while trying to load information.
      </Typography.BodyLarge>
      <Typography.BodyMedium>
        Please check the URL, try refreshing the page, or click below to go
        back.
      </Typography.BodyMedium>
      <Spacer height={16} />
      <S.StyledButton type="primary" onClick={handleGoHome}>
        Go back
      </S.StyledButton>
    </S.NotFoundContainer>
  );
};

export default NotFound;
