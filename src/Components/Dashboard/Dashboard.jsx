import * as React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdebar/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function Dashboard() {
  const[toggle,setToggle]=useState(false);
  const showEvent =()=>{
    if(toggle!==false){
      setToggle(false)
    }
    else{
      setToggle(true)
    }
  }
  return (
    <>
      <Navbar toggle={toggle} showEvent={showEvent} />
      <Box sx={{display:"flex", marginTop:"64px"}}>
        <Sidebar toggle={toggle} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box className="Dashboard">
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
          
        </Box>
        
        </Box>
        
      </Box>
      
    </>
  );
}
