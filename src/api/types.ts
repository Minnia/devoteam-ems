export type Contact = {
  email: string;
  telephone: string;
};

export type Department = {
  name: string;
  role: string;
  isEmployee: boolean;
  isManager: boolean;
  isAdmin: boolean;
};

export type Food = {
  preference: string;
  allergies: string[];
};

export type Employee = {
  id: string;
  name: string;
  avatar: string;
  contact: Contact;
  department: Department;
  food: Food;
};

export type PaginatedResponse<T> = {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
};
