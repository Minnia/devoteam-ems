import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "../../core/theme/typography";
import * as S from "./styled";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const navigate = useNavigate();

  return (
    <S.BreadcrumbContainer>
      <Typography.BodyMedium style={{ display: "inline", cursor: "pointer" }}>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={to}>
              {" / "}
              {isLast ? (
                <Typography.BodyMedium
                  style={{ display: "inline", cursor: "pointer" }}
                >
                  {value}
                </Typography.BodyMedium>
              ) : (
                <Typography.BodyMedium
                  style={{ display: "inline", cursor: "pointer" }}
                  onClick={() => navigate(to)}
                >
                  {value}
                </Typography.BodyMedium>
              )}
            </span>
          );
        })}
      </Typography.BodyMedium>
    </S.BreadcrumbContainer>
  );
};

export default Breadcrumb;
