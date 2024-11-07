import { useQuery } from "@tanstack/react-query";
import api from "../endpoints";
import { queryClient } from "../../integrations/react-query";

const queryKey = (id: string) => ["employees", id];

const queryFn = async (id: string) => {
  if (!id) return;

  const employee = await api.employees.getById(id);

  return employee;
};

const useEmployeeById = (id: string) =>
  useQuery({
    enabled: !!id,
    queryFn: () => queryFn(id),
    queryKey: queryKey(id),
  });

useEmployeeById.queryKey = queryKey;

useEmployeeById.invalidate = (id: string) =>
  queryClient.invalidateQueries({ queryKey: queryKey(id) });

useEmployeeById.removeQuery = (id: string) =>
  queryClient.removeQueries({ queryKey: queryKey(id) });

useEmployeeById.prefetch = (id: string) =>
  queryClient.prefetchQuery({
    queryFn: () => queryFn(id),
    queryKey: queryKey(id),
  });

export default useEmployeeById;
