/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import { Alert, Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { dateConverter } from "../../../utils/utilityFunctions/dateConverter";

import "./style.scss";
export default function CalendarComponent() {
  let [dates, setDates] = useState([]);
  let days = [
    {
      title: "Sun",
      dataIndex: 0,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
    {
      title: "Mon",
      dataIndex: 1,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
    {
      title: "Tue",
      dataIndex: 2,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
    {
      title: "Wed",
      dataIndex: 3,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
    {
      title: "Thu",
      dataIndex: 4,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
    {
      title: "Fri",
      dataIndex: 5,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
    {
      title: "Sat",
      dataIndex: 6,
      render: (cellValue) => (
        <div>{cellValue?.getDate() ? cellValue.getDate() : "***"}</div>
      ),
    },
  ];
  let [selectedDate, setSelectedDate] = useState(new Date());
  let [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    constructCalendarValue();
  }, [currentDate]);

  let constructCalendarValue = () => {
    let firstDateOfThisMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    let dayValueOfFirstDateOfThisMonth = firstDateOfThisMonth.getDay();

    let numberOfDaysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    let dateArray = [];
    for (let i = dayValueOfFirstDateOfThisMonth - 1; i >= 0; i--) {
      let date = new Date(
        new Date(firstDateOfThisMonth).setDate(
          firstDateOfThisMonth.getDate() - (i + 1)
        )
      );

      dateArray.push({ date, key: date.getDay() });
    }
    for (let i = 1; i <= numberOfDaysInCurrentMonth; i++) {
      let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      dateArray.push({ date, key: date.getDay() });
    }

    let dayValueOfDateArrayLastIndex =
      dateArray[dateArray.length - 1].date.getDay(0);

    for (let i = 1; i < 7 - dayValueOfDateArrayLastIndex; i++) {
      let date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      );
      dateArray.push({ date, key: date.getDay(), disabled: true });
    }

    setDates(dateArray);
  };

  let prevHandler = () => {
    let date = currentDate;

    setCurrentDate(
      new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
    );
  };
  let forwardHandler = () => {
    let date = currentDate;

    setCurrentDate(
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
        className="selectedDateStyle"
      >
        <IconArrowLeft onClick={prevHandler} />
        <span>{dateConverter(selectedDate)}</span>
        <IconArrowRight onClick={forwardHandler} />
      </div>
      <div className="container">
        {days.map((day, index) => (
          <div className=" cellStyle headerCell" key={index}>
            {day.title}
          </div>
        ))}
        {dates.map((e, index) => (
          <div
            className={`cellStyle ${
              e.date === selectedDate ? "selectedCell" : ""
            }
            ${e.disabled ? "disabledCell" : ""}
            `}
            onClick={() => {
              if (!e.disabled) {
                setSelectedDate(e.date);
              }
            }}
            key={index}
          >
            {e.date.getDate()}
          </div>
        ))}
      </div>
    </>
  );
}
