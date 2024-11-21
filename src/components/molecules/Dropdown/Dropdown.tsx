import { Select } from "antd";
import { FC } from "react";
import { Employee } from "../../../api/types";
import tokens from "../../../core/theme/tokens";
import { useTranslation } from "react-i18next";

type Props = {
  employee: Employee;
  handleDepartmentChange: (value: string) => void;
  options: {
    name: string;
    translationKey: string;
  }[];
};

const Dropdown: FC<Props> = ({ employee, handleDepartmentChange, options }) => {
  const { t } = useTranslation();
  return (
    <Select
      value={employee.department?.name}
      onChange={handleDepartmentChange}
      style={{
        textAlign: "left",
        marginBottom: tokens.margin.BASELINE * 1.5,
        width: "100%",
      }}
    >
      {options.map((option) => (
        <Select.Option key={option.name} value={option.translationKey}>
          {t(`departments.${option.name.toLowerCase()}`)}
        </Select.Option>
      ))}
    </Select>
  );
};

export default Dropdown;
