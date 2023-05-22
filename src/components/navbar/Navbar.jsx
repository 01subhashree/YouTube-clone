import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import style from "./NavBar.module.css";
import SearchFeed from "../searchBar/SearchFeed";

const myStyle = {
  width: "2rem",
  height: "2rem",
  padding: "0.5rem",
  borderRadius: "2rem",
  "&:hover": { backgroundColor: "#909090" },
};

export default function Navbar() {
  return (
    <div className={style.MainNav_container}>
      <span className={style.container1}>
        <MenuIcon sx={{ ...myStyle }} />
        <span className={style.inner_container1}>
          <YouTubeIcon sx={{ color: "red", fontSize: "2rem" }} />
          <p>YouTube</p>
        </span>
      </span>
      <SearchFeed />
      <span className={style.container2}>
        <VideoCallIcon sx={{ ...myStyle }} />
        <NotificationsIcon sx={{ ...myStyle }} />
        <AccountCircleIcon sx={{ fontSize: "2.5rem" }} />
      </span>
    </div>
  );
}
