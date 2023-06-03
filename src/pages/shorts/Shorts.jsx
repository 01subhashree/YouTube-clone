import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import ShortsDetail from "../../components/shorts/ShortsDetail";

const myStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default function Shorts() {
  const [videos, setVideos] = useState([]);
  const selectedCategory = "Shorts";

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  console.log(videos);

  return (
    <div style={{ ...myStyle }}>
      {videos &&
        videos.length !== 0 &&
        videos.map((ele, index) => (
          <span key={index}>
            <ShortsDetail video={ele} />
          </span>
        ))}
    </div>
  );
}
