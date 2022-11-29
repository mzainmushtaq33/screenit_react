import { Input } from "antd";
import LabelComponent from "./label";

export default function InputComponent({
  label,
  placeholder,
  labelStyle = "",
  errorMsg,
  fieldType = "input",
  required,
  className = "",
  ...args
}) {
  return (
    <div className="input_parent">
      <LabelComponent
        className={`${labelStyle}`}
        label={label}
        required={required}
      />
      {fieldType === "input" ? (
        <Input
          placeholder={placeholder}
          size="large"
          {...args}
          status={errorMsg?.length ? "error" : false}
          className={`form_component ${className} `}
        />
      ) : (
        <Input.TextArea
          placeholder={placeholder}
          size="large"
          {...args}
          status={errorMsg?.length ? "error" : false}
          className={`form_component ${className} `}
        />
      )}
      {errorMsg && <LabelComponent className="error_text" label={errorMsg} />}
    </div>
  );
}
