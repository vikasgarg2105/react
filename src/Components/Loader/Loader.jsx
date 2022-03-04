import React from "react";
import { ClapSpinner} from "react-spinners-kit";
import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/system";



export default function Loader(props) {
    
  return (
      <Box sx={{width:"100%", height:"90vh",zIndex:999,position:"sticky",display:"flex", alignItems:"center", justifyContent:"center"}}><ClapSpinner size={40} frontColor="#7928ca" loading={props.loading} /></Box>
    
  );
}
