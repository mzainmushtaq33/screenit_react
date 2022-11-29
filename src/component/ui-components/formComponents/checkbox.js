import React, { useState } from "react";

export default function CheckboxComponent({
  label,
  checked = false,
  onChange = () => { },
}) {
  let [value, setValue] = useState(checked);
  return (
    <span style={{ display: "inline-block" }} className="checkParent">
      <label className="align_item_center chkContainer">
        <input
          style={{
            width: "20px",
            height: "20px",
          }}
          type="checkbox"
          checked={value}
          onChange={(event) => {
            onChange(event.target.checked);
            setValue(event.target.checked);
          }}
        />
        <span className="checkmark"></span>
        {label && (
          <span
            className="ml-4"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            {label}
          </span>
        )}
      </label>
    </span>
  );
}
