/* eslint-disable react-hooks/exhaustive-deps */
/*
 * Hasib
 */
import { Col, Modal, Row } from "antd";
import React from "react";
import Save from "../main-buttons/saveButton.js";
import Delete from "../main-buttons/deleteButton.js";
import {
  CheckOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
export default function ConfirmationModal({
  visible,
  onConfirmPress = () => {},
  onCancelPress = () => {},
  title = "",
  description = "Are You Sure?",
  type = "save",
  confirmBtnName = "Yes",
  canelBtnName = "No",
  confirmBtnLoading = false,
  cancelBtnLoading = false,
  ...args
}) {
  let color = "";
  switch (type) {
    case "danger":
      color = "#FF6F91";
      break;

    default:
      color = "#00C9A7";
      break;
  }
  return (
    <>
      <Modal
        centered
        visible={visible}
        title={title}
        footer={[
          <Save
            btnName={confirmBtnName}
            onClick={onConfirmPress}
            key="confirm"
            loading={confirmBtnLoading}
            icon={<CheckOutlined />}
          />,
          <Delete
            btnName={canelBtnName}
            onClick={onCancelPress}
            key="cancel"
            loading={cancelBtnLoading}
            icon={<CloseOutlined />}
          />,
        ]}
        {...args}
      >
        <Row>
          <Col md={24} style={{ fontSize: "16px", fontWeight: 500 }}>
            <span className="d-flex align-items-center">
              <ExclamationCircleOutlined
                style={{
                  fontSize: "25px",
                  fontWeight: 700,
                  marginRight: "8px",
                  color,
                }}
              />
              {description}
            </span>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
