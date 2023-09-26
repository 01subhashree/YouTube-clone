/* eslint-disable react/prop-types */
import VideoCard from "../videoCard/VideoCard";
import style from "./Video.module.css";

export default function Videos({ videos, isHome }) {
  return (
    <div className={isHome ? style.VideoCard : style.videoContainer}>
      {videos &&
        videos.map((video, index) => {
          if (video.id && video.id.videoId) {
            return (
              <div key={index} className={style.videoCardContainer}>
                <VideoCard video={video} />
              </div>
            );
          } else {
            return null; // Don't render anything if videoId is missing
          }
        })}
    </div>
  );
}
