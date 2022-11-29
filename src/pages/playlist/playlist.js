import React from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import InputComponent from "../../component/ui-components/formComponents/input";
import SelectComponent from "../../component/ui-components/formComponents/select";
import FullScreenModal from "../../component/ui-components/main-modals/full-screen-modal";
import CustomTab from "../../component/ui-components/tab/tab";
import { Box, Grid } from "@mui/material";
import img01 from '../../services/images/New folder/Screenshot_1.png';
import { next_v1, prev_v1 } from "../../services/svg/svg-icon";
import MainButton from "../../component/ui-components/main-buttons/main-button";

export default function Playlist() {
  const [open, setOpen] = React.useState(false);
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

  const addPlaylist = () => {
    setOpen(true);
  }

  let countries = [
    "Bangladesh",
    "Bhutan",
    "India",
    "Maldive",
    "Nepal",
    "Pakistan",
    "Sri Lanka",
  ];

  let tabArray = [
    {
      name: "Images",
      key: "images",
      component:
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='createPlayListImgParent'>
          <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
            <img src={img01} alt="" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
            <img src={img01} alt="" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
            <img src={img01} alt="" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
            <img src={img01} alt="" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
            <img src={img01} alt="" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={4} className='playlistImgWrap'>
            <img src={img01} alt="" />
          </Grid>
        </Grid>
      ,
    },
    {
      name: "Videos",
      key: "videos",
      component: null,
    },
    {
      name: "Audio",
      key: "audio",
      component: null,
    },
    {
      name: "Document",
      key: "documents",
      component: null,
    },
    {
      name: <span>Web&nbsp;Page</span>,
      key: "webpages",
      component: null,
    },

  ];

  const nextPrevHandler = (e) => {
    console.log(e);
  };
  const changeHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      <CommonDataTable
        addBtnText="Add Playlist"
        addBtnClickHandler={addPlaylist}
        headers={headers}
        dataSource={dataSource}
        rowKey="serialNo"
        gridItem={{ img: "itemThumb", name: "itemName" }}
        editClickHandler={(item) => console.log("edit===>", item)}
        deleteClickHandler={(item) => console.log("delete===>", item)}
        duplicateClickHandler={(item) => console.log("duplicate===>", item)}
      />
      <FullScreenModal
        open={open}
        setOpen={setOpen}
        titleText="Create Playlist"
      >
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ margin: '30px 0' }}>
          <Grid item xs={12} md={5} lg={5} xl={5} className="">
            <InputComponent label="Playlist Name" placeholder="Admin" required className='marginBtm' />
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={6} lg={6} xl={6} className="">
                <SelectComponent items={countries} onChange={changeHandler} label="Total Size" />
              </Grid>
              <Grid item xs={12} md={6} lg={6} xl={6} className="">
                <SelectComponent items={countries} onChange={changeHandler} label="Total time" />
              </Grid>
            </Grid>
            <div>
              <CustomTab tabArray={tabArray} defaultActiveKey="images" />
            </div>
          </Grid>
          <Grid item xs={12} md={7} lg={7} xl={7} className="">
            <Box className="fullWidthGrayBox">
              <p>Drag and Drop asset from the right or playlist from the left to here!</p>
            </Box>
          </Grid>
        </Grid>
        <div className='modalFooter'>
          <div className='pagination'>
            <span className="cmn_prev_next prev_btn">
              {prev_v1} <b>Prev</b>
            </span>
            <b className='curPage'>1</b>
            <span className="cmn_prev_next next_btn">
              <b>Next</b> {next_v1}
            </span>
          </div>
          <div className='btnGrp'>
            <MainButton clickHandler={() => nextPrevHandler('cancel')} icon="" btnText="Cancel" variant="outlinedDark" disabled />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <MainButton clickHandler={() => nextPrevHandler('next')} icon="" btnText="Next" variant="" />
          </div>
        </div>
      </FullScreenModal>
    </div>
  );
}
