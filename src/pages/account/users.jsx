import React, { useState } from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import CheckboxComponent from "../../component/ui-components/formComponents/checkbox";
import FormGenerator from "../../component/ui-components/formGenerator/formGenerator";
import MainModal from "../../component/ui-components/main-modals/main-modal";
import { Formik } from "formik";
import * as Yup from "yup";

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
  const handleSubmitValue = async (e,{ resetForm }) => {
    // const response = await userSendDataRequest(e);
    // ToastMessage(
    //   response?.data?.success || response?.error?.data?.success,
    //   response?.data?.message || response?.error?.data?.message
    // );
    // if(response?.data?.success){
    //   // resetForm()
    // }
  };
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
        <Formik
        initialValues={{
          first_name: '' ,
          last_name: '',
          email: '',
          password: '',
          state: '',
          city: '',
          address_one: '',
          address_two: '',
          postal_code: '',
          phone_no: '',
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().max(255).required("First name is required"),
          last_name: Yup.string().max(255).required("Last name is required"),
          email: Yup.string().max(255).required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
          state: Yup.string().max(255).required("State is required"),
          city: Yup.string("City is required")
            .max(255)
            .required("City is required"),
          address_one: Yup.string()
            .max(255)
            .required("Address one is required"),
          address_two: Yup.string()
            .max(255)
            .required("Address two is required"),
          postal_code: Yup.string()
            .max(255)
            .required("Postal code is required"),
          phone_no: Yup.string().max(255).required("Phone no is required"),
        })}
        onSubmit={handleSubmitValue}
        className=""
      >
        {/* isSubmitting */}
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
          <FormGenerator formData={formData} handleChange={handleChange}
              // setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              values={values}/>
          </form>
        )}
      </Formik>
        </div>
      </MainModal>
    </div>
  );
}

let formData = [
  {
    type: "input",
    label: "First Name",
    key: "first_name",
    md: 12,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Last Name",
    key: "last_name",
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
