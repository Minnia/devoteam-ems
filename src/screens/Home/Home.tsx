import {
  FlexContainer,
  FullWidthContainer,
  ScreenContainer,
  Spacer,
} from "../../components/core/styled";
import InformationCard from "../../components/organisms/InformationCard";
import { Typography } from "../../components/core/theme/typography";
import * as S from "./styled";
import useHome from "./useHome";
import NotFound from "../../components/molecules/NotFound";
import NavBar from "../NavBar";

const Overview = () => {
  const {
    user,
    numberOfEmployees,
    numberOfDepartments,
    pieChartData,
    departmentPieChartData,
  } = useHome();

  if (!user) return <NotFound />;

  return (
    <>
      <NavBar />
      <ScreenContainer $center>
        <FlexContainer>
          <FullWidthContainer>
            <Spacer width={60} />
            <S.CenteredContainer>
              <Spacer height={20} />
              <Typography.Heading1>Welcome, {user.name}</Typography.Heading1>
              <S.CardContainer>
                <InformationCard
                  numberOfLines={1}
                  title="Number of employees"
                  text={numberOfEmployees}
                  footer={pieChartData.map((data) => data.title).join(", ")}
                />
                <Spacer width={20} />
                <InformationCard
                  title="Number of departments"
                  text={numberOfDepartments}
                  footer={departmentPieChartData
                    .map((data) => data.title)
                    .join(", ")}
                />
                <Spacer width={20} />
              </S.CardContainer>
            </S.CenteredContainer>
          </FullWidthContainer>
        </FlexContainer>
      </ScreenContainer>
    </>
  );
};

export default Overview;
