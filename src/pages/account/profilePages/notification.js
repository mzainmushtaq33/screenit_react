import { Col, Row } from "antd";
import React from "react";
import SwitchComponent from "../../../component/ui-components/formComponents/switch";
import MainButton from "../../../component/ui-components/main-buttons/main-button";
import { trash_v1 } from "../../../services/svg/svg-icon";

export default function Notification(props) {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xl={6} md={24}>
          <NotificationOption description="Send me an email when a device goes offline" />
          <NotificationOption description="Send me an email when a device goes online" />
          <NotificationOption description="Send me an email when a device goes offline" />
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div className="mr-4">
              <MainButton btnText={"Cancel"} variant="outlinedDark" />
            </div>
            <div>
              <MainButton btnText={"Save"} />
            </div>
          </div>
        </Col>
        <Col xl={18} md={24}>
          <div className="backgroud_paper h-100">
            <SingleNotification
              notificationMsg="- Hello users, now you can update your profile details from My profile
      located at right top options."
            />
            <SingleNotification
              notificationMsg="- Hello users, now you can update your profile details from My profile
      located at right top options."
            />
            <SingleNotification
              notificationMsg="- Hello users, now you can update your profile details from My profile
      located at right top options."
            />
            <SingleNotification
              notificationMsg="- Hello users, now you can update your profile details from My profile
      located at right top options."
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
function NotificationOption({ description = "" }) {
  return (
    <div className="backgroud_paper mb-4">
      <div className="description">{description}</div>
      <div className="switchComponentContainer">
        <SwitchComponent />
      </div>
    </div>
  );
}

function SingleNotification({ notificationMsg = "" }) {
  return (
    <div
      className="description"
      style={{
        borderBottom: "1px solid #DBDBDB",
        padding: "40px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {notificationMsg} {trash_v1}
    </div>
  );
}
