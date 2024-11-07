import { useMemo } from "react";
import { Employee } from "../../../api/types";
import useGetAllEmployees from "../../../api/hooks/useGetAllEmployees";

const useGetCompanyRolesAndAllergies = () => {
  const { data: employees, isLoading, isError } = useGetAllEmployees();

  const roles = useMemo(() => {
    if (!employees) return [];

    const uniqueRoles = new Set<string>();
    employees.forEach((employee: Employee) => {
      if (employee.department.isEmployee) uniqueRoles.add("isEmployee");
      if (employee.department.isManager) uniqueRoles.add("isManager");
      if (employee.department.isAdmin) uniqueRoles.add("isAdmin");
    });

    return Array.from(uniqueRoles);
  }, [employees]);

  const allergies = useMemo(() => {
    if (!employees) return [];

    const uniqueAllergies = new Set<string>();
    employees.forEach((employee: Employee) => {
      employee.food.allergies.forEach((allergy) =>
        uniqueAllergies.add(allergy)
      );
    });

    return Array.from(uniqueAllergies);
  }, [employees]);

  return { roles, allergies, isLoading, isError };
};

export default useGetCompanyRolesAndAllergies;
