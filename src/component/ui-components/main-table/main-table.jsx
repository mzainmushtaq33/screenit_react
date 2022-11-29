/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col } from "antd";
import "./main-table.scss";
import {
  edit_v1,
  next_v1,
  prev_v1,
  trash_v1,
} from "../../../services/svg/svg-icon.js";
import InputComponent from "../formComponents/input.js";
import SelectDropdown from "../formComponents/select.js";
import { dateConverter } from "../../../utils/utilityFunctions/dateConverter";

const DataTable = ({
  columns = [],
  dataSource = [],
  validationSource = [],
  cellInputHandler,
  editHandler,
  deleteHandler,
  pagination,
  selectedRowsData,
  rowSelectionConfig = {
    /* Demo config values */
    // columnWidth: "150px",
    // columnTitle: "Select For Absence",
    // selectedRowKeys: [id, id ,id]
  },
  allowFilter = false,
  ...args
}) => {
  let [headerCol, setHeaderCol] = useState([...columns]);

  let [filteredDataSource, setFilteredDataSource] = useState([]);

  let [concatedDataForFilter, setConcatedDataForFilter] = useState([]);

  let [searchText, setSearchText] = useState("");
  let [selectedKey, setSelectedKey] = useState(null);

  useEffect(() => {
    setFilteredDataSource(dataSource);

    if (allowFilter) {
      setConcatedDataForFilter(
        dataSource.map((staff) =>
          columns
            .map((column) => staff[column.dataIndex])
            .join("")
            .toLowerCase()
        )
      );
    }
  }, [dataSource]);

  useEffect(() => {
    if (allowFilter) {
      if (searchText?.trim().length) {
        if (selectedKey?.length) {
          setFilteredDataSource(
            dataSource.filter((data) => {
              return data[selectedKey]
                .toLowerCase()
                .includes(searchText.trim().toLowerCase());
            })
          );
        } else {
          setFilteredDataSource(
            dataSource.filter((data, index) =>
              concatedDataForFilter[index]?.includes(
                searchText.trim().toLowerCase()
              )
            )
          );
        }
      } else {
        setFilteredDataSource(dataSource);
      }
    }
  }, [searchText, selectedKey]);

  useEffect(() => {
    let data = columns.map((header, index) => {
      if (header.type === "input") {
        header = {
          ...header,
          render: (value, object, indexOfDataArray) => (
            <>
              <InputComponent
                type={header.inputType ? header.inputType : "text"}
                placeholder={header.placeholder ? header.placeholder : ""}
                className="w-100"
                onChange={(event) =>
                  cellInputHandler(
                    event.target.value,
                    indexOfDataArray,
                    header.dataIndex,
                    object
                  )
                }
                value={value}
                errorMsg={
                  validationSource[indexOfDataArray]?.[header.dataIndex]
                }
              />
            </>
          ),
        };
      } else if (header.type === "select") {
        header = {
          ...header,
          render: (value, object, index) => (
            <SelectDropdown
              onChange={(event, value) =>
                cellInputHandler(event, index, header.dataIndex, object)
              }
              items={header.items ? header.items : []}
              itemText={header.itemText ? header.itemText : ""}
              itemValue={header.itemValue ? header.itemValue : ""}
              value={value}
              className="w-100"
              errorMsg={validationSource[index]?.[header.dataIndex]}
            />
          ),
        };
      } else if (header.type === "date") {
        header = {
          ...header,
          render: (value, object, index) => <>{dateConverter(value)}</>,
        };
      } else if (header.type === "edit") {
        header = {
          ...header,
          render: (value, object) => (
            <>
              <Button
                onClick={() => editHandler(object)}
                className="table_edit_button"
              >
                {edit_v1}
              </Button>
            </>
          ),
        };
      } else if (header.type === "update") {
        header = {
          ...header,
          render: (value, object) => (
            <>
              <Button onClick={() => editHandler(object)}>
                {header.reName ? header.reName : "Update"}
              </Button>
            </>
          ),
        };
      } else if (header.type === "delete") {
        header = {
          ...header,
          render: (value, object) => (
            <>
              <Button
                danger
                onClick={() => deleteHandler(object)}
                className="table_del_button"
              >
                {trash_v1}
              </Button>
            </>
          ),
        };
      } else if (header.type === "image") {
        header = {
          ...header,
          render: (value, object) => (
            <>
              <img
                src={value ? value : "https://i.ibb.co/2hcLX81/user.png"}
                height="70px"
                width="70px"
                alt="student"
              />
            </>
          ),
        };
      } else if (header.type === "signImage") {
        header = {
          ...header,
          render: (value, object) => (
            <>
              <img
                src={value ? value : "https://i.ibb.co/2hcLX81/user.png"}
                width="130px"
                alt="student"
              />
            </>
          ),
        };
      }
      if (header.sortable) {
        let sorter =
          header.sortableType && header.sortableType === "number"
            ? (a, b) => a[header.dataIndex] - b[header.dataIndex]
            : (a, b) => a[header.dataIndex] - b[header.dataIndex];

        header = {
          ...header,
          sorter,
        };
      }

      return header;
    });

    setHeaderCol(data);
  }, [columns]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRowsData) {
        selectedRowsData(selectedRowKeys, selectedRows);
      }
    },
    ...rowSelectionConfig,
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return (
        <span className="cmn_prev_next prev_btn">
          {prev_v1} <b>Prev</b>
        </span>
      );
    }
    if (type === "next") {
      return (
        <span className="cmn_prev_next next_btn">
          <b>Next</b> {next_v1}
        </span>
      );
    }
    return originalElement;
  };

  return (
    <>
      {allowFilter && (
        <>
          <Row gutter={[24, 24]}>
            <Col md={6}>
              <SelectDropdown
                items={columns.filter((column) =>
                  column.dataIndex ? true : false
                )}
                itemText="title"
                itemValue="dataIndex"
                size="large"
                className="w-100"
                value={selectedKey}
                onChange={(value) => setSelectedKey(value)}
              />
            </Col>
            <Col md={6}>
              <InputComponent
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                size="large"
                className="mb-4"
                placeholder="Search"
              />
            </Col>
          </Row>
        </>
      )}
      <div className="table_parent overflow-auto w-100">
        <Table
          className="table_headline"
          rowSelection={
            selectedRowsData
              ? {
                  ...rowSelection,
                }
              : false
          }
          // className="thead"
          columns={headerCol}
          dataSource={filteredDataSource}
          pagination={{
            disabled: false,
            simple: true,
            responsive: true,
            itemRender,
          }}
          {...args}
        ></Table>
      </div>
    </>
  );
};

export default DataTable;
