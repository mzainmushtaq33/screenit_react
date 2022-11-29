/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { IconClock } from "@tabler/icons";
import { useEffect, useState } from "react";
import LabelComponent from "./label";

export default function DateTimePickerComponent({
  date = new Date(),
  onChange = () => {},
  errorMsg,
  label,
  labelStyle,
  className = "",
  required,
  ...args
}) {
  let [dateValue, setDateValue] = useState(date);
  let [timeValue, setTimeValue] = useState();

  useEffect(() => {
    let modifiedDate = dateValue ? new Date(Date.parse(dateValue)) : new Date();
    let modifiedTimeValue = timeValue
      ? timeValue.split(":")
      : [modifiedDate.getHours(), modifiedDate.getMinutes()];
    modifiedDate.setHours(modifiedTimeValue[0]);
    modifiedDate.setMinutes(modifiedTimeValue[1]);

    // console.log(modifiedDate);
    onChange(modifiedDate);
  }, [dateValue, timeValue]);

  let inputFieldStyle = {
    border: "none",
    outline: "none",
    background: "none",
    padding: 0,
    margin: 0,
  };
  let dateTimePickerFieldStyle = {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #cecdcd ",
    borderRadius: "10px",
    padding: "10px",
    // display: "block",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <>
      <LabelComponent
        className={labelStyle}
        label={label}
        required={required}
      />
      <span style={dateTimePickerFieldStyle}>
        <input
          onChange={(event) => setDateValue(event.target.value)}
          type={"date"}
          style={{ ...inputFieldStyle, width: "50%" }}
          value={dateValue}
        />
        <span className="">|</span>
        <input
          onChange={(event) => setTimeValue(event.target.value)}
          type={"time"}
          style={inputFieldStyle}
          value={timeValue}
        />
        <IconClock />
      </span>
      {errorMsg && <LabelComponent className="error_text" label={errorMsg} />}
    </>
  );
}
