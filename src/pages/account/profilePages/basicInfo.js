import React from "react";
import FormGenerator from "../../../component/ui-components/formGenerator/formGenerator";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  useUserEditMutation,
  useGetUserInfoQuery,
} from "../../../reduxToolKit/userProfile/userProfileService";
import { ToastMessage } from "../../../utils/toastMessage/ToastMessage";

export default function BasicInfo(props) {
  const [userSendDataRequest] = useUserEditMutation();
  const getUserInfo = useGetUserInfoQuery();
  const { data } = getUserInfo;
  const handleSubmitValue = async (e,{ resetForm }) => {
    const response = await userSendDataRequest(e);
    ToastMessage(
      response?.data?.success || response?.error?.data?.success,
      response?.data?.message || response?.error?.data?.message
    );
    if(response?.data?.success){
      // resetForm()
    }
  };
  return (
    <div>
     {data &&  <Formik
        initialValues={{
          first_name: data?.data?.first_name ,
          last_name: data?.data?.last_name,
          email: data?.data?.email,
          country: data?.data?.country,
          state: data?.data?.state,
          city: data?.data?.city,
          address_one: data?.data?.address_one,
          address_two: data?.data?.address_two,
          postal_code: data?.data?.postal_code,
          phone_no: data?.data?.phone_no,
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string().max(255).required("First name is required"),
          last_name: Yup.string().max(255).required("Last name is required"),
          email: Yup.string().max(255).required("Email is required"),
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
          // console.log('touched :>> ', touched,values),
          <form noValidate onSubmit={handleSubmit}>
          <FormGenerator
              formData={formData}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              values={values}
            />
          </form>
        )}
      </Formik>}
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
let formData = [
  {
    type: "input",
    label: "First Name",
    key: "first_name",
    md: 8,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Last Name",
    key: "last_name",
    md: 8,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Email",
    key: "email",
    md: 8,
    required: true,
    placeholder: "admin@screeniton.com",
  },

  {
    type: "input",
    label: "Country",
    key: "country",
    md: 8,
    // items: countries,
    placeholder: "country",
  },
  {
    type: "input",
    label: "State",
    key: "state",
    md: 8,
    // items: cities,
    placeholder: "state",
  },
  {
    type: "input",
    label: "City",
    key: "city",
    md: 8,
    // items: items,
    placeholder: "city",
  },

  {
    type: "input",
    label: "Address One",
    key: "address_one",
    md: 8,
    placeholder: "Address",
  },
  {
    type: "input",
    label: "Address Two",
    key: "address_two",
    md: 8,
    placeholder: "Address",
  },
  {
    type: "input",
    label: "Postal Code",
    key: "postal_code",
    md: 8,
    placeholder: "Code",
  },
  {
    type: "input",
    label: "Mobile Number",
    key: "phone_no",
    md: 8,
    required: true,
    placeholder: "025874622",
  },
];
