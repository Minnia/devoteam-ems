import { useMutation } from "@tanstack/react-query";
import api from "../endpoints/employees.endpoints";
import { queryClient } from "../../integrations/react-query";
import { Employee } from "../types";
import useEmployeeById from "./useEmployeeById";

const useEditEmployee = (id: string) =>
  useMutation({
    mutationFn: (user: Employee) => {
      return api.employees.editEmployee(id, user);
    },
    onMutate: async (newEmployee: Employee) => {
      await queryClient.cancelQueries(useEmployeeById.queryKey(id));

      const previousEmployee = queryClient.getQueryData<Employee>(
        useEmployeeById.queryKey(id)
      );

      queryClient.setQueryData<Employee>(
        useEmployeeById.queryKey(id),
        (old) => ({
          ...old,
          ...newEmployee,
        })
      );

      return { previousEmployee };
    },
    onError: (err, _, context) => {
      console.error("Mutation error:", err);

      if (context?.previousEmployee) {
        queryClient.setQueryData<Employee>(
          useEmployeeById.queryKey(id),
          context.previousEmployee
        );
      }
    },
    onSuccess: (updatedEmployee: Employee) => {
      queryClient.setQueryData<Employee>(
        useEmployeeById.queryKey(id),
        updatedEmployee
      );

      queryClient.invalidateQueries(useEmployeeById.queryKey(id));
    },
  });

export default useEditEmployee;
