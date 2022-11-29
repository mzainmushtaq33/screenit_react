import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material";
import SubCard from "../cards/sub-card";
import MainButton from "../main-buttons/main-button";
import { cross_v1 } from "../../../services/svg/svg-icon";

const MainModal = ({
  children,
  onCloseHandler = () => {},
  open,
  titleText,
}) => {
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "90vh",
    overflow: "auto",
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    [theme.breakpoints.only("xs")]: {
      width: "98%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.only("md")]: {
      width: "75%",
    },
    [theme.breakpoints.only("lg")]: {
      width: "65%",
    },
    // p: 4
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ zIndex: 1300 }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <SubCard
            // sx={{ overflow: 'scroll' }}
            sx={{ border: "none", borderRadius: '20px', padding: '0 30px' }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1>{titleText ? titleText : "MainModal"}</h1>
              <MainButton
                clickHandler={onCloseHandler}
                wdt="auto"
                icon={cross_v1}
                btnText=""
                variant="btnTransparent"
              />
            </Box>
            {children}
          </SubCard>
        </Box>
      </Fade>
    </Modal>
  );
};

export default MainModal;
