import { Select } from "antd";
import { FC } from "react";
import { Employee } from "../../../api/types";
import tokens from "../../core/theme/tokens";

type Props = {
  employee: Employee;
  handleDepartmentChange: (value: string) => void;
};

const Dropdown: FC<Props> = ({ employee, handleDepartmentChange }) => {
  return (
    <Select
      value={employee.department.name}
      onChange={handleDepartmentChange}
      placeholder={employee.department.name ?? "Select a department"}
      style={{ marginBottom: tokens.margin.BASELINE * 1.5, width: "100%" }}
    >
      <Select.Option value="HR">HR</Select.Option>
      <Select.Option value="Engineering">Engineering</Select.Option>
      <Select.Option value="Marketing">Marketing</Select.Option>
      <Select.Option value="Sales">Sales</Select.Option>
      <Select.Option value="Finance">Finance</Select.Option>
    </Select>
  );
};

export default Dropdown;
