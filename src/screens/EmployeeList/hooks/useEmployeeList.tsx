import { useNavigate } from "react-router-dom";
import { ClickableText } from "../../../components/core/styled";
import { Employee, Food } from "../../../api/types";
import { useEffect, useState } from "react";
import tokens from "../../../components/core/theme/tokens";
import { toNumber } from "../../../utils/helpers.utils";

const useEmployeeList = () => {
  const navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= toNumber(tokens.breakpoints.phone));
      setIsTablet(
        window.innerWidth > toNumber(tokens.breakpoints.phone) &&
          window.innerWidth <= toNumber(tokens.breakpoints.tabletLarge)
      );
      setIsMedium(
        window.innerWidth > toNumber(tokens.breakpoints.tabletLarge) &&
          window.innerWidth <= toNumber(tokens.breakpoints.laptop)
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
        width: "2%",
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
        width: "2%",
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
        width: "2%",
        render: (allergies: Food["allergies"]) => (
          <span>{allergies?.length > 0 ? allergies.join(", ") : "None"}</span>
        ),
      },
    ];

    switch (true) {
      case isSmallScreen:
        return columns.filter((col) => col.key === "name");
      case isTablet:
        return columns.filter(
          (col) =>
            col.key === "name" || col.key === "role" || col.key === "department"
        );
      case isMedium:
        return columns.filter(
          (col) =>
            col.key === "name" ||
            col.key === "role" ||
            col.key === "department" ||
            col.key === "contact.email"
        );
      case isLargeScreen:
        return columns;

      default:
        return columns;
    }
  };

  return {
    tableColumns: getTableColumns(),
  };
};

export default useEmployeeList;
