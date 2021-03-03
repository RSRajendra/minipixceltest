import React, { useState, useContext, useEffect } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { employees } from "./employees";
import Pagination from "./pagination";
const Employees = (props) => {
  const [tableData, updTableData] = useState(null);
  const [controlledPageCount, updControlledPageCount] = useState(1);
  const [search, setSearch] = useState("");

  const _onPageChange = (val) => {
    console.log(val);
  };

  useEffect(() => {
    updTableData(employees);
  }, []);

  const data = React.useMemo(() => {
    return tableData !== null
      ? tableData.map((row) => {
          return {
            col1: row.id,
            col2: row.first_name,
            col3: row.last_name,
            col4: row.email,
            col5: row.gender,
            col6: row.address,
            col7: row.is_active ? "Active" : "Innactive",
          };
        })
      : [];
  }, [tableData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "col1",
      },
      {
        Header: "First Name",
        accessor: "col2",
      },
      {
        Header: "Last Name",
        accessor: "col3",
      },
      {
        Header: "Email",
        accessor: "col4",
      },

      {
        Header: "Gender",
        accessor: "col5",
      },
      {
        Header: "Address",
        accessor: "col6",
      },
      {
        Header: "Status",
        accessor: "col7",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [...columns]);
    }
  );

  const _onSearchHandeller = (name) => {
    let custToFilter = [...employees];
    if (name) {
      const regex = new RegExp(name, "i");
      let filtered = custToFilter.filter((val) => val.first_name.match(regex));
      updTableData(filtered);
    } else {
      updTableData(custToFilter);
    }

    setSearch(name);
  };

  return (
    <div className="customers">
      <div className="customers-filter">
        <input
          className="customers__search"
          placeholder="Search"
          value={search}
          onChange={(e) => _onSearchHandeller(e.target.value)}
        />
      </div>
      <div className="customers__table" style={{ overflowX: "scroll" }}>
        <table
          {...getTableProps()}
          cellPadding="0"
          cellSpacing="0"
          style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            border: "solid 1px #d8d8d8",
            borderRadius: "8px",
            marginTop: "1rem",
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{ height: "48px" }}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      fontSize: "14px",
                      color: "#2A2945",
                      opacity: "0.7",
                      fontWeight: "700",
                      borderBottom: "solid 1px #D8D8D8",
                    }}
                    className="customers__table__head"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={
                    index % 2 === 1 ? { backgroundColor: "#F8F8F8" } : null
                  }
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          textAlign: "center",
                          height: "64px",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Pagination />
      </div>
    </div>
  );
};

export default Employees;
