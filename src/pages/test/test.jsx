import React from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import MainModal from "../../component/ui-components/main-modals/main-modal";

import * as validation from "../../component/ui-components/submit-forms/defaultValidation";
import SubmitForm from "../../component/ui-components/submit-forms/submit-form";

import DataTable from "../../component/ui-components/main-table/main-table";
import { fakeDataScreen } from "./fakeData";
import SwitchComponent from "../../component/ui-components/formComponents/switch";
import DateTimePickerComponent from "../../component/ui-components/formComponents/dateTimePicker";

function Test() {
  const [open, setOpen] = React.useState(false);
  const createHandler = (e) => {
    setOpen(true);
  };

  // from submit
  const defGetByName = {
    name: "",
    password: "",
    isNewScreenAllowed: false,
    isUpdateScreenAllowed: false,
    isDeleteScreenAllowed: false,
    isLibraryAllowed: false,
    isUploadLibraryAllowed: false,
    isDeleteLibraryAllowed: false,
    isNewPlaylistAllowed: false,
    isEditPlaylistAllowed: false,
    isNewScheduleAllowed: false,
    isEditScheduleAllowed: false,
    isNewTemplateAllowed: false,
    isReportsAllowed: false,
  };
  const handleSubmit = (e) => {
    console.log(e);
  };
  const headers = [
    { title: "S.No", dataIndex: "serialNo" },
    { title: "Item Name", dataIndex: "itemName" },
    { title: "Item Dec", dataIndex: "itemDescription" },
    { title: "Item Thumb", dataIndex: "itemThumb", type: "image" },
    { title: "Scheduled Content", dataIndex: "schedule" },
    { title: "Media Type", dataIndex: "mediaType" },
  ];

  const dataSource = [
    {
      serialNo: "1",
      itemName: "Item One",
      itemDescription: "Item One Description",
      itemThumb: "https://variety.com/wp-content/uploads/2020/04/hbo-max.png",
      schedule: new Date().toString(),
      mediaType: "",
    },
    {
      serialNo: "2",
      itemName: "Item Two ",
      itemDescription: "Item Two Description",
      itemThumb:
        "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
      schedule: new Date().toString(),
      mediaType: "",
    },
    {
      serialNo: "3",
      itemName: "Item Three ",
      itemDescription: "Item Three Description",
      itemThumb:
        "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png",
      schedule: new Date().toString(),
      mediaType: "",
    },
  ];

  return (
    <div className="App">
      {false && (
        <>
          <h1>ABU HASAN</h1>
          <p>ABU HASAN</p>
          <span>ABU HASAN</span>
          <h3>ABU HASAN</h3>

          <br />
          <br />
          <h1>for button</h1>
          <MainButton
            clickHandler={createHandler}
            wdt="100%"
            icon="plus"
            btnText="Add User Default"
            variant=""
          />
          <MainButton
            disabled
            clickHandler={createHandler}
            wdt="auto"
            icon="plus"
            btnText="Add User Black"
            variant="outlinedDark"
          />
          <MainButton
            clickHandler={createHandler}
            wdt="250px"
            icon="plus"
            btnText="Add User Border"
            variant="outlinedBtn"
          />
          <br />
          <br />
          <h1>for submit from</h1>
          <SubmitForm
            validationSchema={validation.user_add}
            subBtn={{
              btnName: "Submit",
              btnIcon: "",
              btnColor: "primary",
              btnVariant: "",
              xs: 12,
              md: 10,
              lg: 10,
              xl: 10,
            }}
            resetFrom={false}
            handleSubmit={handleSubmit}
            defaultValues={defGetByName}
            formStyle=""
            shadow="0"
            parentGrid={{
              justifyContent: "center",
              alignItems: "",
              flexDirection: "",
            }}
            // marginTop={mt3}
            inputFields={[
              {
                type: "text",
                label: "User Name",
                name: "name",
                size: "",
                margin: "",
                variant: "",
                inputDefault: defGetByName.name,
                inputEndIcon: {},
                sx: { color: "" },
                gridSizes: { xs: 12, md: 5, lg: 5, xl: 5 },
              },
              {
                type: "password",
                label: "Password",
                name: "password",
                size: "",
                margin: "",
                variant: "",
                inputDefault: defGetByName.password,
                inputEndIcon: {},
                sx: { color: "" },
                gridSizes: { xs: 12, md: 5, lg: 5, xl: 5 },
              },
            ]}
          />

          <MainModal
            clickHandler={createHandler}
            open={open}
            setOpen={setOpen}
            titleText="Create Playlist"
          >
            <h1>Test</h1>
          </MainModal>

          <DataTable
            rowKey="_id"
            columns={headers}
            dataSource={fakeDataScreen}
            pagination
          />
          <CommonDataTable
            allowFilter
            headers={headers}
            dataSource={dataSource}
            rowKey="serialNo"
            gridItem={{ img: "itemThumb", name: "itemName" }}
            editClickHandler={(item) => console.log("edit===>", item)}
            deleteClickHandler={(item) => console.log("delete===>", item)}
            duplicateClickHandler={(item) => console.log("duplicate===>", item)}
          />
          <SwitchComponent />
        </>
      )}

      <DateTimePickerComponent label={"Start"} errorMsg="Error" />
    </div>
  );
}

export default Test;
