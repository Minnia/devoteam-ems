import { useState } from "react";
import useEditEmployee from "../../../api/hooks/useEditEmployee";
import { Contact, Department, Employee, Food } from "../../../api/hooks/types";
import { message } from "antd";

const useEditEmployeeDetails = (
  employee: Employee,
  handleSaveEdit: () => void,
  handleNestedInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    parent: string
  ) => void
) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const { mutateAsync: editEmployee } = useEditEmployee(editedEmployee?.id);

  const handleSaveClick = async () => {
    try {
      await editEmployee(editedEmployee);
      handleSaveEdit();
    } catch (error) {
      message.error("Error saving employee. Please try again.");
      console.error("Error saving employee:", error);
    }
  };

  const updateEmployeeField = (
    path: string[],
    value: string | string[] | boolean | (string & Contact & Department & Food)
  ) => {
    setEditedEmployee((prevState) => {
      let updatedState = { ...prevState };
      let currentObj = updatedState;

      for (let i = 0; i < path.length - 1; i++) {
        currentObj = currentObj[path[i] as keyof typeof currentObj] as any;
      }

      currentObj[path[path.length - 1] as keyof typeof currentObj] =
        value as any;
      return updatedState;
    });
  };

  const handleDepartmentChange = (value: string) => {
    handleNestedInputChange(
      { target: { value } } as React.ChangeEvent<HTMLInputElement>,
      "name",
      "department"
    );
  };

  return {
    editedEmployee,
    handleSaveClick,
    updateEmployeeField,
    handleDepartmentChange,
  };
};

export default useEditEmployeeDetails;
