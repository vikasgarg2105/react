import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdebar/Sidebar";
import Box from "@mui/material/Box";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function Todo() {
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

  const [task, setTask] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  const [taskData, setTaskData] = useState([]);
  const addBtn = (e) => {
    e.preventDefault();
    setTaskData((oldtask) => {
      return [...oldtask, task];
    });
    setTask("");
  };
  const[check, setCheck]=useState(false);
  const checkIt =()=>{
    setCheck(!check);
  }

  const Delete =(id)=>{
    console.log(id);
    setTaskData((taskData)=>{
      return taskData.filter((value,index)=>{
        return index!==id;
      })
    })
  }
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
              <Box className="todo">
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Box sx={{textAlign:"center"}}><h2>TODO LIST</h2></Box>
                    <Box
                      sx={{
                        width: "500px",
                        maxWidth: "100%",
                        margin: "auto",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <TextField
                          fullWidth
                          label="Task"
                          id="fullWidth"
                          sx={{ width: "85%" }}
                          value={task}
                          onChange={handleTask}
                        />
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{ backgroundColor: "var(--primary)", p: 1 }}
                          onClick={addBtn}
                        >
                          <AddOutlinedIcon
                            sx={{ width: "2rem", height: "2rem" }}
                          />
                        </Button>
                      </Box>
                      <Box
                        sx={{ borderBottom: "1px solid #00000030", my: 4 }}
                      ></Box>
                      {taskData.map((val, index) => {
                        return (
                          <>
                            <Box
                            key={index}
                            id={index}
                              className="task-item"
                              sx={{
                                boxShadow: "0px 2px 8px 0px #00000030",
                                borderRadius: "8px",
                                my: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  py: 1,
                                  px: 2,
                                }}
                              >
                                <Box sx={{display:"flex", alignItems:"center"}}>
                                  <Checkbox onClick={checkIt} />
                                  <Box sx={{...(check && {textDecoration:"line-through"})}}>{val}</Box>
                                </Box>
                                <Box className="icons">
                                  <EditOutlinedIcon sx={{ mr: 1 }} />
                                  <DeleteOutlineOutlinedIcon onClick={()=>{
                                    Delete(index)
                                  }} />
                                </Box>
                              </Box>
                            </Box>
                          </>
                        );
                      })}
                    </Box>
                  </Grid>
                  <Grid xs={4}></Grid>
                </Grid>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
