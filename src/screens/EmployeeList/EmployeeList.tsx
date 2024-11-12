import { Table } from "antd";
import { FlexContainer, ScreenContainer, Spacer } from "../../core/styled";
import useEmployees from "./hooks/useEmployees";
import useEmployeeList from "./hooks/useEmployeeList";
import NotFound from "../../components/molecules/NotFound";
import * as S from "./styled";
import tokens from "../../core/theme/tokens";
import NavBar from "../NavBar";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb";
import { toNumber } from "../../utils/helpers.utils";
import SearchBar from "../../components/atoms/SearchBar";

const EmployeeList = () => {
  const { filteredEmployees, isLoading, searchText, setSearchText, error } =
    useEmployees();
  const { tableColumns, expandedRowRender, isExpandable } = useEmployeeList();

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
      <FlexContainer>
        {window.innerWidth > toNumber(tokens.breakpoints.tablet) && (
          <Breadcrumb />
        )}
      </FlexContainer>
      <ScreenContainer $center>
        <S.CompactTableWrapper>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <Spacer height={8} />

          <Table
            dataSource={filteredEmployees}
            columns={tableColumns}
            loading={isLoading}
            expandable={
              isExpandable
                ? {
                    expandedRowRender,
                    rowExpandable: (record) => Boolean(record.contact),
                    expandIconColumnIndex: tableColumns.length + 1,
                  }
                : undefined
            }
            size={
              tokens.breakpoints.phone || tokens.breakpoints.tabletLarge
                ? "small"
                : "large"
            }
            bordered
          />
        </S.CompactTableWrapper>
      </ScreenContainer>
    </>
  );
};

export default EmployeeList;
