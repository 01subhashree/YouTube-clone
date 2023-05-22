import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import SideBar from "../components/sidebar/SideBar";

export default function HomePage() {
  return (
    <div>
      <SideBar />
      <h1>HomePage</h1>
    </div>
  );
}
