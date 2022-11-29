/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import { SEL_WIDGETS, WIDGETS } from "../../routes/slug";
import img01 from './img/01.png';
import img02 from './img/02.png';
import img03 from './img/04.png';

export default function Widgets({ defaultTemplate = false, girdTableBtnExist, searchFilterExist, imgOverflowIcn }) {
  const navigate = useNavigate();
  const [toggleValue, setToggleValue] = useState(
    defaultTemplate ? "default" : "saved"
  );
  const headers = [
    { title: "S.No", dataIndex: "serialNo" },
    { title: "Widget Name", dataIndex: "widgetName" },
    { title: "Widget Category", dataIndex: "widgetCategory" },
    { title: "Scheduled Content", dataIndex: "scheduledContent", type: "date" },
    {
      title: "Widget Type",
      dataIndex: "widgetType",
    },
  ];

  const dataSource = [
    {
      serialNo: "1",
      widgetName: "widget One",
      widgetCategory: "325456987511",
      scheduledContent: new Date(),
      thumbnail: img01,
      widgetType: "Widget Type One",
    },
    {
      serialNo: "2",
      widgetName: "widget Two ",
      widgetCategory: "325456987512",
      scheduledContent: new Date(),
      thumbnail: img02,
      widgetType: "Widget Type Two",
    },
    {
      serialNo: "3",
      widgetName: "widget Three ",
      widgetCategory: "325456987513",
      scheduledContent: new Date(),
      thumbnail: img03,
      widgetType: "Widget Type Three",
    },
  ];
  let tabVal = [
    {
      name: "All",
      key: "all",
    },
    {
      name: "Social",
      key: "social",
    },
    {
      name: "General",
      key: "general",
    },
    {
      name: "Time",
      key: "time",
    },
    {
      name: "Calender",
      key: "calender",
    },
    {
      name: "Weather",
      key: "weather",
    },
  ];

  const toggleBtn = (item) => {
    if (toggleValue !== item) {
      if (item === "default") {
        navigate(SEL_WIDGETS);
      }
      if (item === "saved") {
        navigate(WIDGETS);
      }
    }
  };

  return (
    <div>
      <CommonDataTable
        addBtnText="Add Widgets"
        //  addBtnClickHandler={adScreenHandler}
        gridTabArray={tabVal}
        headers={headers}
        dataSource={dataSource}
        rowKey="serialNo"
        gridItem={{
          img: "thumbnail",
          name: "widgetName",
          checkbox: true,
        }}
        customTabExists
        toggleButtonsExists
        girdTableBtnExist={girdTableBtnExist}
        searchFilterExist={searchFilterExist}
        imgOverflowIcn={true}
        selectedToggleValue={toggleValue}
        toggleButtonListener={toggleBtn}
        toggleDefaultBtnText="Default Widgets"
        toggleSavedBtnText={"Saved Widgets"}
        editClickHandler={(item) => console.log("edit===>", item)}
        deleteClickHandler={(item) => console.log("delete===>", item)}
        duplicateClickHandler={(item) => console.log("duplicate===>", item)}
        switchClickHandler={(item, value) =>
          console.log("switch===>", item, value)
        }
        checkboxClickHandler={(item, value) =>
          console.log("checkbox===>", item, value)
        }
      />
    </div>
  );
}
