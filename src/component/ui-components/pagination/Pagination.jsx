import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useTheme, styled } from '@mui/material/styles';

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles((theme) => ({
//   ul: {
//     "& .MuiPaginationItem-root": {
//       color: "#fff",
//       backgroundColor: "#43346C",
//       fontWeight: "600",
//       fontSize: "14px",
//       fontFamily: "Montserrat",
//     },
    // "& .Mui-selected": {
    //   backgroundColor: "#F9CF7B",
    //   color: "#000",
    //   fontWeight: "bold",
    //   fontSize: "14px",
    //   fontFamily: "Montserrat",
    //   "&:hover": {
    //     backgroundColor: "#F9CF7B !important",
    //   },
    // },
//   },
//   ResultCount: {
//     fontFamily: "Montserrat",
//     fontWeight: "500",
//     color: "#fff",
//     fontSize: "13px",
//   },
//   "@media (max-width: 600px)": {
//     ResultCount: {
//       textAlign: "center",
//       marginBottom: "18px",
//     },
//   },
// }));
const LeftText = styled('Box')(({ theme }) => ({
    // fontFamily: "Montserrat",
        fontWeight: "500",
        color: "black",
        fontSize: "13px",
}));

export default function CustomPagination({
  pageNo,
  pageSize,
  totalCounts,
  totalItems,
  handleChangePage,
}) {
  // debugger;
//   const classes = useStyles();
  // const [pageNo, setPageNo] = useState(1);

  // const change = (event, value) => {
  //   setPageNo(value);
  // };
  return (
    <Grid container xs={12} sx={{ paddingTop: "20px" }}>
      <Grid item md={6} sm={12} xs={12}>
        <LeftText 
        // className={classes.ResultCount}
        >
          Showing&#160;{pageNo * pageSize - pageSize + 1} - &#160;
          {pageNo * pageSize - pageSize + totalItems} out of &#160;
          {totalCounts}
        </LeftText>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <Box>
          <Stack spacing={2}>
            {/* <Pagination count={10} shape="rounded" /> */}
            {/* count={Math.round(totalCounts / pageSize)} */}
            <Pagination
              count={Math.ceil(totalCounts / pageSize)}
              variant="outlined"
              shape="circular"
            //   color="red"
            //   classes={{ ul: classes.ul }}
              page={pageNo}
              onChange={handleChangePage}
            />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
