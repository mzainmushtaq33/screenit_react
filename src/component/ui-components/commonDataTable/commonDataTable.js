/* eslint-disable react-hooks/exhaustive-deps */
import { IconCirclePlus, IconCopy, IconSearch } from "@tabler/icons";
import { Button, Col, Popover, Row } from "antd";
import React, { useEffect, useState } from "react";
import {
  dots3_v1,
  edit_v1,
  filter_v1,
  grids_v1,
  tables_v1,
  trash_v1,
} from "../../../services/svg/svg-icon";
import CardItem from "../cards/commonDataTableCard";
import InputComponent from "../formComponents/input";
import MainButton from "../main-buttons/main-button";
import DataTable from "../main-table/main-table";
import CustomTab from "../tab/tab";
import "./style.scss";
import { Card, CardContent, Grid, Skeleton } from "@mui/material";


export default function CommonDataTable({
  headers = [],
  dataSource = [],
  loadingState=false,
  gridItem,
  rowKey,
  gridTabArray,
  customTabExists = false,
  customTabListener = () => { },
  toggleButtonsExists = false,
  girdTableBtnExist = false,
  searchFilterExist = false,
  imgOverflowIcn = false,
  selectedToggleValue = "saved",
  toggleDefaultBtnText,
  toggleSavedBtnText,
  toggleButtonListener = () => { },
  addBtnText = "Add",
  addBtnClickHandler = () => { },
  editClickHandler = () => { },
  duplicateClickHandler = () => { },
  deleteClickHandler = () => { },
  switchClickHandler = () => { },
  checkboxClickHandler = () => { },
}) {
  let [view, setView] = useState("grid");

  let [searchKeyword, setSearchKeyword] = useState(null);
  let [filteredDataSource, setFilteredDataSource] = useState([]);
  let [concatedDataForFilter, setConcatedDataForFilter] = useState([]);

  useEffect(() => {
    setFilteredDataSource(dataSource);
    setConcatedDataForFilter(
      dataSource.map((staff) =>
        headers
          .map((column) => staff[column.dataIndex])
          .join("")
          .toLowerCase()
      )
    );
  }, [dataSource]);

  useEffect(() => {
    if (searchKeyword?.trim().length) {
      setFilteredDataSource(
        dataSource.filter((data, index) =>
          concatedDataForFilter[index]?.includes(
            searchKeyword.trim().toLowerCase()
          )
        )
      );
    } else {
      setFilteredDataSource(dataSource);
    }
  }, [searchKeyword]);

  let optionArray = [
    // {
    //   name: "Edit",
    //   clickHandler: editClickHandler,
    //   icon: edit_v1,
    // },
    // {
    //   name: "Duplicate",
    //   clickHandler: duplicateClickHandler,
    //   icon: <IconCopy />,
    // },
    {
      name: "Delete",
      clickHandler: deleteClickHandler,
      icon: trash_v1,
    },
  ];

  let tabVal = [
    {
      name: "Images",
      key: "images",
    },
    {
      name: "Audio",
      key: "audio",
    },
    {
      name: "Video",
      key: "video",
    },
    {
      name: "Documents",
      key: "documents",
    },
    {
      name: "Web Pages",
      key: "webPages",
    },
  ];

  return (
    <Row id="cmnDataTableMain" className="w-100">
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{}}
      >
        <Grid
          item
          xs={12}
          sm={toggleButtonsExists ? 12 : 6}
          md={6}
          lg={4}
          xl={3}
          className="marginBtm"
        >
          {!searchFilterExist &&
            <div className="searchFilter">
              <InputComponent
                size="large"
                placeholder="Search"
                onChange={(event) => setSearchKeyword(event.target.value)}
                suffix={<IconSearch />}
                className=""
              />
              <span className="filterBtn">{filter_v1}</span>
            </div>
          }
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          lg={4}
          xl={6}
          className={`marginBtm ${!toggleButtonsExists ? "d-none" : ""}`}
        >
          <div className="toggleBtn">
            {toggleButtonsExists && (
              <ToggleButtons
                defaultText={toggleDefaultBtnText}
                savedText={toggleSavedBtnText}
                selectedValue={selectedToggleValue}
                onChange={toggleButtonListener}
              />
            )}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={toggleButtonsExists ? 8 : 6}
          md={toggleButtonsExists ? 12 : 6}
          lg={toggleButtonsExists ? 4 : 8}
          xl={toggleButtonsExists ? 3 : 9}
          className="btnGrpParent marginBtm"
        >
          <div className="cmmBtm">
            {!girdTableBtnExist &&
              <>
                <Button
                  onClick={() => setView("grid")}
                  size="large"
                  className={`gridBtn ${view === "grid" ? "active" : ""}`}
                >
                  {grids_v1}
                </Button>
                <Button
                  onClick={() => setView("table")}
                  size="large"
                  className={`gridBtn ${view === "grid" ? "" : "active"}`}
                >
                  {tables_v1}
                </Button>
                <MainButton
                  clickHandler={addBtnClickHandler}
                  btnText={addBtnText}
                  icon={<IconCirclePlus />}
                />
              </>
            }
          </div>
        </Grid>
      </Grid>

      <Col
        md={24}
        className={`${view === "grid" ? "gridParent" : "tableParent"}`}
      >
        {view === "grid" && (
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ margin: "30px 0" }}
            className="cardParent"
          >
            {customTabExists && (
              <Grid item xs={12} md={12} lg={12} xl={12} className="tabParent">
                <CustomTab tabArray={gridTabArray ? gridTabArray : tabVal} />
              </Grid>
            )}
            {loadingState
        ? [...Array(8).keys()].map((e,index) => {
            return (
              <>
              <Grid
              item
              xs={12}
              md={6}
              lg={4}
              xl={3}
              key={index}
              className="itemParent"
            >
                <Card sx={{ maxWidth: 345, m: 2 }}>
                    <Skeleton
                      sx={{ height: 190 }}
                      animation="wave"
                      variant="rectangular"
                    />
                  <CardContent>
                      <React.Fragment>
                        <Skeleton
                          animation="wave"
                          height={10}
                          style={{ marginBottom: 6 }}
                        />
                        {/* <Skeleton animation="wave" height={10} width="80%" /> */}
                      </React.Fragment>
                  </CardContent>
                </Card>
                </Grid>
              </>
            );
          }) : filteredDataSource.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              xl={3}
              key={index}
              className="itemParent"
            >
              <CardItem
                height={item?.height}
                imgOverflowIcn={imgOverflowIcn}
                item={item}
                loadingState={loadingState}
                gridItem={gridItem}
                optionArray={optionArray}
                switchClickHandler={switchClickHandler}
                checkboxClickHandler={checkboxClickHandler}
                showActions={selectedToggleValue !== "default"}
              />
            </Grid>
          ))}
          </Grid>
        )}
        {view === "table" && (
          <DataTable
            columns={[
              ...headers,
              {
                title: "Actions",
                render: (cellValue, rowValue) => (
                  <ActionComponent optionArray={optionArray} item={rowValue} />
                ),
                align: "center",
              },
            ]}
            dataSource={filteredDataSource}
            rowKey={rowKey}
          />
        )}
      </Col>
    </Row>
  );
}

