import { Table, Input } from "antd";
import {
  FullWidthContainer,
  ScreenContainer,
  Spacer,
} from "../../components/core/styled";
import useEmployees from "./hooks/useEmployees";
import useEmployeeList from "./hooks/useEmployeeList";
import Dashboard from "../Dashboard";
import NotFound from "../../components/molecules/NotFound";
import Breadcrumb from "../../components/atoms/Breadcrumb";
import * as S from "./styled";
import tokens from "../../components/core/theme/tokens";

const EmployeeList = ({ horizontal }: { horizontal: boolean }) => {
  const { filteredEmployees, isLoading, searchText, setSearchText, error } =
    useEmployees();
  const { tableColumns } = useEmployeeList();

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <Dashboard />
      <Breadcrumb />
      <Spacer height={40} />
      <ScreenContainer
        center
        style={{ overflowX: "auto" }}
        horizontal={horizontal}
      >
        <FullWidthContainer>
          <S.CompactTableWrapper>
            <S.SearchWrapper>
              <Input
                placeholder="Search Employees"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </S.SearchWrapper>
            <Table
              size="small"
              dataSource={filteredEmployees}
              columns={tableColumns}
              loading={isLoading}
              bordered
              scroll={{ x: "max-content" }}
              style={{
                overflowX: "auto",
                marginTop: tokens.margin.BASELINE * 2,
              }}
              pagination={{ hideOnSinglePage: true, pageSize: 20 }}
            />
          </S.CompactTableWrapper>
        </FullWidthContainer>
      </ScreenContainer>
    </>
  );
};

export default EmployeeList;
