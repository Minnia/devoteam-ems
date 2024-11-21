import { Employee, PaginatedResponse } from "../types";
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

    getPaginated: async (page: number, limit: number) => {
      try {
        const { data } = await axiosClient.get<PaginatedResponse<Employee[]>>(
          `/employees?_page=${page}&_limit=${limit}`
        );
        return data;
      } catch (error) {
        console.error("Error fetching paginated employees", error);
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

      const { name, avatar, contact, department, food } = employee;
      const updatedData = {
        id: employeeId,
        name,
        avatar,
        contact: {
          email: contact.email,
          telephone: contact.telephone,
        },
        department: {
          name: department.name,
          role: department.role,
          isEmployee: department.isEmployee,
          isManager: department.isManager,
          isAdmin: department.isAdmin,
        },
        food,
        email: contact.email,
        telephone: contact.telephone,
        isEmployee: department.isEmployee,
        isManager: department.isManager,
        isAdmin: department.isAdmin,
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
