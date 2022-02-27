import * as React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdebar/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function TransactionHistory() {
  const[toggle,setToggle]=useState(false)
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
            Transaction History
          </Typography>
          
        </Box>
        
        </Box>
        
      </Box>
      
    </>
  );
}
