import { Employee } from "../../api/types";
import useGetAllEmployees from "../../api/hooks/useGetAllEmployees";
import { useAuth } from "../../context/AuthContext";
import { generateRandomColor } from "../../utils/helpers.utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useHome = () => {
  const { data: employees } = useGetAllEmployees();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [navbarWidth, setNavbarWidth] = useState(window.innerWidth);

  const numberOfEmployees = employees?.length || 0;

  const employeeOfTheMonth = employees?.find((employee) => {
    if (!employee) return employees[0].name;
    return employee.name.endsWith("son");
  });

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

  const roleDistributonData = Object.entries(roleDistribution).map(
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

  const departmentData = Object.entries(departmentDistribution).map(
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
    roleDistributonData,
    departmentData,
    user,
    navigate,
    employeeOfTheMonth,
    navbarWidth,
    setNavbarWidth,
  };
};

export default useHome;
