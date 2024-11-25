import { Select } from "antd";
import { FC } from "react";
import { Employee } from "../../../api/types";
import tokens from "../../../core/theme/tokens";
import { useTranslation } from "react-i18next";
import LoadingOverlay from "../../molecules/LoadingOverlay";

type Props = {
  employee: Employee;
  handleDepartmentChange: (value: string) => void;
};

const Dropdown: FC<Props> = ({ employee, handleDepartmentChange }) => {
  const { t } = useTranslation();
  if (!employee.department) return <LoadingOverlay />;
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
      <Select.Option value="HR">{t("departments.hr")}</Select.Option>
      <Select.Option value="Engineering">
        {t("departments.engineering")}
      </Select.Option>
      <Select.Option value="Marketing">
        {t("departments.marketing")}
      </Select.Option>
      <Select.Option value="Sales">{t("departments.sales")}</Select.Option>
      <Select.Option value="Finance">{t("departments.finance")}</Select.Option>
    </Select>
  );
};

export default Dropdown;
