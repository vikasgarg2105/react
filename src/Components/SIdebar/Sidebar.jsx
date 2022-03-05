import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const drawerWidth = 280;
const navItem = [
  {
    id: "1",
    menu: "Dashboard",
    imgUrl: <HomeOutlinedIcon />,
    url: "/dashboard",
  },
  {
    id: "2",
    menu: "Invoice",
    imgUrl: <DescriptionOutlinedIcon />,
    url: "/team-members",
  },
  {
    id: "3",
    menu: "Leave",
    imgUrl: <EventBusyOutlinedIcon />,
    url: "/transaction-history",
  },
  {
    id: "4",
    menu: "Todo",
    imgUrl: <FormatListBulletedIcon />,
    url: "/todo",
  },
  {
    id: "5",
    menu: "Events",
    imgUrl: <AccountBalanceWalletOutlinedIcon />,
    url: "",
    submenu: {
      submenuitem: [
        {
          menu: "submenu",
          imgUrl: <AccountBalanceWalletOutlinedIcon />,
          url: "/transaction-history",
        },
        {
          menu: "val",
          imgUrl: <AccountBalanceWalletOutlinedIcon />,
          url: "/transaction-historyy",
        },
      ],
    },
  },
];

export default function Sidebar(props) {
  return (
    <>
      {/* Desktop */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          ...(props.toggle && { width: "65px" }),
          transition: "0.6s",
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px",
            ...(props.toggle && { width: "65px" }),
            transition: "0.6s",
            backgroundColor: "transparent",
          },
        }}
        variant="permanent"
        anchor="left"
        toggle={Boolean(props.toggle)}
      >
        <Toolbar />
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="navbar-links"
        >
          {navItem.map((val, index) => (
            <>
              {val.submenu ? (
                <>
                  <ListItemButton
                    onClick={props.handleClick}
                    sx={{ minWidth: "250px", my: 1 }}
                  >
                    <ListItemIcon sx={{ minWidth: "50px" }}>
                      <Box
                        sx={{
                          width: "32px",
                          height: "32px",
                          boxShadow: "0px 2px 4px 0px #00000059",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          "& .MuiSvgIcon-fontSizeMedium": {
                            width: "22px",
                          },
                        }}
                      >
                        {val.imgUrl}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={val.menu} />
                    {props.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={props.open} timeout="auto" unmountOnExit>
                    {val.submenu.submenuitem.map((value, index) => (
                      <>
                        <Box component="div" disablePadding>
                          <NavLink
                            to={value.url}
                            className="link"
                            activeclassname="selected"
                          >
                            <ListItemButton
                              sx={{ pl: 4, minWidth: "250px", my: 1 }}
                            >
                              <ListItemIcon sx={{ minWidth: "50px" }}>
                                <Box
                                  sx={{
                                    width: "32px",
                                    height: "32px",
                                    boxShadow: "0px 2px 4px 0px #00000059",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                    "& .MuiSvgIcon-fontSizeMedium": {
                                      width: "22px",
                                    },
                                  }}
                                >
                                  {value.imgUrl}
                                </Box>
                              </ListItemIcon>
                              <ListItemText primary={value.menu} />
                            </ListItemButton>
                          </NavLink>
                        </Box>
                      </>
                    ))}
                  </Collapse>
                </>
              ) : (
                <NavLink
                  to={val.url}
                  className="link"
                  activeclassname="selected"
                >
                  <ListItemButton sx={{ minWidth: "250px", my: 1 }}>
                    <ListItemIcon sx={{ minWidth: "50px" }}>
                      <Box
                        sx={{
                          width: "32px",
                          height: "32px",
                          boxShadow: "0px 2px 4px 0px #00000059",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          "& .MuiSvgIcon-fontSizeMedium": {
                            width: "22px",
                          },
                        }}
                      >
                        {val.imgUrl}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={val.menu} />
                  </ListItemButton>
                </NavLink>
              )}
            </>
          ))}
        </List>
      </Drawer>

      {/* Mobile Viw */}
      <Drawer
        sx={{
          width: "0px",
          flexShrink: 0,
          ...(props.toggle && { width: "0px", display: "block" }),
          transition: "0.6s",
          display: { lg: "none", xs: "block" },
          "& .MuiDrawer-paper": {
            width: "0px",
            boxSizing: "border-box",
            marginTop: "52px",
            ...(props.toggle && { width: "280px", display: "block" }),
            transition: "0.6s",
            backgroundColor: "#fff",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="navbar-links"
        >
          {navItem.map((val, index) => (
            <>
              {val.submenu ? (
                <>
                  <ListItemButton
                    onClick={props.handleClick}
                    sx={{ minWidth: "250px", my: 1 }}
                    key={val.id}
                  >
                    <ListItemIcon sx={{ minWidth: "50px" }}>
                      <Box
                        sx={{
                          width: "32px",
                          height: "32px",
                          boxShadow: "0px 2px 4px 0px #00000059",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          "& .MuiSvgIcon-fontSizeMedium": {
                            width: "22px",
                          },
                        }}
                      >
                        {val.imgUrl}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={val.menu} />
                    {props.open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={props.open} timeout="auto" unmountOnExit>
                    {val.submenu.submenuitem.map((value, index) => (
                      <>
                        <Box component="div" key={value.id} disablePadding>
                          <NavLink
                            to={value.url}
                            className="link"
                            activeclassname="selected"
                          >
                            <ListItemButton
                              sx={{ pl: 4, minWidth: "250px", my: 1 }}
                            >
                              <ListItemIcon sx={{ minWidth: "50px" }}>
                                <Box
                                  sx={{
                                    width: "32px",
                                    height: "32px",
                                    boxShadow: "0px 2px 4px 0px #00000059",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#fff",
                                    "& .MuiSvgIcon-fontSizeMedium": {
                                      width: "22px",
                                    },
                                  }}
                                >
                                  {value.imgUrl}
                                </Box>
                              </ListItemIcon>
                              <ListItemText primary={value.menu} />
                            </ListItemButton>
                          </NavLink>
                        </Box>
                      </>
                    ))}
                  </Collapse>
                </>
              ) : (
                <NavLink
                  to={val.url}
                  className="link"
                  activeclassname="selected"
                >
                  <ListItemButton sx={{ minWidth: "250px", my: 1 }}>
                    <ListItemIcon sx={{ minWidth: "50px" }}>
                      <Box
                        sx={{
                          width: "32px",
                          height: "32px",
                          boxShadow: "0px 2px 4px 0px #00000059",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          "& .MuiSvgIcon-fontSizeMedium": {
                            width: "22px",
                          },
                        }}
                      >
                        {val.imgUrl}
                      </Box>
                    </ListItemIcon>
                    <ListItemText primary={val.menu} />
                  </ListItemButton>
                </NavLink>
              )}
            </>
          ))}
        </List>
      </Drawer>
    </>
  );
}
