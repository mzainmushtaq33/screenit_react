import { Row, Col } from "antd";
import React from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import InputComponent from "../../component/ui-components/formComponents/input";
import SelectComponent from "../../component/ui-components/formComponents/select";
import MainModal from "../../component/ui-components/main-modals/main-modal";
import CustomTab from "../../component/ui-components/tab/tab";
import { img_v1 } from "../../services/svg/svg-icon";
import ImageFile from "./image-file";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import AWS from 'aws-sdk'
import { ToastMessage } from "../../utils/toastMessage/ToastMessage";


export default function Media() {
  const [open, setOpen] = React.useState(false);
  const [mediaValue, setMediaValue] = React.useState("Image");
  const [files, setFiles] = React.useState([]);
  console.log('files xcx:>> ', files);

  const S3_BUCKET ='screen-ot-it';
const REGION ='ap-northeast-1';


AWS.config.update({
    accessKeyId: 'AKIA4JUMSCL4KKGRVZP5',
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

  const headers = [
    { title: "S.No", dataIndex: "serialNo", align: "center" },
    { title: "Item Name", dataIndex: "itemName" },
    { title: "Item Dec", dataIndex: "itemDescription" },
    {
      title: "Item Thumb",
      dataIndex: "itemThumb",
      type: "image",
      align: "center",
    },
    { title: "Scheduled Content", dataIndex: "schedule" },
    {
      title: "Media Type",
      dataIndex: "mediaType",
      render: () => img_v1,
      align: "center",
    },
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

  const addImage = (e) => {
    setOpen(true);
  };
  const createHandler = () => {};
  let tabArray = [
    {
      name: "Media File",
      key: "imageFile",
      component: <ImageFile mediaName={mediaValue} setFiles={setFiles}/>,
    },
    // {
    //   name: "Stock Image",
    //   key: "stockImage",
    //   component: <ImageFile />,
    // },
  ];
  // console.log('fieldValue', fieldValue)
  const mediaTypes = ["Image", "Audio", "Video", "Document"];
  const setFieldValue = (e, name) => {
    // console.log('e,w', e,w)
    setMediaValue(name);
  };
  const uploadData = () => {
    // const params = {
    //   ACL: 'public-read',
    //   Body: file,
    //   Bucket: S3_BUCKET,
    //   Key: file.name
  // };
  }
  const handleUpload = () => {
    // Configure the S3 client
    // Loop through the files array and upload each file to the S3 bucket
    files.forEach(file => {
      myBucket.upload({
        Bucket: 'screen-ot-it',
        Key: file.name,
        Body: file.file
      }, (err, data) => {
        if (err) {
          console.error('Error uploading file:', err);
          ToastMessage(false,'Error uploading file:')
        } else {
          console.log('Successfully uploaded file:', data);
          ToastMessage(true,`Successfully uploaded file:${data?.key}`)
        }
      });
    });
  };
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

          <Col lg={10} md={12} sm={24}>
            <SelectComponent
              label="Media Type"
              required={false}
              items={mediaTypes}
              // itemText={component.itemText}
              // itemValue={component.itemValue}
              placeholder="Select"
              // handleChange={handleChange}
              setFieldValue={setFieldValue}
              value={mediaValue}
            />
          </Col>
          <Col
            //  lg: 8,
            //  md: 12,
            //  sm: 24,
            lg={6}
            md={12}
            sm={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <MainButton clickHandler={handleUpload} btnText="upload" />
          </Col>
        </Row>
        <CustomTab tabArray={tabArray} />
      </MainModal>
    </div>
  );
}
