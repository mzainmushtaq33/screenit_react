import React from "react";
import FormGenerator from "../../../component/ui-components/formGenerator/formGenerator";

export default function Password(props) {
  return (
    <div>
      <FormGenerator formData={formData} />
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
