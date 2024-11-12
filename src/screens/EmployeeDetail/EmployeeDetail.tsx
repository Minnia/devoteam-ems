import { Tooltip } from "antd";
import {
  FullWidthContainer,
  ScreenContainer,
  CardContainer,
  Spacer,
  FlexContainer,
  InfoButton,
  StyledButton,
  NavbarAwareFlexContainer,
} from "../../core/styled";
import { Employee } from "../../api/types";
import { InfoCircleOutlined } from "@ant-design/icons";
import useEmployeeDetails from "./hooks/useEmployeeDetails";
import NotFound from "../../components/molecules/NotFound";
import LoadingOverlay from "../../components/molecules/LoadingOverlay";
import { EditEmployeeDetails, EmployeeFields } from "./components";
import NavBar from "../NavBar";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb";
import { Typography } from "../../core/theme/typography";

import { toNumber } from "../../utils/helpers.utils";
import tokens from "../../core/theme/tokens";
import { useTranslation } from "react-i18next";
import { themes } from "../../core/theme/theme";

const EmployeeDetail = () => {
  const {
    user,
    employee,
    isLoading,
    error,
    isEditing,
    editedEmployee,
    handleEditClick,
    handleCancelEdit,
    handleSaveEdit,
    handleNestedInputChange,
    navbarWidth,
    setNavbarWidth,
  } = useEmployeeDetails();

  const { t } = useTranslation();

  if (isLoading) return <LoadingOverlay />;
  if (error || !employee) return <NotFound />;

  return (
    <>
      <NavBar setNavbarWidth={setNavbarWidth} />
      {window.innerWidth >= toNumber(tokens.breakpoints.tablet) && (
        <Breadcrumb />
      )}
      <ScreenContainer $navbarPadding={navbarWidth} $center>
        <NavbarAwareFlexContainer
          $navbarWidth={navbarWidth}
          $direction="column"
          $center
        >
          <FlexContainer $center>
            <Typography.Heading2>
              {t("employees.details.title")}
            </Typography.Heading2>
            {user?.isAdmin && (
              <Tooltip title={t("employees.edit.information")}>
                <InfoButton icon={<InfoCircleOutlined />} />
              </Tooltip>
            )}
          </FlexContainer>
          <div>
            {isEditing ? (
              <CardContainer style={{ marginBottom: 8 }}>
                <EditEmployeeDetails
                  employee={editedEmployee!}
                  handleNestedInputChange={(e, field, parent) =>
                    handleNestedInputChange(
                      e,
                      field as keyof Employee,
                      parent as keyof Employee
                    )
                  }
                  handleSaveEdit={handleSaveEdit}
                  handleCancelEdit={handleCancelEdit}
                />
              </CardContainer>
            ) : (
              <>
                <CardContainer style={{ marginBottom: 8 }} height={500}>
                  <EmployeeFields employee={employee} />
                  {user?.isAdmin && (
                    <StyledButton
                      color={themes.light.accent}
                      $textColor={themes.light.text}
                      onClick={handleEditClick}
                      style={{ width: "40%", marginTop: "auto" }}
                    >
                      {t("globals.edit")}
                    </StyledButton>
                  )}
                </CardContainer>
              </>
            )}
          </div>
        </NavbarAwareFlexContainer>
      </ScreenContainer>
    </>
  );
};

export default EmployeeDetail;
