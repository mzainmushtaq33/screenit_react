import { Col, Row } from "antd";
import React from "react";
import CheckboxComponent from "../../../component/ui-components/formComponents/checkbox";
import MainButton from "../../../component/ui-components/main-buttons/main-button";
import "antd/lib/select/style/index.css";
import FormGenerator from "../../../component/ui-components/formGenerator/formGenerator";
export default function Address({ containShippingAddress }) {
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
          <FormGenerator formData={formGenerator} />
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
    key: "contact",
    lg: 8,
    md: 12,
    sm: 24,

    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Mobile Number",
    key: "phone",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    placeholder: "025874622",
  },
  {
    type: "input",
    label: "Company Name",
    key: "companyName",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    placeholder: "Screeniton",
  },
  {
    type: "select",
    label: "Country",
    key: "country",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    items: countries,
    placeholder: "India",
  },
  {
    type: "select",
    label: "State",
    key: "state",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    items: cities,
    placeholder: "Tamilnadu",
  },
  {
    type: "select",
    label: "City",
    key: "city",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    items: items,
    placeholder: "Chenai",
  },
  {
    type: "select",
    label: "Postal Code",
    key: "postalCode",
    lg: 8,
    md: 12,
    sm: 24,
    required: true,
    items: items,
    placeholder: "6541238",
  },
  {
    type: "input",
    label: "Address One",
    key: "addressOne",
    lg: 8,
    md: 12,
    sm: 24,
    placeholder: "Address",
  },
  {
    type: "input",
    label: "Address Two",
    key: "addressTwo",
    lg: 8,
    md: 12,
    sm: 24,
    placeholder: "Address",
  },
];
