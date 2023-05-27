import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";

export default function VideoDetail() {
  const id = useParams();
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);
  console.log(id);

  return (
    <div>
      <h1>VideoDetail</h1>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
    </div>
  );
}
