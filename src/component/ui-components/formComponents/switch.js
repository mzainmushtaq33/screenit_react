import { Switch } from "antd";
import React, { useState } from "react";

export default function SwitchComponent({
  value = false,
  onChange = () => {},
  onText = "ON",
  offText = "OFF",
}) {
  let [switchValue, setSwitchValue] = useState(value);
  let onChangeHandler = (changedValue) => {
    onChange(changedValue);
    setSwitchValue(changedValue);
  };

  let textStyle = {
    font: "normal normal bold 20px/25px helveticaNeueMedium",
  };
  let switchStyle = {
    background: switchValue
      ? "#33CE26 0% 0% no-repeat padding-box"
      : "#333333 0% 0% no-repeat padding-box",
  };
  return (
    <>
      <span className="align_item_center">
        <span style={textStyle}>{offText}</span>
        <Switch
          style={switchStyle}
          className="mx-4"
          defaultChecked={switchValue}
          onChange={onChangeHandler}
        />
        <span style={textStyle}>{onText}</span>
      </span>
    </>
  );
}
