import { useMemo, useState } from "react";
import useGetAllEmployees from "../../../api/hooks/useGetAllEmployees";
import { Employee } from "../../../api/types";
import useGetPaginatedEmployees from "../../../api/hooks/useGetPaginatedEmployees";

const useEmployees = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const { data: employees, isLoading, error } = useGetAllEmployees();
  // const { data: paginatedEmployees, refetch } = useGetPaginatedEmployees(
  //   page,
  //   limit
  // );
  const [searchText, setSearchText] = useState("");
  const [navbarWidth, setNavbarWidth] = useState(window.innerWidth);

  // const fetchNextPage = (page: number) => {
  //   setPage(page);
  //   console.log("Fetching next page", page);
  //   refetch();
  // };

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

  return {
    filteredEmployees,
    isLoading,
    error,
    searchText,
    setSearchText,
    navbarWidth,
    setNavbarWidth,
    // paginatedEmployees,
    limit,
    page,
    // fetchNextPage,
    setLimit,
    employees,
  };
};

export default useEmployees;
