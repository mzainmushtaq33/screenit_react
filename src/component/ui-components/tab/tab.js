import { Tabs } from "antd";
import { useState } from "react";
const { TabPane } = Tabs;
export default function CustomTab({
  tabArray,
  defaultActiveKey,
  destroyInactiveTabPane = false,
}) {
  let [activeKey, setActiveKey] = useState(
    defaultActiveKey ? defaultActiveKey : tabArray[0]?.key
  );

  /* --------------------------- */
  /* ------ tabArray Demo------ */
  /* --------------------------- */
  //   let tabArray = [
  //     {
  //       name: "To Disable",
  //       key: "disable",
  //       component: <DisableStudent />,
  //     },
  //     {
  //       name: "To Enable",
  //       key: "enable",
  //       component: <EnableStudent />,
  //     },
  //   ];

  return (
    <>
      {tabArray?.length > 0 && (
        <Tabs
        style={{marginTop:'10px'}}
          defaultActiveKey={activeKey ? activeKey : tabArray[0]?.key}
          activeKey={activeKey}
          className=""
          type="card"
          size="large"
          renderTabBar={() => (
            <div style={{ marginBottom: "20px" }} className="customTabParent">
              {tabArray.map((tab, index) => (
                <span
                  key={index}
                  className={`custom_tab_bar ${activeKey === tab.key ? "selected_custom_tab_bar" : ""
                    }`}
                  onClick={() => setActiveKey(tab.key)}
                >
                  {tab.name}
                </span>
              ))}
            </div>
          )}
          destroyInactiveTabPane={destroyInactiveTabPane}
        >
          {tabArray.map((tab) => (
            <TabPane tab={tab.name} key={tab.key}>
              {tab.component}
            </TabPane>
          ))}
        </Tabs>
      )}
    </>
  );
}
