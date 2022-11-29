
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";

import SwitchComponent from "../../component/ui-components/formComponents/switch";
import MainModal from "../../component/ui-components/main-modals/main-modal";
import { ADD_SCHEDULES } from "../../routes/slug";
import { dateConverter } from "../../utils/utilityFunctions/dateConverter";

export default function Schedules() {
  let [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const headers = [
    { title: "S.No", dataIndex: "serialNo", align: 'center' },
    { title: "Schedule Name", dataIndex: "scheduleName" },
    { title: "Schedule Desc", dataIndex: "scheduleDescription" },
    { title: "Schedule Content", dataIndex: "scheduledContent", type: "date" },
    {
      title: "Status",
      dataIndex: "status",
      render: (cellValue, rowValue) => <SwitchComponent value={cellValue} />,
    },
  ];
  const addSchedules = e => {
    navigate(ADD_SCHEDULES);
  }
  return (
    <>
      <div>
        <CommonDataTable
          addBtnText="Add Schedule"
          addBtnClickHandler={addSchedules}
          headers={headers}
          dataSource={dataSource}
          rowKey="serialNo"
          gridItem={{
            name: "scheduleName",
            secondName: "scheduleDescription",
            thirdName: "scheduledContent",
          }}
          editClickHandler={(item) => console.log("edit===>", item)}
          deleteClickHandler={(item) => console.log("delete===>", item)}
          duplicateClickHandler={(item) => console.log("duplicate===>", item)}
          switchClickHandler={(item, value) =>
            console.log("switch===>", item, value)
          }
        />
      </div>
      <MainModal
        open={showModal}
        onCloseHandler={() => setShowModal(false)}
        titleText={"Add Schedule"}
      >

      </MainModal>
    </>
  );
}
const dataSource = [
  {
    serialNo: "1",
    scheduleName: "Schedule 1",
    scheduleDescription: "Sample Content",
    scheduledContent: dateConverter(new Date()),
    thumbnail: "https://variety.com/wp-content/uploads/2020/04/hbo-max.png",
    status: true,
  },
  {
    serialNo: "2",
    scheduleName: "Schedule 2",
    scheduleDescription: "Sample Content",
    scheduledContent: dateConverter(new Date()),
    thumbnail:
      "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
    status: false,
  },
  {
    serialNo: "3",
    scheduleName: "Schedule 3",
    scheduleDescription: "Sample Content",
    scheduledContent: dateConverter(new Date()),
    thumbnail:
      "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png",
    status: true,
  },
];
