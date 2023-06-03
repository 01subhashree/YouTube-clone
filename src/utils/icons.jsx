import SchoolIcon from "@mui/icons-material/School";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const sideBarData = [
  {
    icon: <WhatshotIcon sx={{ fontSize: "2rem" }} />,
    name: "Trending",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: "2rem" }} />,
    name: "Education",
  },
  {
    icon: <AudiotrackIcon sx={{ fontSize: "2rem" }} />,
    name: "Music",
  },
  {
    icon: <ShoppingBagIcon sx={{ fontSize: "2rem" }} />,
    name: "Shopping",
  },
  {
    icon: <LiveTvIcon sx={{ fontSize: "2rem" }} />,
    name: "Live",
  },
  {
    icon: <SportsEsportsIcon sx={{ fontSize: "2rem" }} />,
    name: "Sports",
  },
  {
    icon: <OndemandVideoIcon sx={{ fontSize: "2rem" }} />,
    name: "Movies",
  },
];

export default sideBarData;
