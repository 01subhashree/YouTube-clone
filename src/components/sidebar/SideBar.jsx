/* eslint-disable react/prop-types */
import { Button, Stack } from "@mui/material";
import sideBarData from "../../utils/icons";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const myStyle = {
  color: "black",
  gap: "0.5rem",
  width: "8.5rem",
  border: "1px solid",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "flex-start",
  "& hover": {
    borderRadius: "2rem",
    backgroundColor: "#909090",
  },
  // zIndex: -1,
};

export default function SideBar({ setSelectedCategory }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    // setSelectedCategory("Shorts");
    navigate("/shorts");
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Button sx={myStyle} onClick={() => setSelectedCategory("All")}>
        <HomeIcon />
        <p>Home</p>
      </Button>
      <Button sx={myStyle} onClick={clickHandler}>
        <HomeIcon />
        <p>Shorts</p>
      </Button>
      {sideBarData.map((ele) => (
        <Button
          sx={myStyle}
          key={ele.name}
          onClick={() => setSelectedCategory(ele.name)}
        >
          {ele.icon}
          <p>{ele.name}</p>
        </Button>
      ))}
    </Stack>
  );
}
