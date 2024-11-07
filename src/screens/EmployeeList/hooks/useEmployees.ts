import { useMemo, useState } from "react";
import useGetAllEmployees from "../../../api/hooks/useGetAllEmployees";
import { Employee } from "../../../api/hooks/types";

const useEmployees = () => {
  const { data: employees, isLoading, error } = useGetAllEmployees();
  const [searchText, setSearchText] = useState("");

  const filteredEmployees = useMemo(() => {
    if (!searchText) return employees;
    const lowercasedFilter = searchText.toLowerCase();

    return employees?.filter((employee: Employee) => {
      const fieldsToSearch = [
        employee.name,
        employee.contact?.email,
        employee.contact?.telephone,
        employee.department?.name,
        employee.department?.role,
        employee.food?.preference,
        ...(employee.food?.allergies || []),
      ];

      return fieldsToSearch.some((field) =>
        field?.toLowerCase().includes(lowercasedFilter)
      );
    });
  }, [employees, searchText]);

  return { filteredEmployees, isLoading, error, searchText, setSearchText };
};

export default useEmployees;
