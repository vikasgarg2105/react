import * as React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdebar/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },{ name: "Page B", uv: 100, pv: 2400, amt: 2400 },{ name: "Page C", uv: 600, pv: 2400, amt: 2400 },{ name: "Page D", uv: 1400, pv: 2400, amt: 2400 },{ name: "Page E", uv: 800, pv: 2400, amt: 2400 }];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
export default function Dashboard() {
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
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" scale="point" padding={{ left: 60, right: 20 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
