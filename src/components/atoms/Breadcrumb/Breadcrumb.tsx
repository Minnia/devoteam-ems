import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styled";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const navigate = useNavigate();

  return (
    <S.BreadcrumbContainer>
      <S.BreadcrumbText>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={to}>
              {" / "}
              <S.BreadcrumbLink
                $isLast={isLast}
                onClick={() => !isLast && navigate(to)}
              >
                {value}
              </S.BreadcrumbLink>
            </span>
          );
        })}
      </S.BreadcrumbText>
    </S.BreadcrumbContainer>
  );
};

export default Breadcrumb;
