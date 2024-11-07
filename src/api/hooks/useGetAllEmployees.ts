import { useQuery } from "@tanstack/react-query";
import api from "../endpoints/employees.endpoints";

import { queryClient } from "../../integrations/react-query";
import { Employee } from "./types";

const queryKey = () => ["employees"];

const queryFn = async () => {
  const employees = await api.employees.getAll();
  return employees;
};

const useGetAllEmployees = () =>
  useQuery({
    queryFn: () => queryFn(),
    queryKey: queryKey(),
  });

useGetAllEmployees.queryKey = queryKey;

useGetAllEmployees.invalidate = () =>
  queryClient.invalidateQueries({ queryKey: queryKey() });

useGetAllEmployees.removeQuery = () =>
  queryClient.removeQueries({ queryKey: queryKey() });

useGetAllEmployees.prefetch = (
  queryFn: () => Promise<Employee[]>,
  queryKey: () => string[]
) =>
  queryClient.prefetchQuery({
    queryFn: () => queryFn(),
    queryKey: queryKey(),
  });

export default useGetAllEmployees;
