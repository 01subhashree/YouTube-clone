import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import ShortsDetail from "../../components/shorts/ShortsDetail";
import style from "./Shorts.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const iconStyle = {
  position: "absolute",
  right: "2rem",
  backgroundColor: "#efeaea",
  padding: "0.5rem",
  fontSize: "3rem",
  borderRadius: "2rem",
  "@media (max-width: 600px)": {
    fontSize: "1.5rem",
    padding: "0.5rem",
  },
};

export default function Shorts() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const selectedCategory = "Shorts";

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  const nextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const previousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  console.log("videos", videos);

  return (
    <div className={style.Shorts_screen}>
      {videos &&
        videos.length !== 0 &&
        videos.map((ele, index) => (
          <div
            key={index}
            style={{ display: index === currentVideoIndex ? "block" : "none" }}
          >
            <ShortsDetail video={ele} />
          </div>
        ))}

      {videos && videos.length > 1 && (
        <div>
          {currentVideoIndex > 0 && (
            <KeyboardArrowUpIcon
              style={{ top: 0 }}
              sx={iconStyle}
              onClick={previousVideo}
            />
          )}
          <KeyboardArrowDownIcon
            style={{ bottom: 0 }}
            sx={iconStyle}
            onClick={nextVideo}
          />
        </div>
      )}
    </div>
  );
}
