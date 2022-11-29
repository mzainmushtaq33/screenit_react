import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports

import * as slug from "../../../routes/slug.js";

// assets
import {
  IconChevronDown,
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons";

import Transitions from "../../ui-components/extended/Transitions";
import MainCard from "../../ui-components/cards/main-card";
import SubCard from "../../ui-components/cards/sub-card.jsx";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);
  const handleLogout = async () => {
    localStorage.removeItem("userInfo_digitallive24");
    window.location.href = slug.LOGIN;
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = "") => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== "") {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          border: "none",
          backgroundColor: "transparent",
        }}
        icon={
          <Box className="profile_parent">
            <IconUser
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              stroke={1.5}
              size="1.5rem"
            />
            <span className="dNoneMobile">Admin</span>
            <IconChevronDown
              stroke={1.5}
              size="1.5rem"
              className="dNoneMobile"
            />
          </Box>
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        sx={{ zIndex: 10 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <Box sx={{ p: 2, display: "none" }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Welcome&nbsp;</Typography>
                      </Stack>
                    </Stack>
                    <Divider />
                  </Box>
                  <PerfectScrollbar
                    style={{
                      height: "150px",
                      width: "130px",
                      // maxHeight: "calc(92vh - 250px)",
                      // overflowX: "hidden",
                    }}
                  >
                    <Box sx={{ p: 0 }}>
                      <List
                        component="nav"
                        sx={{
                          // width: "100px",
                          // maxWidth: 350,
                          // minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: "10px",
                          // [theme.breakpoints.down("md")]: {
                          //   minWidth: "100%",
                          // },
                          "& .MuiListItemButton-root": {
                            mt: 0.5,
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{ borderRadius: ``, paddingTop: 0, paddingBottom: 0 }}
                          selected={selectedIndex === 0}
                          onClick={(event) =>
                            handleListItemClick(event, 0, slug?.ACCOUNT_PROFILE)
                          }
                        >
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="title">
                                Profile
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: ``, paddingTop: 0, paddingBottom: 0 }}
                          selected={selectedIndex === 1}
                          onClick={(event) =>
                            handleListItemClick(
                              event,
                              1,
                              slug?.ACCOUNT_SETTINGS
                            )
                          }
                        >
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <IconSettings size="20px" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="title">
                                Setting
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: ``, paddingTop: 0, paddingBottom: 0 }}
                          selected={selectedIndex === 2}
                          onClick={(event) =>
                            handleListItemClick(event, 2, slug?.USERS)
                          }
                        >
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="title">Users</Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{ borderRadius: ``, paddingTop: 0, paddingBottom: 0 }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon sx={{ minWidth: '30px' }}>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="title">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
