import { useQuery } from "@tanstack/react-query";
import api from "../endpoints/employees.endpoints";

import { queryClient } from "../../integrations/react-query";
import { Employee } from "../types";

const queryKey = () => ["employees"];

const queryFn = async (page: number, limit: number) => {
  const employees = await api.employees.getPaginated(page, limit);
  return employees;
};

const useGetPaginatedEmployees = (page: number, limit: number) =>
  useQuery({
    queryFn: () => queryFn(page, limit),
    queryKey: queryKey(),
  });

useGetPaginatedEmployees.queryKey = queryKey;

useGetPaginatedEmployees.invalidate = () =>
  queryClient.invalidateQueries({ queryKey: queryKey() });

useGetPaginatedEmployees.removeQuery = () =>
  queryClient.removeQueries({ queryKey: queryKey() });

useGetPaginatedEmployees.prefetch = (
  queryFn: () => Promise<Employee[]>,
  queryKey: () => string[]
) =>
  queryClient.prefetchQuery({
    queryFn: () => queryFn(),
    queryKey: queryKey(),
  });

export default useGetPaginatedEmployees;
