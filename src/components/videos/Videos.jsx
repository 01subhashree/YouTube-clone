/* eslint-disable react/prop-types */
import VideoCard from "../videoCard/VideoCard";
import style from "./Video.module.css";

export default function Videos({ videos }) {
  console.log(videos);
  return (
    <div className={style.videoContainer}>
      {videos &&
        videos.map((ele, index) => (
          <div key={index} className={style.videoCardContainer}>
            {ele.id.videoId && <VideoCard video={ele} />}
          </div>
        ))}
    </div>
  );
}
