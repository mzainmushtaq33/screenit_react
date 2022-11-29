import React from "react";
import FormGenerator from "../../../component/ui-components/formGenerator/formGenerator";

export default function BasicInfo(props) {
  return (
    <div>
      <FormGenerator formData={formData} />
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
    key: "firstName",
    md: 8,
    required: true,
    placeholder: "Admin",
  },
  {
    type: "input",
    label: "Last Name",
    key: "lastName",
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
    type: "select",
    label: "Country",
    key: "country",
    md: 8,
    items: countries,
    placeholder: "India",
  },
  {
    type: "select",
    label: "State",
    key: "state",
    md: 8,
    items: cities,
    placeholder: "Tamilnadu",
  },
  {
    type: "select",
    label: "City",
    key: "city",
    md: 8,
    items: items,
    placeholder: "Chenai",
  },

  {
    type: "input",
    label: "Address One",
    key: "addressOne",
    md: 8,
    placeholder: "Address",
  },
  {
    type: "input",
    label: "Address Two",
    key: "addressTwo",
    md: 8,
    placeholder: "Address",
  },
  {
    type: "input",
    label: "Postal Code",
    key: "postalCode",
    md: 8,
    placeholder: "Code",
  },
  {
    type: "input",
    label: "Mobile Number",
    key: "phone",
    md: 8,
    required: true,
    placeholder: "025874622",
  },
];
