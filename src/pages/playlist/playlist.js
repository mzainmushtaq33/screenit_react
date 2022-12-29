import React from "react";
import CommonDataTable from "../../component/ui-components/commonDataTable/commonDataTable";
import InputComponent from "../../component/ui-components/formComponents/input";
import SelectComponent from "../../component/ui-components/formComponents/select";
import FullScreenModal from "../../component/ui-components/main-modals/full-screen-modal";
import CustomTab from "../../component/ui-components/tab/tab";
import { Box, Grid } from "@mui/material";
import img01 from "../../services/images/New folder/Screenshot_1.png";
import { next_v1, prev_v1 } from "../../services/svg/svg-icon";
import MainButton from "../../component/ui-components/main-buttons/main-button";
import { Typography } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGetMediaDataQuery } from "../../reduxToolKit/media/mediaService";
import { useSelector } from "react-redux";
import Audio from "../../services/images/audio.jpg";

export default function Playlist() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const { mediaType } = useSelector((state) => state.mediaSlice);
  console.log("mediaType sff", mediaType);
  let media =
    mediaType == "images"
      ? 1
      : mediaType == "audio"
      ? 2
      : mediaType == "videos"
      ? 3
      : mediaType == "documents"
      ? 4
      : 1;
  console.log("media", media);
  const pageSize = 8;
  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetMediaDataQuery({ media, pageSize });

  console.log("data daddkkdk", data);

  React.useEffect(() => {
    setPage(1);
  }, [mediaType]);

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
  };

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
      component: (
        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="createPlayListImgParent"
        >
          {data &&
            data?.data?.data?.map((item, i) => {
              return (
                <Grid
                  item
                  key={i}
                  xs={12}
                  md={6}
                  lg={3}
                  xl={2}
                  className="playlistImgWrap"
                >
                  <img
                    src={item?.path}
                    alt=""
                    style={{ height: "70px", width: "110px" }}
                  />
                </Grid>
              );
            })}
        </Grid>
      ),
    },
    // [...Array(8).keys()]
    {
      name: "Videos",
      key: "videos",
      component: (
        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="createPlayListImgParent"
        >
          {data &&
            data?.data?.data?.map((item, i) => {
              console.log("item", item);
              return (
                <Grid
                  item
                  key={i}
                  xs={12}
                  md={6}
                  lg={3}
                  xl={2}
                  className="playlistImgWrap"
                >
                  <Box sx={{ height: "70px", width: "110px" }}>
                    <video
                    height='70px'
                    width='110px'
                      controls="controls"
                      preload="metadata"
                    >
                      <source src={item?.path + "#t=0.5"} type="video/mp4" />
                    </video>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      ),
    },
    {
      name: "Audio",
      key: "audio",
      component: (
        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="createPlayListImgParent"
        >
          {[...Array(data && data?.data?.data?.length).keys()]?.map(
            (item, i) => {
              return (
                <Grid
                  item
                  key={i}
                  xs={12}
                  md={6}
                  lg={3}
                  xl={2}
                  className="playlistImgWrap"
                >
                  <img
                    src={Audio}
                    alt=""
                    // width={"100%"}
                    // height={height}
                    // style={{
                    //   borderRadius: "20px",
                    //   minHeight: "250px",
                    //   objectFit: "cover",
                    // }}
                    style={{ height: "70px", width: "110px" }}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      ),
    },
    // {
    //   name: "Documents",
    //   key: "documents",
    //   component: null,
    // },
    // {
    //   name: <span>Web&nbsp;Page</span>,
    //   key: "webpages",
    //   component: null,
    // },
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
        <Grid
          container
          rowSpacing={0}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ margin: "0px 0px 50px 0px" }}
        >
          <Grid item xs={12} md={5} lg={7} xl={7} className="">
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "100%" }}>
                <InputComponent
                  label="Playlist Name"
                  placeholder="Admin"
                  required
                  className="marginBtm"
                  labelStyle="playlist-input-label"
                />
              </Box>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              {/* <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} md={6} lg={6} xl={7} className=""> */}
              <Box sx={{ width: "100%" }}>
                <SelectComponent
                  items={countries}
                  onChange={changeHandler}
                  label="Total Size"
                  labelStyle="playlist-input-label"
                />
              </Box>
              {/* </Grid> */}
              {/* <Grid item xs={12} md={6} lg={6} xl={6} className="">
                <SelectComponent items={countries} onChange={changeHandler} label="Total time" />
              </Grid> */}
              {/* </Grid> */}
            </Box>
            <Box>
              <Typography>Media Type</Typography>
            </Box>
            <div>
              <CustomTab
                tabArray={tabArray}
                defaultActiveKey="images"
                style={{ fontSize: "12px", marginRight: "45px" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7} lg={5} xl={5} className="">
            <Box sx={{ paddingTop: "0px" }}>Preview</Box>
            <Box className="fullWidthGrayBox">
              <Box sx={{ width: "100%", paddingTop: "30px" }}>
                <Typography>Image</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid rgba(0, 0, 0, 0.24)",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    <Box>Image Preview</Box>
                  </Box>

                  <Box
                    sx={{
                      background: "#fff",
                      padding: "5px 45px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <Box>00:30</Box>
                  </Box>
                  <Box>
                    <Box>
                      <DeleteIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "100%", padding: "10px 0px" }}>
                <Typography>Video</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid rgba(0, 0, 0, 0.24)",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    <Box>Video Preview</Box>
                  </Box>

                  <Box
                    sx={{
                      background: "#fff",
                      padding: "5px 45px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <Box>00:30</Box>
                  </Box>
                  <Box>
                    <Box>
                      <DeleteIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography>Document</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      border: "1px solid rgba(0, 0, 0, 0.24)",
                      padding: "20px",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    <Box>Document Preview</Box>
                  </Box>

                  <Box
                    sx={{
                      background: "#fff",
                      padding: "5px 45px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <Box>00:30</Box>
                  </Box>
                  <Box>
                    <Box>
                      <DeleteIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* <p>Drag and Drop asset from the right or playlist from the left to here!</p> */}
            </Box>
          </Grid>
        </Grid>
        <div className="modalFooter">
          <div className="pagination">
            <span className="cmn_prev_next prev_btn">
              {prev_v1} <b>Prev</b>
            </span>
            <b className="curPage">1</b>
            <span className="cmn_prev_next next_btn">
              <b>Next</b> {next_v1}
            </span>
          </div>
          <div className="btnGrp">
            <MainButton
              clickHandler={() => nextPrevHandler("cancel")}
              icon=""
              btnText="Cancel"
              variant="outlinedDark"
              disabled
            />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <MainButton
              clickHandler={() => nextPrevHandler("next")}
              icon=""
              btnText="Submit"
              variant=""
            />
          </div>
        </div>
      </FullScreenModal>
    </div>
  );
}
