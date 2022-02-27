import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Team from "./Components/Teammembers/Team";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team-members" element={<Team />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
      </Routes>
    </>
  );
}
