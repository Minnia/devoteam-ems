import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toNumber } from "../../../utils/helpers.utils";
import tokens from "../../../core/theme/tokens";
import { ClickableText } from "../../../core/styled";
import { Employee } from "../../../api/types";
import { useTranslation } from "react-i18next";

type DataIndex = string | string[];

interface ColumnConfig {
  title: string;
  dataIndex: DataIndex;
  key: string;
  sorter?: (a: any, b: any) => number;
  render?: (value: any, record: any) => JSX.Element;
}

const createColumn = (
  title: string,
  dataIndex: DataIndex,
  key: string,
  sorter?: ColumnConfig["sorter"],
  render?: ColumnConfig["render"]
): ColumnConfig => ({
  title,
  dataIndex,
  key,
  sorter,
  render,
});

const useEmployeeList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isExpandable, setIsExpandable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsExpandable(width <= toNumber(tokens.breakpoints.tablet));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        window.innerWidth >= toNumber(tokens.breakpoints.tabletLarge)
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTableColumns = () => {
    const columns = [
      createColumn(
        t("globals.name"),
        "name",
        "name",

        (a, b) => a.name.localeCompare(b.name),
        (name, record) => {
          const link = `/employees/${record.id}`;
          return (
            <ClickableText onClick={() => navigate(link)} link={link}>
              {name}
            </ClickableText>
          );
        }
      ),
      createColumn("Email", ["contact", "email"], "contact.email"),
      createColumn(
        t("globals.telephone"),
        ["contact", "telephone"],
        "contact.telephone"
      ),
      createColumn(
        t("globals.department"),
        ["department", "name"],
        "department",
        (a, b) => a.department.name.localeCompare(b.department.name)
      ),
      createColumn(t("globals.role"), ["department", "role"], "role", (a, b) =>
        a.department.role.localeCompare(b.department.role)
      ),
      createColumn(t("globals.preferences"), ["food", "preference"], "food"),
      createColumn(
        t("globals.allergies"),
        ["food", "allergies"],
        "allergies",

        undefined,
        (allergies) => (
          <span>{allergies?.length > 0 ? allergies.join(", ") : "None"}</span>
        )
      ),
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

  const expandedRowRender = (record: Employee) => (
    <div style={{ width: 100 }}>
      <p>
        <b>{t("globals.email")}:</b> {record.contact?.email || "N/A"}
      </p>
      <p>
        <b>{t("globals.telephone")}:</b> {record.contact?.telephone || "N/A"}
      </p>
      <p>
        <b>{t("globals.preferences")}:</b> {record.food?.preference || "N/A"}
      </p>
      <p>
        <b>{t("globals.allergies")}:</b>
        {record.food?.allergies?.join(", ") || "None"}
      </p>
    </div>
  );

  return {
    tableColumns: getTableColumns(),
    expandedRowRender,
    isExpandable,
  };
};

export default useEmployeeList;
