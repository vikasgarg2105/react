import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/pagination";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const[error,setError]=useState({
    username: "",
    password: "",
  })
  const[data,setData] = useState([]);
  var newData = {...input};
  const handleSubmit = (e) => {
    e.preventDefault();
    
    var newData = {...input};
    
    console.log(newData);   
    setData([...data, newData]);
    console.log(data);

    if(newData.username.length === 0 && newData.password.length === 0){
      setError({username:"Please fill the required fields", password:"Please fill the required fields"});
    }else if(newData.password.length<5){
      setError({password:"password must be 5 characters"});
    }else if(newData.username !== "admin" && newData.password !== "12345"){
      setError({username:"Please enter valid username id",password:"You Entered wrong pasword"});
    }else if(newData.username !== "admin" && newData.password === "12345"){
      setError({username:"Please enter valid username id"});
    }else if(newData.username === "admin" && newData.password !== "12345"){
      setError({password:"You Entered wrong pasword"});
    }else{
      setError({username:"", password:""});
    } 
    setInput({username:"",password:""});  
  };
  return (
    <>
      <Box className="login-page">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box
                sx={{
                  background: "var(--primary-gradient)",
                  height: "100vh",
                  color: "var(--white)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Box sx={{ maxWidth: "500px", margin: "auto", mb: 6 }}>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/login.png"
                        }
                        alt=""
                        className="img-fluid"
                      />
                      <Box sx={{ textAlign: "center" }}>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </Box>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box sx={{ maxWidth: "500px", margin: "auto" }}>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/login.png"
                        }
                        alt=""
                        className="img-fluid"
                      />
                      <Box sx={{ textAlign: "center" }}>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </Box>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Box
                  className="login-container"
                  sx={{
                    width: "100%",
                    maxWidth: "360px",
                    boxShadow: "0px 0px 18px rgba(0, 29, 56, 0.18);",
                    backgroundColor: "var(--white)",
                    padding: "40px 35px",
                    boxSizing: "border-box",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "24px",
                      letterSpacing: "0.3px",
                      fontWeight: "600",
                      textAlign: "center",
                      mb: 2,
                      color: "var(--primary)",
                    }}
                    variant="h1"
                    component="h1"
                    gutterBottom
                  >
                    Login to Dashboard
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { width: "100%" },
                    }}
                    Validate
                    autoComplete="off"
                    action="/"
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      type="text"
                      id="username"
                      label="Username"
                      value={input.username}
                      size="small"
                      sx={{ mt: 3 }}
                      name="username"
                      onChange={handleInput}
                    />
                    <Box sx={{color:"#f00"}}>{error.username}</Box>
                    <TextField
                      type="password"
                      id="password"
                      label="Password"
                      value={input.password}
                      size="small"
                      sx={{ mt: 3 }}
                      name="password"
                      onChange={handleInput}
                    />
                    <Box sx={{color:"#f00"}}>{error.password}</Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        my: 2,
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Remember Me"
                        />
                      </FormGroup>
                      <Box>
                        <Link to="/">Forgot Password?</Link>
                      </Box>
                    </Box>
                    {newData.username === "admin" && newData.password === "12345"?
                    <Link to={'/dashboard'}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        width: "100%",
                        backgroundColor: "var(--secondary)",
                      }}
                    >
                      Login
                    </Button>
                    </Link>
                    : <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      backgroundColor: "var(--secondary)",
                    }}
                  >
                    Login
                  </Button> }
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
