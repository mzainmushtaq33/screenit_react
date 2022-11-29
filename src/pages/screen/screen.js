import React from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import SwitchComponent from "../../component/ui-components/formComponents/switch";
import defImg from '../../services/images/New folder (2)/Screenshot_4.png';
import { useNavigate } from "react-router-dom";
import { ADD_SCREEN } from "../../routes/slug.js";

export default function Screens() {
  const navigate = useNavigate();

  const headers = [
    { title: "S.No", dataIndex: "serialNo" },
    { title: "Scree Name", dataIndex: "screenName" },
    { title: "Scree ID", dataIndex: "screenId" },
    { title: "Default Content", dataIndex: "defaultContent" },
    { title: "Scheduled Content", dataIndex: "scheduledContent" },
    {
      title: "Status",
      dataIndex: "status",
      render: (cellValue, rowValue) => <SwitchComponent value={cellValue} />,
    },
  ];

  const dataSource = [
    {
      serialNo: "1",
      screenName: "Screen One",
      screenId: "325456987511",
      scheduledContent: "NIL",
      thumbnail: defImg,
      defaultContent: "Landscape",
      status: true,
    },
    {
      serialNo: "2",
      screenName: "Screen Two ",
      screenId: "325456987512",
      scheduledContent: "NIL",
      thumbnail: defImg,
      defaultContent: "Landscape",
      status: false,
    },
    {
      serialNo: "3",
      screenName: "Screen Three ",
      screenId: "325456987513",
      scheduledContent: "NIL",
      thumbnail: defImg,
      defaultContent: "Landscape",
      status: true,
    },
  ];
  const adScreenHandler = e => {
    navigate(ADD_SCREEN);
  }
  return (
    <div>
      <CommonDataTable
        addBtnText="Add Screen"
        addBtnClickHandler={adScreenHandler}
        headers={headers}
        dataSource={dataSource}
        rowKey="serialNo"
        gridItem={{
          img: "thumbnail",
          name: "screenName",
          secondName: "screenId",
          switch: "status",
        }}
        editClickHandler={(item) => console.log("edit===>", item)}
        deleteClickHandler={(item) => console.log("delete===>", item)}
        duplicateClickHandler={(item) => console.log("duplicate===>", item)}
        switchClickHandler={(item, value) =>
          console.log("switch===>", item, value)
        }
      />
    </div>
  );
}
