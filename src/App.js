import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Team from "./Components/Teammembers/Team";
import Todo from "./Components/Todo/Todo";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team-members" element={<Team />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}
