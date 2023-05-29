import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "../../components/videos/Videos";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import Loader from "../../components/Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  console.log("this is video details", videoDetail);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      {title}
      <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
      {parseInt(viewCount).toLocaleString()} views
      {parseInt(likeCount).toLocaleString()} likes
      <Videos videos={videos} direction="column" />
    </>
  );
};

export default VideoDetail;
