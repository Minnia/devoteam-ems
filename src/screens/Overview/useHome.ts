import { Employee } from "../../api/hooks/types";
import useGetAllEmployees from "../../api/hooks/useGetAllEmployees";
import { useAuth } from "../../context/AuthContext";
import { generateRandomColor } from "../../utils/helpers.utils";

const useHome = () => {
  const { data: employees } = useGetAllEmployees();
  const { user } = useAuth();

  const numberOfEmployees = employees?.length || 0;
  const numberOfDepartments = employees?.reduce(
    (acc: string[], employee: Employee) => {
      if (!acc.includes(employee.department.name)) {
        return [...acc, employee.department.name];
      }
      return acc;
    },
    []
  ).length;

  const numberOfRoles = employees?.reduce(
    (acc: string[], employee: Employee) => {
      if (!acc.includes(employee.department.role)) {
        return [...acc, employee.department.role];
      }
      return acc;
    },
    []
  ).length;

  let roleDistribution: { [key: string]: number } = {};

  employees?.forEach((employee) => {
    const role = employee.department.role;
    if (roleDistribution[role]) {
      roleDistribution[role]++;
    } else {
      roleDistribution[role] = 1;
    }
  });

  const pieChartData = Object.entries(roleDistribution).map(
    ([role, count]) => ({
      title: role,
      value: count,
      color: generateRandomColor(),
    })
  );

  let departmentDistribution: { [key: string]: number } = {};

  employees?.forEach((employee) => {
    const department = employee.department.name;
    if (departmentDistribution[department]) {
      departmentDistribution[department]++;
    } else {
      departmentDistribution[department] = 1;
    }
  });

  const departmentPieChartData = Object.entries(departmentDistribution).map(
    ([department, count]) => ({
      title: department,
      value: count,
      color: generateRandomColor(),
    })
  );
  return {
    numberOfEmployees,
    numberOfDepartments,
    numberOfRoles,
    pieChartData,
    departmentPieChartData,
    user,
  };
};

export default useHome;
