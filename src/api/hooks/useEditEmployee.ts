import { useMutation } from "@tanstack/react-query";
import api from "../endpoints/employees.endpoints";
import { queryClient } from "../../integrations/react-query";
import { Employee } from "../types";
import useEmployeeById from "./useEmployeeById";

const useEditEmployee = (id: string) =>
  useMutation({
    mutationFn: (user: Employee) => api.employees.editEmployee(id, user),

    onMutate: async (newEmployee: Employee) => {
      const queryKey = useEmployeeById.queryKey(id);
      await queryClient.cancelQueries({ queryKey });

      const previousEmployee = queryClient.getQueryData<Employee>(queryKey);

      queryClient.setQueryData<Employee>(queryKey, (old) => ({
        ...old,
        ...newEmployee,
      }));

      return { previousEmployee };
    },

    onError: (err, _, context) => {
      const queryKey = useEmployeeById.queryKey(id) as [string, string];
      console.error("Mutation error:", err);

      if (context?.previousEmployee) {
        queryClient.setQueryData<Employee>(queryKey, context.previousEmployee);
      }
    },

    onSuccess: (updatedEmployee: Employee) => {
      const queryKey = useEmployeeById.queryKey(id) as [string, string];
      queryClient.setQueryData<Employee>(queryKey, updatedEmployee);

      queryClient.invalidateQueries({ queryKey });
    },
  });

export default useEditEmployee;
