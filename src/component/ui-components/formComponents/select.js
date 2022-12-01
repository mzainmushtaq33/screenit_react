import React from "react";
import { Select } from "antd";
import LabelComponent from "./label";
import { IconArrowDown } from "@tabler/icons";

const { Option } = Select;

export default function SelectComponent({
  items = [],
  itemValue = "",
  itemText = "",
  placeholder,
  onChange,
  setFieldValue,
  label,
  labelStyle,
  errorMsg,
  className = "",
  required,
  handleChange,
  name,
  value,
  ...args
}) {
  return (
    <>
      {items && (
        <>
          <LabelComponent
            className={labelStyle}
            label={label}
            required={required}
          />
          <div className="select_wrapper inputParent">
            <Select
              size="large"
              allowClear
              bordered={false}
              showSearch
              name={name}
              value={value}
              placeholder={placeholder ? placeholder : "Select"}
              optionFilterProp="children"
              onChange={(e) => setFieldValue(`${name}`,e)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              status={errorMsg?.length ? "error" : false}
              className={` w-100 ${className}`}
              dropdownStyle={{ zIndex: 2000 }}
              {...args}
              suffixIcon={<IconArrowDown />}
            >
              {items.map((e, index) => (
                <Option
                  value={
                    itemValue?.length && e[itemValue]?.toString().length
                      ? e[itemValue]
                      : e.toString()
                  }
                  key={index}
                  className="initial-whitespace-child text_danger"
                >
                  {itemText.length && e[itemText] ? e[itemText] : e.toString()}
                </Option>
              ))}
            </Select>
          </div>
          {errorMsg && (
            <LabelComponent className="error_text" label={errorMsg} />
          )}
        </>
      )}
    </>
  );
}
