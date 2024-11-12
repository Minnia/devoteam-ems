import { FC } from "react";
import { Employee } from "../../../api/types";
import * as S from "../styled";
import { FlexContainer, Label, Spacer } from "../../../core/styled";
import { useTranslation } from "react-i18next";

type Props = {
  employee: Employee;
};

const EmployeeFields: FC<Props> = ({ employee }) => {
  console.log("employee", employee);
  const roles = [
    employee.department.isEmployee && "Employee",
    employee.department.isManager && "Manager",
    employee.department.isAdmin && "Admin",
  ]
    .filter(Boolean)
    .join(", ");

  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <FlexContainer>
        <S.Row>
          <S.FieldContainer>
            <Label $bold>{t("globals.name")}</Label>
            <Label>{employee.name}</Label>
          </S.FieldContainer>
          <S.FieldContainer>
            <Label $bold>{t("globals.email")}</Label>
            <Label>{employee.contact.email}</Label>
          </S.FieldContainer>
        </S.Row>
      </FlexContainer>
      <Spacer height={20} />
      <FlexContainer>
        <S.Row>
          <S.FieldContainer>
            <Label $bold>{t("globals.telephone")}</Label>
            <Label>{employee.contact.telephone}</Label>
          </S.FieldContainer>
          <S.FieldContainer>
            <Label $bold>{t("globals.department")}</Label>
            <Label>{employee.department.name}</Label>
          </S.FieldContainer>
        </S.Row>
      </FlexContainer>
      <Spacer height={20} />
      <FlexContainer>
        <S.Row>
          <S.FieldContainer>
            <Label $bold>{t("globals.role")}</Label>
            <Label>{roles}</Label>
          </S.FieldContainer>
          <S.FieldContainer>
            <Label $bold>{t("globals.preferences")}</Label>
            <Label>{employee.food.preference}</Label>
          </S.FieldContainer>
        </S.Row>
      </FlexContainer>
      <Spacer height={20} />
      <FlexContainer>
        <S.Row>
          <S.FieldContainer>
            <Label $bold>{t("globals.allergies")}</Label>
            <Label>{employee.food.allergies.join(", ")}</Label>
          </S.FieldContainer>
        </S.Row>
      </FlexContainer>
    </div>
  );
};

export default EmployeeFields;
