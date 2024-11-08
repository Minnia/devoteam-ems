import { Button } from "antd";
import {
  FullWidthContainer,
  ScreenContainer,
  CardContainer,
  Spacer,
  FlexContainer,
} from "../../components/core/styled";
import { Employee } from "../../api/types";

import useEmployeeDetails from "./hooks/useEmployeeDetails";
import NotFound from "../../components/molecules/NotFound";
import LoadingOverlay from "../../components/molecules/LoadingOverlay";
import { EditEmployeeDetails, EmployeeFields } from "./components";
import NavBar from "../NavBar";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb";
import tokens from "../../components/core/theme/tokens";
import { toNumber } from "../../utils/helpers.utils";
import { Typography } from "../../components/core/theme/typography";

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
  } = useEmployeeDetails();

  if (isLoading) return <LoadingOverlay />;
  if (error || !employee) return <NotFound />;

  return (
    <ScreenContainer>
      <NavBar />

      <FullWidthContainer>
        <FlexContainer
          $paddingY={0}
          $direction="row"
          style={{ display: "inline" }}
        >
          <Typography.Heading1>Employee Details</Typography.Heading1>
          {user?.isAdmin && (
            <Typography.BodyMedium>
              As an admin you can edit the user details, except the name, of
              your employees
            </Typography.BodyMedium>
          )}
        </FlexContainer>
        <div>
          {isEditing ? (
            <CardContainer $center>
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
              <CardContainer $center>
                <EmployeeFields employee={employee} />
                <Spacer height={20} />
                {user?.isAdmin && (
                  <Button onClick={handleEditClick} type="primary">
                    Edit User Details
                  </Button>
                )}
              </CardContainer>
            </>
          )}
        </div>
        {window.innerWidth >= toNumber(tokens.breakpoints.tablet) && (
          <Breadcrumb />
        )}
      </FullWidthContainer>
    </ScreenContainer>
  );
};

export default EmployeeDetail;
