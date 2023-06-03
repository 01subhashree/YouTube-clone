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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div className={style.VideoCardDiv}>
      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        style={{ textDecoration: "none" }}
      >
        <img
          className={style.img}
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
        />
        <p className={style.para}>
          {snippet?.title.slice(0, 70) || demoVideoTitle.slice(0, 60)}
        </p>
      </Link>
      <Link
        className={style.link}
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <CheckCircleOutlineIcon />
        <p>{snippet?.channelTitle || demoChannelTitle}</p>
      </Link>
      <VideoPublishTime publishDate={snippet?.publishedAt} />
    </div>
  );
}

export default VideoCard;
