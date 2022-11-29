import { DatePicker } from "antd";
import LabelComponent from "./label";

import moment from "moment";
export default function DatePickerComponent({
  onChange,
  label,
  labelStyle,
  errorMsg,
  value,
  ...args
}) {
  return (
    <>
      <LabelComponent className={labelStyle} label={label} />
      <DatePicker
        className="w-100"
        size="large"
        onChange={(value, stringDate) => onChange(value, stringDate)}
        status={errorMsg?.length ? "error" : false}
        value={value ? moment(value, "YYYY-MM-DD") : undefined}
        {...args}
      />
      {errorMsg && <LabelComponent className="error_text" label={errorMsg} />}
    </>
  );
}
