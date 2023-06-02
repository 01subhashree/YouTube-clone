/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./VideoCard.module.css";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/DemoFile";
import VideoPublishTime from "../PublishTime";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div className={style.VideoCardDiv}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          className={style.img}
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
        <p>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</p>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <p>{snippet?.channelTitle || demoChannelTitle}</p>
      </Link>
      <VideoPublishTime publishDate={snippet?.publishedAt} />
    </div>
  );
}

export default VideoCard;
