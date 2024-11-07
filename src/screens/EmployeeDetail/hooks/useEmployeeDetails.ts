import { useParams } from "react-router-dom";
import useEmployeeById from "../../../api/hooks/useEmployeeById";

import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { message } from "antd";
import { Employee } from "../../../api/hooks/types";
import useEditEmployee from "../../../api/hooks/useEditEmployee";

const useEmployeeDetails = () => {
  const { id } = useParams();
  const { data: employee, isLoading, error, refetch } = useEmployeeById(id!);
  const { mutateAsync: editEmployee } = useEditEmployee(id!);

  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState(employee);

  useEffect(() => {
    setEditedEmployee(employee);
  }, [employee]);

  useEffect(() => {
    if (employee) {
      setEditedEmployee({
        ...employee,
        department: employee.department || {
          name: "",
          isEmployee: false,
          isManager: false,
          isAdmin: false,
        },
        food: employee.food || { allergies: [] },
      });
    }
  }, [employee]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedEmployee(employee);
  };

  const handleSaveEdit = async () => {
    if (!editedEmployee) return;

    try {
      const updatedEmployee = await editEmployee(editedEmployee);
      setEditedEmployee(updatedEmployee);
      refetch();
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving employee:", error);
    }
    if (user?.isAdmin) {
      message.success("Employee details updated successfully.");
      setIsEditing(false);
    } else {
      message.error("You do not have permission to edit this employee.");
    }
  };

  const handleNestedInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    parent: keyof Employee
  ) => {
    const { value } = e.target;

    setEditedEmployee((prev) => {
      if (!prev) return;

      return {
        ...prev,
        [parent]: {
          ...(prev[parent] && typeof prev[parent] === "object"
            ? (prev[parent] as Record<string, any>)
            : {}),
          [field]: value,
        },
      };
    });
  };
  return {
    user,
    employee,
    isLoading,
    error,
    isEditing,
    editedEmployee,
    handleEditClick,
    handleCancelEdit,
    handleSaveEdit,

    handleNestedInputChange,
  };
};

export default useEmployeeDetails;
