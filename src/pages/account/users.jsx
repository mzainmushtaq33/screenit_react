import React, { useState } from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import CheckboxComponent from "../../component/ui-components/formComponents/checkbox";
import FormGenerator from "../../component/ui-components/formGenerator/formGenerator";
import MainModal from "../../component/ui-components/main-modals/main-modal";

export default function Users(props) {
  let [showModal, setShowModal] = useState(false);
  let addUser = () => {
    setShowModal(true);
  };

  const headers = [
    { title: "S.No", dataIndex: "serialNo", align: 'center' },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      render: (cellValue) => <CheckboxComponent checked={cellValue} />,
      align: "center",
    },
    { title: "User Role", dataIndex: "userRole" },
    { title: "Subscription", dataIndex: "subscriptionType" },
  ];

  const dataSource = [
    {
      serialNo: "1",
      name: "Item One",
      email: "Item One Description",
      isAdmin: true,
      userRole: "Content Writer",
      subscriptionType: "Standard",
    },
    {
      serialNo: "2",
      name: "Item Two ",
      email: "Item Two Description",
      isAdmin: true,
      userRole: "Content Manager",
      subscriptionType: "Standard",
    },
    {
      serialNo: "3",
      name: "Item Three ",
      email: "Item Three Description",
      isAdmin: false,
      userRole: "IT Manager",
      subscriptionType: "Standard",
    },
  ];
  return (
    <div>
      <CommonDataTable
        addBtnText="Add User"
        headers={headers}
        dataSource={dataSource}
        rowKey="serialNo"
        gridItem={{
          name: "name",
          secondName: "email",
          thirdName: "userRole",
        }}
        addBtnClickHandler={addUser}
        editClickHandler={(item) => console.log("edit===>", item)}
        deleteClickHandler={(item) => console.log("delete===>", item)}
        duplicateClickHandler={(item) => console.log("duplicate===>", item)}
      />

      <MainModal
        open={showModal}
        onCloseHandler={() => setShowModal(false)}
        titleText="User Details"
      >
        <div style={{ zIndex: 1000 }}>
          <FormGenerator formData={formData} />
        </div>
      </MainModal>
    </div>
  );
}

let formData = [
  {
    type: "input",
    label: "First Name",
    key: "firstName",
    md: 12,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Last Name",
    key: "lastName",
    md: 12,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Email",
    key: "email",
    md: 12,
    required: true,
    placeholder: "admin@screeniton.com",
  },
  {
    type: "input",
    label: "Password",
    key: "password",
    md: 12,
    required: true,
    placeholder: "*********",
  },
  {
    type: "checkbox",
    label: "Administrator",
    key: "administrator",
    md: 12,
    required: true,
  },
  {
    type: "checkbox",
    label: "Manage Subscription",
    key: "subscription",
    md: 12,
    required: true,
  },
  {
    type: "select",
    label: "Select Role",
    key: "role",
    md: 12,
    required: true,
    placeholder: "IT Manager",
    items: ["IT Manager", "Admin", "Content Manager"],
  },
];
