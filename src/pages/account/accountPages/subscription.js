import { Button, Col, Row } from "antd";
import React from "react";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import CheckboxComponent from "../../../component/ui-components/formComponents/checkbox";
export default function Subscription(props) {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col md={6}>
          <PrimaryCard />
        </Col>
        <Col md={18}>
          <SecondaryCard />
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        <Col md={6}></Col>

        <Col md={6} style={{ paddingLeft: "0" }}>
          <PlanCard
            name="Basic Plan"
            description="Suitable for Startups"
            price="$9.99"
            checked
          />
        </Col>
        <Col md={6}>
          <PlanCard
            name="Basic Plan"
            description="Suitable for Startups"
            price="$9.99"
          />
        </Col>
        <Col md={6} style={{ paddingRight: "0" }}>
          <PlanCard
            name="Basic Plan"
            description="Suitable for Startups"
            price="$9.99"
          />
        </Col>
      </Row>
    </div>
  );
}

function PrimaryCard() {
  let primaryCard = {
    background: "#F4364C 0% 0% no-repeat padding-box",
    borderRadius: "20px",
    opacity: "1",
    padding: "40px",
  };
  return (
    <div style={primaryCard} className="">
      <PrimaryCardData
        label="You are currently subscribed to"
        value="ScreenltOn 'Basic Plan' "
      />
      <br />
      <br />
      <PrimaryCardData
        label="Your subscribtion limit is set to"
        value="1 Screen"
      />
    </div>
  );
}

function PrimaryCardData({ label = "", value = "" }) {
  let labelStyle = {
    font: "normal normal normal 20px/24px helveticaNeue",
    color: "#FFFFFF",
    marginBottom: "10px",
  };
  let valueStyle = {
    font: "normal normal bold 24px/29px helveticaNeue",
    color: "#FFFFFF",
  };
  return (
    <>
      <div style={labelStyle}>{label}:</div>
      <div style={valueStyle}>{value}</div>
    </>
  );
}

function SecondaryCard() {
  let secondaryCardStyle = {
    background: "#F7F7F7 0% 0% no-repeat padding-box",
    border: "1px solid #DBDBDB",
    borderRadius: "20px",
    padding: "40px",
    height: "100%",
  };
  return (
    <Row style={secondaryCardStyle} gutter={[24, 24]}>
      <Col md={8}>
        <SecondaryCardData label="Your Billing Cycle" value="11-11-2022" />
      </Col>
      <Col md={8}>
        <SecondaryCardData label="Your Ballance" value="$0.00" />
      </Col>
      <Col md={8}>
        <h3>No of Screens:</h3>
        <div className="align_item_center">
          <Button
            style={{ border: "2px solid red", backgroundColor: "inherit" }}
            shape="circle"
            icon={<PlusOutlined />}
          />
          <span
            className="mx-4"
            style={{ font: "normal normal bold 30px/37px helveticaNeue" }}
          >
            1
          </span>
          <Button
            style={{ border: "2px solid red", backgroundColor: "inherit" }}
            shape="circle"
            icon={<MinusOutlined />}
          />
        </div>
      </Col>
      <Col md={8}>
        <SecondaryCardData label="Next Billing Date" value="11-12-2022" />
      </Col>
      <Col md={8}>
        <SecondaryCardData label="Payment Method" value="Credit Card" />
      </Col>
      <Col md={8}>
        <SecondaryCardData label="Total Payable" value="$199.00" />
      </Col>
    </Row>
  );
}
function SecondaryCardData({ label = "", value = "" }) {
  let labelStyle = {
    font: "normal normal normal 20px/25px helveticaNeue",
    color: "#333333",
    marginBottom: "0px",
  };
  let valueStyle = {
    font: "normal normal bold 20px/25px helveticaNeue",
    color: "#333333",
  };
  return (
    <>
      <div style={labelStyle}>{label}:</div>
      <div style={valueStyle}>{value}</div>
    </>
  );
}

function PlanCard({
  name = "",
  price = "",
  description = "",
  checked = false,
}) {
  let planCardStyle = {
    background: `${checked ? "#FFFFFF" : "#F7F7F7"
      } 0% 0% no-repeat padding-box`,
    border: `1px solid ${checked ? "#F4364C" : "#DBDBDB"}`,
    borderRadius: "20px",
    padding: "30px",
  };
  let nameStyle = {
    font: "normal normal bold 30px/35px helveticaNeue",
    color: "#333333",
  };
  let descriptionStyle = {
    font: "normal normal normal 21px/35px helveticaNeue",
    color: "#333333",
  };
  let priceStyle = {
    font: "normal normal bold 29px/35px helveticaNeue",
    color: "#333333",
    marginTop: "100px",
  };
  return (
    <Row style={planCardStyle}>
      <Col style={nameStyle} md={18}>
        {name}
      </Col>
      <Col md={6} className="justify_content_end align_item_center">
        <CheckboxComponent checked={checked} />
      </Col>
      <Col style={descriptionStyle} md={24}>
        {description}
      </Col>
      <Col style={priceStyle} md={24}>
        {price}
      </Col>
    </Row>
  );
}
