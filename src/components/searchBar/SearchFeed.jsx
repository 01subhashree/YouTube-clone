import { useState } from "react";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchFees.module.css";

export default function SearchFeed() {
  return (
    <div>
      <Paper
        onSubmit={() => {}}
        component="form"
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          boxShadow: "none",
          pl: 2,
          display: "flex",
          gap: 1,
          justifyContent: "space-between",
          "@media (max-width: 700px)": {
            display: "flex",
          },
        }}
      >
        <input placeholder="Search..." className={style.inputBox} />
        <span className={style.search_icon_Box}>
          <SearchIcon
            sx={{
              fontSize: "2rem",
            }}
          />
        </span>
      </Paper>
    </div>
  );
}
