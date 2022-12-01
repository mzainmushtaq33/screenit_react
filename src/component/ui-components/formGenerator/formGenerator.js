import { Col, Row } from "antd";
import React from "react";
import InputComponent from "../../../component/ui-components/formComponents/input";
import SelectComponent from "../../../component/ui-components/formComponents/select";
import MainButton from "../../../component/ui-components/main-buttons/main-button";
import CheckboxComponent from "../formComponents/checkbox";
import { FormControl, FormHelperText } from "@mui/material";

export default function FormGenerator({ formData = [],setFieldValue,handleChange,touched,errors,values }) {
  // console.log('values :>> ', values);
  
  return (
    <div>
      
              <Row gutter={[24, 24]}>
        {formData.map((component, index) => (
          <Col
            key={component.key}
            xxl={component.xxl}
            xl={component.xl}
            lg={component.lg}
            md={component.md}
            sm={component.sm}
            xs={component.xs}
            span={component.span ? component.span : 24}
          >
            {component.type === "input" ? (
              <FormControl
              fullWidth
              error={Boolean(touched[component.key] && errors[component.key])}
              sx={{}}
            >
              <InputComponent
                label={component.label}
                required={component.required}
                placeholder={component.placeholder}
                handleChange={handleChange}
                name= {component.key}
                value={values[component.key]}
              />
              {touched[component.key] && errors[component.key] && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors[component.key]}
                      </FormHelperText>
                    )}
                  </FormControl>
            ) : component.type === "select" ? (
              <FormControl
              fullWidth
              error={Boolean(touched[component.key] && errors[component.key])}
              sx={{}}
            >
              <SelectComponent
                label={component.label}
                required={component.required}
                items={component.items}
                itemText={component.itemText}
                itemValue={component.itemValue}
                placeholder={component.placeholder}
                handleChange={handleChange}
                name={component.key}
                value= {values[component.key]}
                setFieldValue={setFieldValue}
              />
              {touched[component.key] && errors[component.key] && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors[component.key]}
                      </FormHelperText>
                    )}
                  </FormControl>
            ) : component.type === "checkbox" ? (
              <CheckboxComponent
                label={component.label}
                required={component.required}
              />
            ) : null}
          </Col>
        ))}
        <Col md={24}>
          <div className=" flex justify_content_end ">
            <MainButton btnText="Save" type="submit"/>
          </div>
        </Col>
      </Row>
           
    </div>
  );
}

/* --------------------------- */
/* ------demo data ----------- */
/* --------------------------- */

// let items = [
//   {
//     name: "One",
//     id: "1",
//   },
//   {
//     name: "Two",
//     id: "2",
//   },
// ];

// let countries = [
//   "Bangladesh",
//   "Bhutan",
//   "India",
//   "Maldive",
//   "Nepal",
//   "Pakistan",
//   "Sri Lanka",
// ];

// let cities = [
//   "Dhaka",
//   "Kathmundu",
//   "Dilhi",
//   "Washington DC",
//   "London",
//   "Karachi",
//   "Mosco",
// ];

// let formGenerator = [
//   {
//     type: "input",
//     label: "Contact Name",
//     key: "contact",
//     md: 8,
//     required: true,
//     placeholder: "Admin",
//   },

//   {
//     type: "select",
//     label: "Country",
//     key: "country",
//     md: 8,
//     required: true,
//     items: countries,
//     placeholder: "India",
//   },

//   {
//     type: "select",
//     label: "City",
//     key: "city",
//     md: 8,
//     required: true,
//     items: items,
//     itemText: "name",
//     itemValue: "id"
//     placeholder: "Chenai",
//   },

//   {
//     type: "input",
//     label: "Address Two",
//     key: "addressTwo",
//     md: 8,
//     placeholder: "Address",
//   },
//   {
//     type: "checkbox",
//     label: "Administrator",
//     key: "administrator",
//     md: 8,
//   },
// ];
