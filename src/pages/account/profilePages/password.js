import React from "react";
import { Col, Input, Row } from "antd";
import LabelComponent from "../../../component/ui-components/formComponents/label";
import MainButton from "../../../component/ui-components/main-buttons/main-button";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormControl, FormHelperText } from "@mui/material";
import { useChangePasswordMutation } from "../../../reduxToolKit/authentication/authService";
import { ToastMessage } from "../../../utils/toastMessage/ToastMessage";
import { useNavigate } from "react-router-dom";
import * as slug from "../../../routes/slug.js";

export default function Password(props) {
  const [changePasswordRequest] = useChangePasswordMutation();
  const navigate = useNavigate();
  const handleSubmitValue = async (e, { setFieldError }) => {
    const response = await changePasswordRequest(e);
    ToastMessage(
      response?.data?.success || response?.error?.data?.success,
      response?.data?.message || response?.error?.data?.message
    );
    if (response?.data?.success) {
      localStorage.removeItem("screenItOnInfo");
      navigate(`${slug.LOGIN}`);
    } else {
      if (response?.error?.data?.data?.error) {
        ToastMessage(
          response?.error?.data?.success,
          response?.error?.data?.data?.error
        );
      } else {
        setFieldError(
          Object.keys(response?.error?.data?.data)?.[0],
          Object.values(response?.error?.data?.data)?.[0]
        );
        setFieldError(
          Object.keys(response?.error?.data?.data)?.[1],
          Object.values(response?.error?.data?.data)?.[1]
        );
        setFieldError(
          Object.keys(response?.error?.data?.data)?.[2],
          Object.values(response?.error?.data?.data)?.[2]
        );
      }
    }
  };
  return (
    <div>
      {/* <FormGenerator formData={formData} /> */}
      <Formik
        initialValues={{
          old_password: "",
          new_password: "",
          password_confirm: "",
        }}
        validationSchema={Yup.object().shape({
          old_password: Yup.string()
            .max(255)
            .required("Old Password is required"),
          new_password: Yup.string()
            .max(255)
            .required("New Password is required"),
          password_confirm: Yup.string()
            .max(255)
            .required("Confirm Password is required"),
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
            <Row gutter={[24, 24]}>
              <Col md={8}>
                <div className="input_parent">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.old_password && errors.old_password)}
                    sx={{}}
                  >
                    <LabelComponent
                      // className={`${labelStyle}`}
                      label="Old Password"
                      required={true}
                    />
                    <Input
                      placeholder="Old Password"
                      size="large"
                      className={`form_component`}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="old_password"
                      value={values.old_password}
                    />
                    {touched.old_password && errors.old_password && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors.old_password}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>
              </Col>
              <Col md={8}>
                <div className="input_parent">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.new_password && errors.new_password)}
                    sx={{}}
                  >
                    <LabelComponent
                      // className={`${labelStyle}`}
                      label="New Password"
                      required={true}
                    />
                    <Input
                      placeholder="New Password"
                      size="large"
                      className={`form_component`}
                      name="new_password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.new_password}
                    />
                    {touched.new_password && errors.new_password && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors.new_password}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>
              </Col>
              <Col md={8}>
                <div className="input_parent">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.new_password && errors.new_password)}
                    sx={{}}
                  >
                    <LabelComponent
                      // className={`${labelStyle}`}
                      label="Confirm Password"
                      required={true}
                    />
                    <Input
                      placeholder="Confirm Password"
                      size="large"
                      className={`form_component`}
                      name="password_confirm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password_confirm}
                    />
                    {touched.password_confirm && errors.password_confirm && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors.password_confirm}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>
              </Col>

              <Col md={24}>
                <div className=" flex justify_content_end ">
                  <MainButton btnText="Save" type="submit" />
                </div>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}

let formData = [
  {
    type: "input",
    label: "Old Password",
    key: "oldPassword",
    md: 8,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "New Password",
    key: "newPassword",
    md: 8,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Verify Password",
    key: "verifyPassword",
    md: 8,
    required: true,
    placeholder: "admin@screeniton.com",
  },
];
