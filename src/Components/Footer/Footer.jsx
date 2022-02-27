import React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box sx={{ position: "fixed", bottom: "0" }}>
        <Box sx={{ borderTop: "1px solid black" }}></Box>
        <p>Footer</p>
      </Box>
    </>
  );
}
