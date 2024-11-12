import { useState, useCallback } from "react";
import useEditEmployee from "../../../api/hooks/useEditEmployee";
import { Contact, Department, Employee, Food } from "../../../api/types";
import { message, Modal } from "antd";
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
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { mutateAsync: editEmployee } = useEditEmployee(editedEmployee?.id);

  const { t } = useTranslation();

  const handleSaveClick = async () => {
    try {
      await editEmployee(editedEmployee);
      setHasUnsavedChanges(false);
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

        if (value !== (originalValue as unknown as typeof value)) {
          setHasUnsavedChanges(true);
        }

        return updatedState;
      });
    },
    [employee]
  );

  const handleDepartmentChange = useCallback(
    (value: string) => {
      handleNestedInputChange(
        { target: { value } } as React.ChangeEvent<HTMLInputElement>,
        "name",
        "department"
      );
      setHasUnsavedChanges(true);
    },
    [handleNestedInputChange]
  );

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      Modal.confirm({
        title: t("employees.details.modal.title"),
        content: t("employees.details.modal.body"),
        okText: t("globals.yes"),
        cancelText: t("globals.cancel"),
        onOk: () => {
          handleCancelEdit();
        },
      });
    } else {
      handleCancelEdit();
    }
  };

  return {
    editedEmployee,
    handleSaveClick,
    updateEmployeeField,
    handleDepartmentChange,
    hasUnsavedChanges,
    handleCancel,
    t,
  };
};

export default useEditEmployeeDetails;
