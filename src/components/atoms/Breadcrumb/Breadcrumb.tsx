import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "../../core/theme/typography";
import * as S from "./styled";

const Breadcrumb = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <S.BreadcrumbContainer>
      {pathSegments.map((segment, index) => {
        const to = `/${pathSegments.slice(0, index + 1).join("/")}`;

        return (
          <Fragment key={to}>
            <S.Separator>/</S.Separator>
            <Typography.BodySmall as={Link} to={to}>
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Typography.BodySmall>
          </Fragment>
        );
      })}
    </S.BreadcrumbContainer>
  );
};

export default Breadcrumb;
