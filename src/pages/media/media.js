import { Row, Col } from "antd";
import React from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import InputComponent from "../../component/ui-components/formComponents/input";
import SelectComponent from "../../component/ui-components/formComponents/select";
import MainModal from "../../component/ui-components/main-modals/main-modal";
import CustomTab from "../../component/ui-components/tab/tab";
import { img_v1 } from "../../services/svg/svg-icon";
import ImageFile from "./image-file";


export default function Media() {
  const [open, setOpen] = React.useState(false);

  const headers = [
    { title: "S.No", dataIndex: "serialNo", align: 'center' },
    { title: "Item Name", dataIndex: "itemName" },
    { title: "Item Dec", dataIndex: "itemDescription" },
    { title: "Item Thumb", dataIndex: "itemThumb", type: "image", align: 'center' },
    { title: "Scheduled Content", dataIndex: "schedule" },
    { title: "Media Type", dataIndex: "mediaType", render: (() => img_v1), align: 'center' },
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

  const addImage = e => {
    setOpen(true);
  }
  const createHandler = () => {

  }
  let tabArray = [
    {
      name: "Media File",
      key: "imageFile",
      component: <ImageFile />,
    },
    // {
    //   name: "Stock Image",
    //   key: "stockImage",
    //   component: <ImageFile />,
    // },
  ];
  const mediaTypes = [
    'Image',
    'Audio',
    'Video',
    'Document'
  ]
  return (
    <div>
      <CommonDataTable
        addBtnText="Add Image"
        addBtnClickHandler={addImage}
        headers={headers}
        dataSource={dataSource}
        rowKey="serialNo"
        gridItem={{ img: "itemThumb", name: "itemName" }}
        customTabExists
        editClickHandler={(item) => console.log("edit===>", item)}
        deleteClickHandler={(item) => console.log("delete===>", item)}
        duplicateClickHandler={(item) => console.log("duplicate===>", item)}
      />
      <MainModal
        clickHandler={createHandler}
        open={open}
        onCloseHandler={() => setOpen(false)}
        titleText="Upload Image Source"
      >
         <Row gutter={[24, 24]}>
         <Col
        //  lg: 8,
        //  md: 12,
        //  sm: 24,
            lg={8}
            md={12}
            sm={24}
          >
          <InputComponent
                label="Title"
                required={false}
                placeholder="search"
                // handleChange={handleChange}
                // name= {component.key}
                // value={values[component.key]}
              />
          </Col>

          <Col
          lg={10}
          md={12}
          sm={24}
          >
          <SelectComponent
                label='Media Type'
                required={false}
                items={mediaTypes}
                // itemText={component.itemText}
                // itemValue={component.itemValue}
                placeholder='Select'
                // handleChange={handleChange}
              />
          </Col>
        
         </Row>
        <CustomTab tabArray={tabArray} />
      </MainModal>
    </div>
  );
}