function ToggleButtons({
  onChange = () => { },
  defaultText = "Default Templates",
  savedText = "Saved Templates",
  selectedValue = "saved",
}) {
  let [value, setValue] = useState(selectedValue);

  let changeHandler = (val) => {
    onChange(val);
    setValue(val);
  };
  let buttonGenerator = [
    { text: defaultText, key: "default" },
    { text: savedText, key: "saved" },
  ];
  return (
    <>
      <div
        className="parent"
        style={{
          width: "auto",
          display: "flex",
          border: "1px solid rgba(0,0,0, .1)",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {buttonGenerator.map((button) => (
          <button
            key={button.key}
            onClick={() => changeHandler(button.key)}
            className="border_none"
            style={{
              backgroundColor: value === button.key ? "#f4364c" : "white",
              color: value === button.key ? "white" : "#333333",
              borderRadius: "10px",
              padding: "5px 10px",
              font: "normal normal bold 18px/23px helveticaNeue",
              letterSpacing: "0px",
              // transition: ".5s",
            }}
          >
            {button.text}
          </button>
        ))}
      </div>
    </>
  );
}

export function ActionComponent({ item, optionArray }) {
  let styleObj = {
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: "#333333",
    // font: "normal normal normal 14px/16px helveticaNeue",
  };
  //   let optionArray = [
  //     {
  //       name: "Edit",
  //       clickHandler: editClickHandler,
  //     },
  //     {
  //       name: "Duplicate",
  //       clickHandler: duplicateClickHandler,
  //     },
  //     {
  //       name: "Delete",
  //       clickHandler: deleteClickHandler,
  //     },
  //   ];

  return (
    <>
      <Popover
        content={
          <div>
            {optionArray.map((e, index) => (
              <p
                key={index}
                onClick={() => e.clickHandler(item)}
                style={styleObj}
              >
                {e.icon}&nbsp;{e.name}
              </p>
            ))}
          </div>
        }
      >
        {dots3_v1}
      </Popover>
    </>
  );
}
