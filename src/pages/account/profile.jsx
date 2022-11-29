import React from "react";
import CustomTab from "../../component/ui-components/tab/tab";
import BasicInfo from "./profilePages/basicInfo";
import Notification from "./profilePages/notification";
import Password from "./profilePages/password";

export default function Profile(props) {
  let profilePages = [
    { name: "Basic Info", key: "basicInfo", component: <BasicInfo /> },
    { name: "Notifications", key: "notification", component: <Notification /> },
    { name: "Password", key: "password", component: <Password /> },
  ];
  return (
    <div className="card minHeight">
      <CustomTab tabArray={profilePages} />
    </div>
  );
}
