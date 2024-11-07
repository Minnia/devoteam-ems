import { Employee } from "../hooks/types";
import { axiosClient } from "./axios-client";

const employees = {
  employees: {
    getAll: async () => {
      try {
        const { data } = await axiosClient.get<Employee[]>("/employees");
        return data;
      } catch (error) {
        console.error("Error fetching all employees", error);
        throw error;
      }
    },

    getById: async (id: string) => {
      try {
        const { data } = await axiosClient.get<Employee>(`/employees/${id}`);
        return data;
      } catch (error) {
        console.error("Error fetching employee by id", error);
        throw error;
      }
    },

    editEmployee: async (id: string, employee: Employee) => {
      const employeeId = id;

      const updatedData = {
        id: employeeId,
        name: employee.name,
        avatar: employee.avatar,
        contact: {
          email: employee.contact.email,
          telephone: employee.contact.telephone,
        },
        department: {
          name: employee.department.name,
          role: employee.department.role,
          isEmployee: employee.department.isEmployee,
          isManager: employee.department.isManager,
          isAdmin: employee.department.isAdmin,
        },
        food: employee.food,
        email: employee.contact.email,
        telephone: employee.contact.telephone,
        isEmployee: employee.department.isEmployee,
        isManager: employee.department.isManager,
        isAdmin: employee.department.isAdmin,
      };

      try {
        const { data } = await axiosClient.patch<Employee>(
          `/employees/${employeeId}`,
          updatedData
        );
        return data;
      } catch (error) {
        console.error("Error updating employee:", error);
        throw error;
      }
    },
  },
};

export default employees;
