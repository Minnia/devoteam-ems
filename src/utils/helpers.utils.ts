import { Employee } from "../api/types";

export const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const typesOfRoles = (employees: Employee[]) => {
  return employees?.reduce((acc: string[], employee: Employee) => {
    if (!acc.includes(employee.department.role)) {
      return [...acc, employee.department.role];
    }
    return acc;
  }, []);
};

export const hours = (amount: number) => {
  return 1000 * 60 * 60 * amount;
};

export const join = (array: string[]) => {
  return array.join(", ");
};

export const toNumber = (value: string): number => {
  if (value.endsWith("px")) {
    return parseFloat(value.replace("px", ""));
  }
  return parseFloat(value);
};
