import { faker } from "@faker-js/faker";
import fs from "fs";

const generateEmployee = () => {
  const allergiesList = [
    "Peanuts",
    "Dairy",
    "Gluten",
    "Soy",
    "Shellfish",
    "Eggs",
  ];

  const randomFoodPreference = faker.helpers.arrayElement([
    "Vegan",
    "Vegetarian",
    "Non-Vegetarian",
  ]);

  const department = faker.helpers.arrayElement([
    "Engineering",
    "Marketing",
    "Sales",
    "Finance",
    "HR",
    "Operations",
  ]);

  const role = faker.helpers.arrayElement([
    "Software Engineer",
    "Product Manager",
    "Sales Executive",
    "Finance Manager",
    "HR Specialist",
    "Operations Manager",
  ]);

  // if a user is a manager, they are also an employee and not an admin
  const isEmployee = true;
  // if a user is an admin, they are also an employee but not a manager
  const isManager = faker.datatype.boolean();
  // if a user is an employee, they are not a manager or an admin
  const isAdmin = !isManager && faker.datatype.boolean();

  return {
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    avatar: faker.image.urlPlaceholder({
      width: 100,
      height: 100,
    }),
    contact: {
      email: faker.internet.email(),
      telephone: faker.phone.number(),
    },
    department: {
      name: department,
      role: role,
      isEmployee: isEmployee,
      isManager: isManager,
      isAdmin: isAdmin,
    },
    food: {
      preference: randomFoodPreference,
      allergies: faker.helpers.arrayElements(allergiesList, {
        min: 0,
        max: 3,
      }),
    },
  };
};

const generateEmployees = (numEmployees: number) => {
  const employees = [];
  for (let i = 0; i < numEmployees; i++) {
    employees.push(generateEmployee());
  }
  return employees;
};

const employees = generateEmployees(1000);

const filePath = "./employees.json";

fs.writeFile(filePath, JSON.stringify(employees, null, 2), (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log(
      `Successfully written ${employees.length} employee records to ${filePath}`
    );
  }
});

export {};
