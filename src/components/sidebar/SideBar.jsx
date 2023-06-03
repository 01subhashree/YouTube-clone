/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import sideBarData from "../../utils/icons";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";

const myStyle = {
  color: "black",
  gap: "0.5rem",
  width: "8.5rem",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "flex-start",
  "& hover": {
    width: "9rem",
    borderRadius: "2rem",
    backgroundColor: "black",
    height: "3.5rem",
    padding: "1rem",
  },
};

export default function SideBar({ setSelectedCategory }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    // setSelectedCategory("Shorts");
    navigate("/shorts");
  };

  return (
    <div className={styles.sidebarContainer}>
      <Button sx={myStyle} onClick={() => setSelectedCategory("New")}>
        <HomeIcon sx={{ fontSize: "2rem" }} />
        <p className={styles.para}>Home</p>
      </Button>
      <Button sx={myStyle} onClick={clickHandler}>
        <VideoCameraBackIcon sx={{ fontSize: "2rem" }} />
        <p className={styles.para}>Shorts</p>
      </Button>
      {sideBarData.map((ele) => (
        <Button
          sx={myStyle}
          key={ele.name}
          onClick={() => setSelectedCategory(ele.name)}
        >
          {ele.icon}
          <p className={styles.para}>{ele.name}</p>
        </Button>
      ))}
    </div>
  );
}
