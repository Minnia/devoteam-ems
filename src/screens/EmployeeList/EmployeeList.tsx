import { Table, Input } from "antd";
import { FlexContainer, ScreenContainer } from "../../components/core/styled";
import useEmployees from "./hooks/useEmployees";
import useEmployeeList from "./hooks/useEmployeeList";
import NotFound from "../../components/molecules/NotFound";
import * as S from "./styled";
import tokens from "../../components/core/theme/tokens";
import NavBar from "../NavBar";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb";

const EmployeeList = () => {
  const { filteredEmployees, isLoading, searchText, setSearchText, error } =
    useEmployees();
  const { tableColumns } = useEmployeeList();

  if (error) {
    return <NotFound />;
  }

  if (!filteredEmployees) {
    return (
      <Table
        dataSource={[]}
        columns={tableColumns}
        loading={isLoading}
        bordered
      />
    );
  }

  return (
    <>
      <NavBar />

      <ScreenContainer $center>
        <FlexContainer>
          <div>
            <S.CompactTableWrapper>
              <S.SearchWrapper>
                <Input
                  placeholder="Search Employees"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </S.SearchWrapper>
              <Table
                rowKey={(record) => record.id}
                key={filteredEmployees.length}
                size={
                  tokens.breakpoints.phone || tokens.breakpoints.tabletLarge
                    ? "small"
                    : "middle"
                }
                dataSource={filteredEmployees}
                columns={tableColumns}
                loading={isLoading}
                bordered
                style={{
                  marginTop: tokens.margin.BASELINE * 2,
                }}
                pagination={{ hideOnSinglePage: true }}
              />
            </S.CompactTableWrapper>
          </div>
          <Breadcrumb />
        </FlexContainer>
      </ScreenContainer>
    </>
  );
};

export default EmployeeList;
