import { useNavigate } from "react-router-dom";
import { ClickableText } from "../../../components/core/styled";
import { Employee, Food } from "../../../api/hooks/types";

const useEmployeeList = () => {
  const navigate = useNavigate();
  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "1%",
      sorter: (a: Employee, b: Employee) => a.name.localeCompare(b.name),
      render: (name: Employee["name"], record: Employee) => {
        const link = `/employees/${record.id}`;
        return (
          <ClickableText onClick={() => navigate(link)} link={link}>
            {name}
          </ClickableText>
        );
      },
    },
    {
      title: "Email",
      dataIndex: ["contact", "email"],
      key: "contact.email",
      width: "1%",
    },
    {
      title: "Telephone",
      dataIndex: ["contact", "telephone"],
      key: "contact.telephone",
      width: "1%",
    },
    {
      title: "Department",
      dataIndex: ["department", "name"],
      key: "department",
      width: "1%",
      sorter: (a: Employee, b: Employee) =>
        a.department.name.localeCompare(b.department.name),
    },
    {
      title: "Role",
      dataIndex: ["department", "role"],
      key: "role",
      width: "1%",
      sorter: (a: Employee, b: Employee) =>
        a.department.role.localeCompare(b.department.role),
    },
    {
      title: "Preferences",
      dataIndex: ["food", "preference"],
      key: "food",
      width: "1%",
    },
    {
      title: "Allergies",
      dataIndex: ["food", "allergies"],
      key: "allergies",
      width: "1%",
      render: (allergies: Food["allergies"]) => (
        <span>{allergies?.length > 0 ? allergies.join(", ") : "None"}</span>
      ),
    },
  ];
  return {
    tableColumns,
  };
};

export default useEmployeeList;
