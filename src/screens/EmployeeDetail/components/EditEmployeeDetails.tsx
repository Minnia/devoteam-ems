import { Employee, Food } from "../../../api/types";
import { FC } from "react";
import { Label, Spacer, StyledButton } from "../../../core/styled";
import tokens from "../../../core/theme/tokens";
import useEditEmployeeDetails from "../hooks/useEditEmployeeDetails";
import StyledInput from "../../../components/atoms/StyledInput";
import useGetCompanyRolesAndAllergies from "../hooks/useGetCompanyRolesAndAllergies";
import LoadingOverlay from "../../../components/molecules/LoadingOverlay";
import NotFound from "../../../components/molecules/NotFound";
import Dropdown from "../../../components/organisms/Dropdown";
import * as S from "../styled";
import { themes } from "../../../core/theme/theme";

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
  handleSaveEdit,
  handleCancelEdit,
  handleNestedInputChange,
}) => {
  const {
    editedEmployee,
    handleSaveClick,
    updateEmployeeField,
    handleDepartmentChange,

    t,
    navbarWidth,
  } = useEditEmployeeDetails(
    employee,
    handleSaveEdit,
    handleNestedInputChange,
    handleCancelEdit
  );

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
      <S.StyledCheckbox
        key={role}
        value={editedEmployee?.[fieldPath[0]]}
        checked={(editedEmployee?.[fieldPath[0]] as any)?.[role]}
        onChange={(e) => {
          updateEmployeeField([fieldPath[0], role], e.target.checked);
        }}
      >
        {roleLabels[role]}
      </S.StyledCheckbox>
    ));
  };

  const renderAllergyCheckboxes = (
    allergies: string[],
    fieldPath: (keyof Employee)[]
  ) => {
    return allergies.map((allergy) => (
      <S.StyledCheckbox
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
      </S.StyledCheckbox>
    ));
  };

  if (isLoading) return <LoadingOverlay />;
  if (isError) return <NotFound />;

  return (
    <S.Container $navbarWidth={navbarWidth}>
      <StyledInput label={t("globals.name")} value={employee?.name} />
      <StyledInput
        label={t("globals.email")}
        value={employee?.contact.email}
        onChange={(e) =>
          updateEmployeeField(["contact", "email"], e.target.value)
        }
      />
      <StyledInput
        label={t("globals.telephone")}
        value={employee?.contact.telephone}
        onChange={(e) =>
          updateEmployeeField(["contact", "telephone"], e.target.value)
        }
      />
      <Label $bold>{t("globals.department")}</Label>
      <Dropdown
        employee={editedEmployee}
        handleDepartmentChange={handleDepartmentChange}
      />
      <Label $bold>{t("globals.role")}</Label>
      <S.StyledFlexContainer>
        {renderRoleCheckboxes(roles, ["department"])}
      </S.StyledFlexContainer>

      <Label $bold>{t("globals.preferences")}</Label>
      <S.StyledFlexContainer>
        {renderAllergyCheckboxes(allergies, ["food"])}
      </S.StyledFlexContainer>
      <Spacer height={20} />
      <S.StyledButtonContainer>
        <StyledButton
          color={themes.light.accent}
          $textColor={themes.light.text}
          onClick={handleSaveClick}
          style={{ marginRight: tokens.margin.BASELINE * 1.5 }}
        >
          {t("globals.save")}
        </StyledButton>
        <StyledButton
          color={themes.light.backgroundLight}
          $textColor={themes.light.accent}
          onClick={handleCancelEdit}
        >
          {t("globals.cancel")}
        </StyledButton>
      </S.StyledButtonContainer>
    </S.Container>
  );
};

export default EditEmployeeDetails;
