/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import { ADD_TEMPLATE, SEL_TEMPLATE, TEMPLATES } from "../../routes/slug";
import img0 from './images/Screenshot_4.png';

export default function Templates({ defaultTemplate = false, createOpt, girdTableBtnExist, searchFilterExist }) {
  const navigate = useNavigate();
  const [toggleValue, setToggleValue] = useState(
    defaultTemplate ? "default" : "saved"
  );
  const headers = [
    { title: "S.No", dataIndex: "serialNo" },
    { title: "Template Name", dataIndex: "templateName" },
    { title: "Template Category", dataIndex: "templateCategory" },
    { title: "Scheduled Content", dataIndex: "scheduledContent", type: "date" },
    {
      title: "Media Type",
      dataIndex: "mediaType",
      render: (cellValue) => (
        <img src={cellValue} alt="" width={"30px"} height="30px" />
      ),
    },
  ];



  const A = [
    {
      serialNo: "1",
      templateName: "Screen One",
      templateCategory: "325456987511",
      scheduledContent: new Date(),
      mediaType: "https://variety.com/wp-content/uploads/2020/04/hbo-max.png",
    },
    {
      serialNo: "2",
      templateName: "Screen Two ",
      templateCategory: "325456987512",
      scheduledContent: new Date(),
      mediaType: "https://variety.com/wp-content/uploads/2020/04/hbo-max.png",
    },
    {
      serialNo: "3",
      templateName: "Screen Three ",
      templateCategory: "325456987513",
      scheduledContent: new Date(),
      mediaType: "https://variety.com/wp-content/uploads/2020/04/hbo-max.png",
    },
  ];
  const B = [
    {
      serialNo: "0",
      templateName: "Create Custom",
      templateCategory: "325456987511",
      scheduledContent: new Date(),
      mediaType: img0,
    },
    ...A
  ];
  const dataSource = createOpt ? B : A;


  let tabVal = [
    {
      name: "All",
      key: "all",
    },
    {
      name: "Food",
      key: "food",
    },
    {
      name: "Covid",
      key: "covid",
    },
    {
      name: "Health",
      key: "health",
    },
    {
      name: "Lifestyle",
      key: "lifestyle",
    },
    {
      name: "Travel",
      key: "travel",
    },
    {
      name: "Shopping",
      key: "shopping",
    },
    {
      name: "Media",
      key: "media",
    },
  ];

  const addTemplate = (e) => {
    navigate(ADD_TEMPLATE);
  };
  const toggleBtn = (item) => {
    if (toggleValue !== item) {
      if (item === "default") {
        navigate(SEL_TEMPLATE);
      }
      if (item === "saved") {
        navigate(TEMPLATES);
      }
    }
  };

  return (
    <div>
      <CommonDataTable
        addBtnText="Add Template"
        addBtnClickHandler={addTemplate}
        headers={headers}
        dataSource={dataSource}
        gridTabArray={tabVal}
        rowKey="serialNo"
        gridItem={{
          img: "mediaType",
          name: "templateName",
          checkbox: true,
        }}
        girdTableBtnExist={girdTableBtnExist}
        searchFilterExist={searchFilterExist}
        customTabExists
        toggleButtonsExists
        selectedToggleValue={toggleValue}
        toggleButtonListener={toggleBtn}
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
