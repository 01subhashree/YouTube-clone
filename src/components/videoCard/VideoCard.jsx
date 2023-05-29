/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../utils/DemoFile";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
        <p>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</p>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <p>{snippet?.channelTitle || demoChannelTitle}</p>
      </Link>
    </div>
  );
}

export default VideoCard;
