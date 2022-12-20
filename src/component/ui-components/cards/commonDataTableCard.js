import { IconEye } from "@tabler/icons";
import { Col, Row } from "antd";
import React from "react";
import { ActionComponent } from "../commonDataTable/commonDataTable";
import CheckboxComponent from "../formComponents/checkbox";
import SwitchComponent from "../formComponents/switch";
import Audio from "../../../services/images/audio.jpg";
import Document from "../../../services/images/document.jpg";
import Video from "../../../services/images/video.jpg";

export default function CardItem({
  item,
  height,
  gridItem,
  secondNameDesign,
  loadingState,
  imgOverflowIcn,
  optionArray = [],
  switchClickHandler = () => {},
  checkboxClickHandler = () => {},
  showActions = true,
}) {
  console.log("loadingState", loadingState);
  return (
    <>
      { gridItem && (
            <div style={gridItem.img ? null : cardStyle}>
              <Col md={24}>
                {gridItem.img && (
                  <Row className="mb-4 position-relative">
                    {imgOverflowIcn && (
                      <span className="imgIconEye">
                        {" "}
                        <IconEye />
                      </span>
                    )}
                    <CardImg
                      src={item[gridItem.img]}
                      height={height}
                      data={item}
                    />
                  </Row>
                )}
                <Row className={`titleName`}>
                  {gridItem.name && (
                    <Col md={20} style={cardNameStyle}>
                      {item[gridItem.name]}
                    </Col>
                  )}
                  {gridItem.checkbox && (
                    <Col md={4} className="text-end">
                      <CheckboxComponent
                        onChange={(value) => checkboxClickHandler(item, value)}
                      />
                    </Col>
                  )}
                  <Col
                    md={4}
                    style={cardNameStyle}
                    className={gridItem.checkbox ? "" : "text-end"}
                  >
                    {showActions && (
                      <ActionComponent optionArray={optionArray} item={item} />
                    )}
                  </Col>
                </Row>
                <Row className="">
                  {gridItem.secondName && (
                    <Col
                      md={18}
                      className={secondNameDesign}
                      style={cardSecondNameStyle}
                    >
                      {item[gridItem.secondName]}
                    </Col>
                  )}

                  {gridItem.switch && switchClickHandler && (
                    <Col md={6} className="justify_content_end">
                      <SwitchComponent
                        value={item[gridItem.switch]}
                        onChange={(value) => switchClickHandler(item, value)}
                      />
                    </Col>
                  )}
                </Row>
                {gridItem.thirdName && (
                  <Row className="mt-4">
                    <Col md={24} style={cardThirdNameStyle}>
                      {item[gridItem.thirdName]}
                    </Col>
                  </Row>
                )}
              </Col>
            </div>
          )}
    </>
  );
}

function CardImg({ src, height = "auto", data }) {
  console.log("data ", data);

  return (
    <>
      <img
        src={
          data?.mediaType == 1
            ? src
            : data?.mediaType == 2
            ? Audio
            : data?.mediaType == 3
            ? Video
            : data?.mediaType == 4
            ? Document
            : null
        }
        alt=""
        width={"100%"}
        height={height}
        style={{ borderRadius: "20px", minHeight: "250px", objectFit: "cover" }}
      />
    </>
  );
}
let cardStyle = {
  background: "#F7F7F7 0% 0% no-repeat padding-box",
  border: "1px solid #DBDBDB",
  borderRadius: "20px",
  padding: "20px",
  paddingBottom: "30px",
};
let cardNameStyle = {
  font: "normal normal 900 24px/24px helveticaNeueMedium",
};
let cardSecondNameStyle = {
  font: "normal normal 300 20px/24px",
};
let cardThirdNameStyle = {
  font: "normal normal bold 20px/25px helveticaNeueExtraLight",
};
