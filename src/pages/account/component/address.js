import { Col, Row } from "antd";
import React from "react";
import CheckboxComponent from "../../../component/ui-components/formComponents/checkbox";
import MainButton from "../../../component/ui-components/main-buttons/main-button";
import "antd/lib/select/style/index.css";
import FormGenerator from "../../../component/ui-components/formGenerator/formGenerator";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useUserAddressEditMutation } from "../../../reduxToolKit/userProfile/userProfileService";
import { ToastMessage } from "../../../utils/toastMessage/ToastMessage";



export default function Address({ containShippingAddress,initialValues,data }) {
//  const data =  useSelector(state => state.userProfile)
const [userAddressEditRequest] = useUserAddressEditMutation();
//   const { data } = getUserInfo;
  const handleSubmitValue = async (e,{ resetForm }) => {
    if(containShippingAddress ==="billing address") {
      const data ={
        ...e,
        address_type: 1,
      }
      const response = await userAddressEditRequest(data)
      ToastMessage(
        response?.data?.success || response?.error?.data?.success,
        response?.data?.message || response?.error?.data?.message
      );
    }else {
      const data ={
        ...e,
        address_type: 2,
      }
      const response = await userAddressEditRequest(data)
      ToastMessage(
        response?.data?.success || response?.error?.data?.success,
        response?.data?.message || response?.error?.data?.message
      );
    }
    // const response = await userSendDataRequest(e);
    
    // if(response?.data?.success){
    //   // resetForm()
    // }
  };
  return (
    <div className=" ">
      <Row gutter={[24, 24]}>
        {containShippingAddress && (
          <Col md={24}>
            <Row>
              <Col md={12}>
                <CheckboxComponent label="Same as billing address" />
              </Col>
              <Col md={12} className="justify_content_end ">
                <MainButton btnText="Delete" variant="outlinedBtn" />
              </Col>
            </Row>
          </Col>
        )}

        <Col md={24}>
          {/* <FormGenerator formData={formGenerator} /> */}
          {data && <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          contact_name: Yup.string().max(255).required("Contact name is required"),
          company_name: Yup.string().max(255).required("Company name is required"),
          country: Yup.string().max(255).required("Country is required"),
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
          setFieldValue,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
          <FormGenerator
              formData={formGenerator}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              values={values}
            />
          </form>
        )}
      </Formik>}
        </Col>
      </Row>
    </div>
  );
}

let items = [1, 2, 3, 4];
let countries = [
  "Bangladesh",
  "Bhutan",
  "India",
  "Maldive",
  "Nepal",
  "Pakistan",
  "Sri Lanka",
];
let cities = [
  "Dhaka",
  "Kathmundu",
  "Dilhi",
  "Washington DC",
  "London",
  "Karachi",
  "Mosco",
];
let formGenerator = [
  {
    type: "input",
    label: "Contact Name",
    key: "contact_name",
    lg: 8,
    md: 12,
    sm: 24,

    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Mobile Number",
    key: "phone_no",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    placeholder: "025874622",
  },
  {
    type: "input",
    label: "Company Name",
    key: "company_name",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    placeholder: "Screeniton",
  },
  {
    type: "input",
    label: "Country",
    key: "country",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    // items: countries,
    placeholder: "India",
  },
  {
    type: "input",
    label: "State",
    key: "state",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    // items: cities,
    placeholder: "Tamilnadu",
  },
  {
    type: "input",
    label: "City",
    key: "city",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    // items: items,
    placeholder: "Chenai",
  },
  {
    type: "input",
    label: "Postal Code",
    key: "postal_code",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    // items: items,
    placeholder: "6541238",
  },
  {
    type: "input",
    label: "Address One",
    key: "address_one",
    lg: 8,
    md: 12,
    sm: 24,
    placeholder: "Address",
  },
  {
    type: "input",
    label: "Address Two",
    key: "address_two",
    lg: 8,
    md: 12,
    sm: 24,
    placeholder: "Address",
  },
];
