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
    numberOfRoles,
    pieChartData,
    departmentPieChartData,
  } = useHome();

  if (!user) return <NotFound />;

  return (
    <ScreenContainer>
      <FlexContainer>
        <NavBar />
        <FullWidthContainer>
          <Spacer width={60} />
          <S.CenteredContainer>
            <Spacer height={20} />
            <Typography.Heading1>Welcome, {user.name}</Typography.Heading1>
            <S.CardContainer>
              <InformationCard
                title="Number of employees"
                text={numberOfEmployees}
                footer={pieChartData.map((data) => (
                  <div key={data.title}>{data.title}</div>
                ))}
              />
              <Spacer width={20} />
              <InformationCard
                title="Number of departments"
                text={numberOfDepartments}
                footer={departmentPieChartData.map((data) => (
                  <div key={data.title}>{data.title}</div>
                ))}
              />
              <Spacer width={20} />
              <InformationCard
                title="Employee roles"
                text={`${numberOfRoles} roles in the company`}
                footer={pieChartData.map((data) => (
                  <div key={data.title}>
                    <S.StyledGuide
                      style={{
                        height: 10,
                        width: 10,
                        backgroundColor: data.color,
                      }}
                      color={data.color}
                    ></S.StyledGuide>
                    {data.title} - {data.value}
                  </div>
                ))}
              >
                <S.StyledPieChart data={pieChartData} />
              </InformationCard>
            </S.CardContainer>
          </S.CenteredContainer>
        </FullWidthContainer>
      </FlexContainer>
    </ScreenContainer>
  );
};

export default Overview;
