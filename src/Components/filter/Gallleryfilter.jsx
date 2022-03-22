import * as React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdebar/Sidebar";
import Box from "@mui/material/Box";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import Data from './Data'

export default function Gallleryfilter() {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const showEvent = () => {
    if (toggle !== false) {
      setToggle(false);
    } else {
      setToggle(true);
      setOpen(false);
    }
  };
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <>
      <Navbar toggle={toggle} showEvent={showEvent} />
      <Box sx={{ display: "flex", marginTop: "64px" }}>
        <Sidebar toggle={toggle} open={open} handleClick={handleClick} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Box className="Dashboard">
                <h3>Gallery</h3>
                <hr />
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--secondary)",
                      m: 1,
                    }}
                  >
                    ALl
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--secondary)",
                      m: 1,
                    }}
                  >
                    Honey
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--secondary)",
                      m: 1,
                    }}
                  >
                    Dabur
                  </Button>
                </Box>
                <Box className="gallery-items">
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box className="gallery-item">
                            <h4>Vikas Garg</h4>
                            <p>Vikas Garg</p>
                            <span>Category</span>
                            </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
