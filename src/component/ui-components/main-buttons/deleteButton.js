/**
 * author: hasib
 */
import { Button } from "antd";

export default function Delete({
  btnName = "Delete",
  onClick = () => {},
  icon = null,
  ...args
}) {
  return (
    <>
      <Button type="primary" size="large" danger {...args} onClick={onClick}>
        <span className="d-flex align-items-center justify-content-center">
          {icon && (
            <span
              className="d-flex align-items-center"
              style={{ marginRight: "4px", fontSize: "20px" }}
            >
              {icon}
            </span>
          )}
          {btnName}
        </span>
      </Button>
    </>
  );
}
