import { FC } from "react";
import { Employee } from "../../../api/hooks/types";
import * as S from "../styled";
import { Label, Spacer } from "../../../components/core/styled";

type Props = {
  employee: Employee;
};

const EmployeeFields: FC<Props> = ({ employee }) => {
  const roles = [
    employee.department.isEmployee && "Employee",
    employee.department.isManager && "Manager",
    employee.department.isAdmin && "Admin",
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <S.CenteredContent>
      <S.Row>
        <S.FieldContainer>
          <Label bold>Name</Label>
          <Label>{employee.name}</Label>
        </S.FieldContainer>
        <S.FieldContainer>
          <Label bold>Email</Label>
          <Label>{employee.contact.email}</Label>
        </S.FieldContainer>
        <S.FieldContainer>
          <Label bold>Telephone</Label>
          <Label>{employee.contact.telephone}</Label>
        </S.FieldContainer>
      </S.Row>
      <Spacer height={20} />
      <S.Row>
        <S.FieldContainer>
          <Label bold>Department</Label>
          <Label>{employee.department.name}</Label>
        </S.FieldContainer>
        <S.FieldContainer>
          <Label bold>Role</Label>
          <Label>{roles}</Label>
        </S.FieldContainer>
      </S.Row>
      <Spacer height={20} />
      <S.Row>
        <S.FieldContainer>
          <Label bold>Food Preferences</Label>
          <Label>{employee.food.preference}</Label>
        </S.FieldContainer>
        <S.FieldContainer>
          <Label bold>Food Restrictions</Label>
          <Label>{employee.food.allergies.join(", ")}</Label>
        </S.FieldContainer>
      </S.Row>
    </S.CenteredContent>
  );
};
export default EmployeeFields;
