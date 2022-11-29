import { Col, Row } from "antd";
import React from "react";
import { ActionComponent } from "../../../component/ui-components/commonDataTable/commonDataTable";
import DataTable from "../../../component/ui-components/main-table/main-table";

export default function Invoices() {
  function editClickHandler() {}
  function duplicateClickHandler() {}
  function deleteClickHandler() {}

  let optionArray = [
    {
      name: "Edit",
      clickHandler: editClickHandler,
    },
    {
      name: "Duplicate",
      clickHandler: duplicateClickHandler,
    },
    {
      name: "Delete",
      clickHandler: deleteClickHandler,
    },
  ];

  const headers = [
    { title: "S.No", dataIndex: "serialNo" },
    { title: "Invoice ID", dataIndex: "invoiceId" },
    { title: "Date/Time", dataIndex: "date", type: "date" },
    { title: "Card Number", dataIndex: "cardNumber" },
    { title: "Charge", dataIndex: "charge" },
    {
      title: "Actions",
      render: (cellObject, rowObject) => (
        <ActionComponent item={rowObject} optionArray={optionArray} />
      ),
      align: "center",
    },
  ];

  return (
    <>
      <Row>
        <Col md={24}>
          <DataTable
            columns={headers}
            dataSource={dataSource}
            rowKey="serialNo"
          />
        </Col>
      </Row>
    </>
  );
}

const dataSource = [
  {
    serialNo: "1",
    invoiceId: "8176546",
    date: new Date().toString(),
    cardNumber: "XXXXXXXXXXX",
    charge: "$4.99",
    mediaType: "",
  },
  {
    serialNo: "2",
    invoiceId: "8176875",
    date: new Date().toString(),
    cardNumber: "XXXXXXXXXXX",
    charge: "$4.99",
    mediaType: "",
  },
  {
    serialNo: "3",
    invoiceId: "8176875",
    date: new Date().toString(),
    cardNumber: "XXXXXXXXXXX",
    charge: "$4.99",
    mediaType: "",
  },
  {
    serialNo: "4",
    invoiceId: "8176875",
    date: new Date().toString(),
    cardNumber: "XXXXXXXXXXX",
    charge: "$4.99",
    mediaType: "",
  },
];
