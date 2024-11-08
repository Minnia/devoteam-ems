import { useNavigate } from "react-router-dom";
import { ClickableText } from "../../../components/core/styled";
import { Employee, Food } from "../../../api/types";
import { useEffect, useState } from "react";
import tokens from "../../../components/core/theme/tokens";

const useEmployeeList = () => {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= Number(tokens.breakpoints.phone));
      setIsTablet(
        window.innerWidth > Number(tokens.breakpoints.phone) &&
          window.innerWidth <= Number(tokens.breakpoints.tabletLarge)
      );
      setIsLargeScreen(
        window.innerWidth.toString() >= tokens.breakpoints.tabletLarge
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTableColumns = () => {
    const columns = [
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

    if (isSmallScreen) {
      console.log("small");
      return columns.filter((col) => col.key === "name");
    }

    if (isTablet) {
      console.log("tablet");
      return columns.filter(
        (col) =>
          col.key === "name" || col.key === "role" || col.key === "department"
      );
    }

    if (isLargeScreen) {
      console.log("large");
      return columns;
    }

    return columns;
  };

  return {
    tableColumns: getTableColumns(),
  };
};

export default useEmployeeList;
