import React from "react";
import { Col, Row } from "antd";
import CardItem from "../../component/ui-components/cards/commonDataTableCard";
import MainCard from "../../component/ui-components/cards/main-card";
import DateTimePickerComponent from "../../component/ui-components/formComponents/dateTimePicker";
import InputComponent from "../../component/ui-components/formComponents/input";
import SelectComponent from "../../component/ui-components/formComponents/select";
import CalendarComponent from "../../component/ui-components/calendar/calendarComponent";
import CustomTab from "../../component/ui-components/tab/tab";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import { IconCirclePlus } from "@tabler/icons";

const AddSchedule = () => {
  let tabArray = [
    {
      name: "Month",
      key: "month",
    },
    {
      name: "Week",
      key: "week",
    },
    {
      name: "Day",
      key: "day",
    },
  ];
  return (
    <MainCard
      sx={{
        boxShadow: 0,
        border: 0,
        borderRadius: "20px",
        padding: "20px",
        minHeight: "85vh",
      }}
    >
      <Row gutter={[10, 24]}>
        <Col md={24}>
          <Row gutter={[12, 12]}>
            <Col lg={12} md={12} xs={24}>
              <CustomTab tabArray={tabArray} />
            </Col>
            <Col lg={12} md={12} xs={24} className="justify_content_end">
              <MainButton btnText={"Add Entry"} icon={<IconCirclePlus />} />
            </Col>
          </Row>
        </Col>
        <Col xl={8} lg={14} md={24} className=" w-100">
          <CalendarComponent />
        </Col>
        <Col xl={10} lg={10} md={24}>
          <Row gutter={[10, 24]} className="px-4">
            <Col md={24} span={24}>
              <InputComponent
                label={"Schedule Name"}
                placeholder="Screen 1"
                required
              />
            </Col>
            <Col xl={12} lg={24} md={12} sm={12} span={24}>
              <DateTimePickerComponent label={"Start"} required />
            </Col>
            <Col xl={12} lg={24} md={12} sm={12} span={24}>
              <DateTimePickerComponent label={"Stop"} required />
            </Col>
            <Col md={24} span={24}>
              <SelectComponent label={"Repeat"} required />
            </Col>
            <Col md={24} span={24}>
              <SelectComponent label={"Content"} required />
            </Col>
          </Row>
        </Col>
        <Col xl={6} lg={24} md={24} sm={24}>
          <Row gutter={[24, 24]}>
            <Col xl={24} lg={8} md={24} span={24}>
              <CardItem
                secondNameDesign="customCardDsg"
                item={{
                  name: (
                    <>
                      <div className="divStyle">Schedule</div>
                      <span className="spanStyle">07 OCT 2022 - 12:20</span>
                    </>
                  ),
                  description: "",
                }}
                gridItem={{ name: "name", secondName: "description" }}
              />
            </Col>
            <Col xl={24} lg={8} md={24} sm={12} span={24}>
              <CardItem
                secondNameDesign="customCardDsg"
                item={{
                  name: (
                    <>
                      <div className="divStyle">Schedule</div>
                      <span className="spanStyle">07 OCT 2022 - 12:20</span>
                    </>
                  ),
                  description: "",
                }}
                gridItem={{ name: "name", secondName: "description" }}
              />
            </Col>
            <Col xl={24} lg={8} md={24} sm={12} span={24}>
              <CardItem
                secondNameDesign="customCardDsg"
                item={{
                  name: (
                    <>
                      <div className="divStyle">Schedule</div>
                      <span className="spanStyle">07 OCT 2022 - 12:20</span>
                    </>
                  ),
                  description: "",
                }}
                gridItem={{ name: "name", secondName: "description" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </MainCard>
  );
};

export default AddSchedule;
