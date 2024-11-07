import { Button, Checkbox } from "antd";
import { Employee, Food } from "../../../api/types";
import { FC } from "react";
import { FlexContainer, Label, Spacer } from "../../../components/core/styled";
import tokens from "../../../components/core/theme/tokens";
import useEditEmployeeDetails from "../hooks/useEditEmployeeDetails";
import StyledInput from "../../../components/atoms/StyledInput";
import useGetCompanyRolesAndAllergies from "../hooks/useGetCompanyRolesAndAllergies";
import LoadingOverlay from "../../../components/molecules/LoadingOverlay";
import NotFound from "../../../components/molecules/NotFound";
import Dropdown from "../../../components/organisms/Dropdown";

type Props = {
  employee: Employee;
  handleNestedInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    parent: string
  ) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
};

const EditEmployeeDetails: FC<Props> = ({
  employee,
  handleNestedInputChange,

  handleSaveEdit,
  handleCancelEdit,
}) => {
  const {
    editedEmployee,
    handleSaveClick,
    updateEmployeeField,
    handleDepartmentChange,
  } = useEditEmployeeDetails(employee, handleSaveEdit, handleNestedInputChange);

  const {
    roles: fetchedRoles,
    allergies,
    isLoading,
    isError,
  } = useGetCompanyRolesAndAllergies();

  const roles: ("isEmployee" | "isManager" | "isAdmin")[] = fetchedRoles as (
    | "isEmployee"
    | "isManager"
    | "isAdmin"
  )[];

  const roleLabels = {
    isEmployee: "Employee",
    isManager: "Manager",
    isAdmin: "Admin",
  };

  const renderRoleCheckboxes = (
    roles: (keyof typeof roleLabels)[],
    fieldPath: (keyof Employee)[]
  ) => {
    return roles.map((role) => (
      <Checkbox
        key={role}
        checked={(editedEmployee?.[fieldPath[0]] as any)?.[role]}
        onChange={(e) => {
          updateEmployeeField([fieldPath[0], role], e.target.checked);
        }}
      >
        {roleLabels[role]}
      </Checkbox>
    ));
  };

  const renderAllergyCheckboxes = (
    allergies: string[],
    fieldPath: (keyof Employee)[]
  ) => {
    return allergies.map((allergy) => (
      <Checkbox
        key={allergy}
        checked={(editedEmployee?.[fieldPath[0]] as Food)?.allergies.includes(
          allergy
        )}
        onChange={(e) => {
          const currentAllergies =
            (editedEmployee?.[fieldPath[0]] as Food)?.allergies || [];

          if (e.target.checked) {
            updateEmployeeField(
              [fieldPath[0], "allergies"],
              [...currentAllergies, allergy]
            );
          } else {
            updateEmployeeField(
              [fieldPath[0], "allergies"],
              currentAllergies.filter(
                (existingAllergy) => existingAllergy !== allergy
              )
            );
          }
        }}
      >
        {allergy}
      </Checkbox>
    ));
  };

  if (isLoading) return <LoadingOverlay />;
  if (isError) return <NotFound />;

  return (
    <div style={{ maxWidth: "600px", marginBottom: "20px" }}>
      <StyledInput label="Name" value={employee?.name} />
      <StyledInput
        label="Email"
        value={employee?.contact.email}
        onChange={(e) =>
          updateEmployeeField(["contact", "email"], e.target.value)
        }
      />
      <StyledInput
        label="Telephone"
        value={employee?.contact.telephone}
        onChange={(e) =>
          updateEmployeeField(["contact", "telephone"], e.target.value)
        }
      />
      <Label $bold>Department</Label>
      <Dropdown
        employee={employee!}
        handleDepartmentChange={handleDepartmentChange}
      />
      <Label $bold>Role</Label>
      <FlexContainer $center>
        {renderRoleCheckboxes(roles, ["department"])}
      </FlexContainer>
      <Label $bold>Food Preferences</Label>
      <FlexContainer $center>
        {renderAllergyCheckboxes(allergies, ["food"])}
      </FlexContainer>
      <Spacer height={20} />
      <FlexContainer $center>
        <Button
          onClick={handleSaveClick}
          type="primary"
          style={{ marginRight: tokens.margin.BASELINE * 1.5 }}
        >
          Save Changes
        </Button>
        <Button onClick={handleCancelEdit}>Cancel</Button>
      </FlexContainer>
    </div>
  );
};

export default EditEmployeeDetails;
