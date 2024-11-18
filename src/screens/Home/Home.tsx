import {
  FullWidthContainer,
  NavbarAwareFlexContainer,
  ScreenContainer,
  Spacer,
} from "../../core/styled";
import InformationCard from "../../components/organisms/InformationCard";
import { Typography } from "../../core/theme/typography";
import * as S from "./styled";
import useHome from "./useHome";
import NotFound from "../../components/molecules/NotFound";
import NavBar from "../NavBar";
import { join, toNumber } from "../../utils/helpers.utils";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb";
import { CrownOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import tokens from "../../core/theme/tokens";

const Overview = () => {
  const {
    user,
    numberOfEmployees,
    employeeOfTheMonth,
    numberOfDepartments,
    roleDistributonData,
    navigate,
    departmentData,
    navbarWidth,
    setNavbarWidth,
  } = useHome();

  const { t } = useTranslation();

  if (!user) return <NotFound />;

  return (
    <>
      <NavBar setNavbarWidth={setNavbarWidth} />
      <ScreenContainer $navbarPadding={navbarWidth} $center>
        <NavbarAwareFlexContainer $navbarWidth={navbarWidth}>
          <FullWidthContainer>
            <S.CenteredContainer>
              <Spacer height={20} />
              <Typography.Heading1>
                {t("globals.welcomeUser", { user: user.name })}
              </Typography.Heading1>
              <S.CardContainer>
                <InformationCard
                  onClick={() => navigate("/employees")}
                  numberOfLines={1}
                  title={t("home.news.employees")}
                  text={numberOfEmployees}
                  footer={join(roleDistributonData.map((data) => data.title))}
                />
                <InformationCard
                  onClick={() =>
                    navigate(`/employees/${employeeOfTheMonth!.id}`)
                  }
                  icon={<UserOutlined height={48} />}
                  title={t("home.news.employeeOfTheMonth")}
                  text={employeeOfTheMonth?.name}
                  footer={`${employeeOfTheMonth?.department.name} - ${employeeOfTheMonth?.department.role}`}
                />
                <InformationCard
                  title={t("home.news.departments")}
                  text={numberOfDepartments}
                  footer={join(departmentData.map((data) => data.title))}
                />
                <InformationCard
                  icon={<CrownOutlined height={48} />}
                  title={t("home.news.ceo")}
                />
              </S.CardContainer>
            </S.CenteredContainer>
            {window.innerWidth > toNumber(tokens.breakpoints.tablet) && (
              <Breadcrumb />
            )}
          </FullWidthContainer>
        </NavbarAwareFlexContainer>
      </ScreenContainer>
    </>
  );
};

export default Overview;
