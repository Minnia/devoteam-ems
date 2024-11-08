import { Button } from "antd";
import Dashboard from "../Dashboard";
import {
  FullWidthContainer,
  ScreenContainer,
  CardContainer,
  Spacer,
} from "../../components/core/styled";
import { Employee } from "../../api/types";

import useEmployeeDetails from "./hooks/useEmployeeDetails";
import NotFound from "../../components/molecules/NotFound";
import LoadingOverlay from "../../components/molecules/LoadingOverlay";
import { EditEmployeeDetails, EmployeeFields } from "./components";

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
      <Dashboard />

      <FullWidthContainer>
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
      </FullWidthContainer>
    </ScreenContainer>
  );
};

export default EmployeeDetail;
