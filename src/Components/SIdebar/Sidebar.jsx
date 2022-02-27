import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { Box } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { NavLink } from "react-router-dom";

const drawerWidth = 280;
const navItem = [
  {
    menu: "Home",
    imgUrl: <HomeOutlinedIcon />,
    url:"/"
  },
  {
    menu: "Team Members",
    imgUrl: <GroupsOutlinedIcon />,
    url:"/team-members"
  },
  {
    menu: "Transaction History",
    imgUrl: <AccountBalanceWalletOutlinedIcon />,
    url:"/transaction-history"
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
        display: { xs: 'none', lg: 'block' },
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "64px",
          ...(props.toggle && { width: "65px" }),
          transition: "0.6s",
          backgroundColor: "transparent"
        },
      }}
      variant="permanent"
      anchor="left"
      toggle={props.toggle}
    >
      <Toolbar />
      <Divider />
      <List className="navbar-links">
        {navItem.map((val, index) => (
          <NavLink to={val.url} className="link" activeclassname="selected">
          <ListItem button key={val.menu} sx={{minWidth:"250px",my:1}}>
            <ListItemIcon sx={{minWidth:"50px"}}>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  boxShadow: "0px 2px 4px 0px #00000059",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:"#fff",
                  "& .MuiSvgIcon-fontSizeMedium":{
                    width:"22px",
                  },
                }}
              >
                {val.imgUrl}
              </Box>
            </ListItemIcon>
            <ListItemText
              primary={val.menu}
            />
          </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>


    {/* Mobile Viw */}
    <Drawer
      sx={{
        width: "0px",
        flexShrink: 0,
        ...(props.toggle && { width: "0px", display:"block" }),
        transition: "0.6s",
        display: { lg: 'none', xs: 'block' },
        "& .MuiDrawer-paper": {
          width: "0px",
          boxSizing: "border-box",
          marginTop: "64px",
          ...(props.toggle && { width: "240px", display:"block" }),
          transition: "0.6s",
          backgroundColor: "#fff"
        },
      }}
      variant="permanent"
      anchor="left"
      mobileOpen={props.mobileOpen}
    >
      <Toolbar />
      <Divider />
      <List className="navbar-links">
        {navItem.map((val, index) => (
          <NavLink to={val.url} className="link" activeclassname="selected">
          <ListItem button key={val.menu} sx={{minWidth:"250px",my:1}}>
            <ListItemIcon sx={{minWidth:"50px"}}>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  boxShadow: "0px 2px 4px 0px #00000059",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:"#fff",
                  "& .MuiSvgIcon-fontSizeMedium":{
                    width:"22px",
                  },
                }}
              >
                {val.imgUrl}
              </Box>
            </ListItemIcon>
            <ListItemText
              primary={val.menu}
            />
          </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
    </>
    
  );
}
