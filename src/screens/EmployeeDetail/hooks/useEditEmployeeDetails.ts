import { useState, useCallback, useRef } from "react";
import useEditEmployee from "../../../api/hooks/useEditEmployee";
import { Contact, Department, Employee, Food } from "../../../api/types";
import { message } from "antd";
import { useTranslation } from "react-i18next";

const useEditEmployeeDetails = (
  employee: Employee,
  handleSaveEdit: () => void,
  handleNestedInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    parent: string
  ) => void,
  handleCancelEdit: () => void
) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const [navbarWidth, setNavbarWidth] = useState(window.innerWidth);
  const { mutateAsync: editEmployee } = useEditEmployee(editedEmployee?.id);

  const employeeRef = useRef(employee);

  const { t } = useTranslation();

  const handleSaveClick = async () => {
    try {
      await editEmployee(editedEmployee);
      handleSaveEdit();
    } catch (error) {
      message.error("Error saving employee. Please try again.");
      console.error("Error saving employee:", error);
    }
  };

  const updateEmployeeField = useCallback(
    (
      path: string[],
      value:
        | string
        | string[]
        | boolean
        | (string & Contact & Department & Food)
    ) => {
      setEditedEmployee((prevState) => {
        let updatedState = { ...prevState };
        let currentObj = updatedState;

        for (let i = 0; i < path.length - 1; i++) {
          currentObj = currentObj[path[i] as keyof typeof currentObj] as any;
        }

        currentObj[path[path.length - 1] as keyof typeof currentObj] =
          value as any;

        let originalValue = employee;
        for (const key of path) {
          originalValue = originalValue[
            key as keyof typeof originalValue
          ] as any;
        }

        return updatedState;
      });
    },
    [employee]
  );

  const handleDepartmentChange = useCallback(
    (value: string) => {
      updateEmployeeField(["department", "name"], value);
    },
    [updateEmployeeField]
  );

  const handleCancel = () => {
    setEditedEmployee(employeeRef.current);
    handleCancelEdit();
  };

  return {
    editedEmployee,
    handleSaveClick,
    updateEmployeeField,
    handleDepartmentChange,
    handleCancel,
    navbarWidth,
    setNavbarWidth,
    setEditedEmployee,
    t,
  };
};

export default useEditEmployeeDetails;
