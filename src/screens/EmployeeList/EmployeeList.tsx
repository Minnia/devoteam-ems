import { Table, Input } from "antd";
import {
  FlexContainer,
  FullWidthContainer,
  ScreenContainer,
} from "../../components/core/styled";
import useEmployees from "./hooks/useEmployees";
import useEmployeeList from "./hooks/useEmployeeList";
import NotFound from "../../components/molecules/NotFound";
import * as S from "./styled";
import tokens from "../../components/core/theme/tokens";
import NavBar from "../NavBar";

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
                  rowKey={(record) => record.id}
                  key={filteredEmployees.length}
                  size="small"
                  dataSource={filteredEmployees}
                  columns={tableColumns}
                  loading={isLoading}
                  bordered
                  scroll={{ x: "max-content" }}
                  style={{
                    overflowX: "scroll",
                    marginTop: tokens.margin.BASELINE * 2,
                  }}
                  pagination={{ hideOnSinglePage: true, pageSize: 20 }}
                />
              </S.CompactTableWrapper>
            </FullWidthContainer>
          </div>
        </FlexContainer>
      </ScreenContainer>
    </>
  );
};

export default EmployeeList;
