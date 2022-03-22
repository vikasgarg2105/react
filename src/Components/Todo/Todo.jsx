import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdebar/Sidebar";
import Box from "@mui/material/Box";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function Todo() {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = React.useState(false);
  let [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState({ Edit: false, editId: "" });
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]);
  const [check, setCheck] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [taskagain, setTaskAgain] = useState(true);

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

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addBtn = (e) => {
    e.preventDefault();
    if (!task) {
    } else {
      const newInputData = { id: new Date().getTime().toString(), name: task };
      // console.log(newInputData);
      setTaskData([...taskData, newInputData]);
      setTask("");
    }
  };

  const checkIt = (id) => {
    taskData.find((value) => {
      setCheck(!check);
    });
  };
  const Delete = (index) => {
    setTaskData((taskData) => {
      const updatedTask = taskData.filter((value) => {
        return value.id !== index;
      });
      setTaskData(updatedTask);
    });
  };

  const editHandle = (Eid,Eval) => {
    console.log(Eval);
    setEditTask(Eval.name);
    console.log(editTask);
    setEdit({ Edit: !edit.Edit, editId: Eid });
    console.log(Eid);
    const getIndex = taskData.findIndex(x=>x.id===Eid);
    console.log(getIndex);
    console.log(taskData);
    taskData[getIndex]={id:Eid ,name:editTask};
    console.log(taskData);
    // console.log(editTask);
  };

  const handleTaskAgain = (e) => {
    let editTasknew = e.target.value;
    if (editTasknew) {
      setTaskAgain(false);
    }
    setEditTask(editTasknew);
    // console.log(edit.editId);
    // console.log(editTasknew);
    // console.log(taskData);

    // console.log(edit.editId);
    
    // console.log(taskData);
  };
  console.log(taskData);
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
                    <Box sx={{ textAlign: "center" }}>
                      <h2>TODO LIST</h2>
                    </Box>
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
                          sx={{ width: "85%", backgroundColor: "var(--white)" }}
                          value={task}
                          onChange={handleTask}
                          autoComplete="off"
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
                      <Box>
                        {taskData.length !== 0 ? (
                          <>
                            {taskData.map((val) => {
                              return (
                                <>
                                  <Box
                                    key={val.id}
                                    id={val.id}
                                    className="task-item"
                                    sx={{
                                      boxShadow: "0px 2px 8px 0px #00000030",
                                      borderRadius: "8px",
                                      backgroundColor: "var(--white)",
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
                                      {edit.editId == val.id ? (
                                        <>
                                          <TextField
                                            fullWidth
                                            label="Task"
                                            id="fullWidth"
                                            sx={{
                                              width: "85%",
                                              backgroundColor: "var(--white)",
                                            }}
                                            value={
                                              taskagain ? val.name : editTask
                                            }
                                            onChange={handleTaskAgain}
                                          />
                                          <Button
                                            variant="contained"
                                            type="submit"
                                            sx={{
                                              backgroundColor: "var(--primary)",
                                              p: 1,
                                            }}
                                            onClick={setEdit}
                                          >
                                            Done
                                          </Button>
                                        </>
                                      ) : (
                                        <>
                                          <Box
                                            sx={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}
                                          >
                                            <Checkbox
                                              onClick={() => {
                                                checkIt(val.id);
                                              }}
                                            />
                                            <Box
                                              sx={{
                                                ...(check && {
                                                  textDecoration:
                                                    "line-through",
                                                }),
                                              }}
                                            >
                                              {val.name}
                                            </Box>
                                          </Box>
                                          <Box className="icons">
                                            <EditOutlinedIcon
                                              sx={{ mr: 1 }}
                                              onClick={() => {
                                                editHandle(val.id, val);
                                              }}
                                            />
                                            <DeleteOutlineOutlinedIcon
                                              onClick={() => {
                                                Delete(val.id);
                                              }}
                                            />
                                          </Box>
                                        </>
                                      )}
                                    </Box>
                                  </Box>
                                </>
                              );
                            })}
                          </>
                        ) : (
                          <Box sx={{ textAlign: "center" }}>
                            <p>No task is here</p>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
