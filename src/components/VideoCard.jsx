/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  console.log(videoId, snippet);
  return (
    <div>
      <Link to={videoId ? `/video/${videoId}` : "demoVideoUrl"}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      </Link>
      videocard
    </div>
  );
}

export default VideoCard;
