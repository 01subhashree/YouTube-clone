import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Videos from "../../components/videos/Videos";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import style from "./VideoDetail.module.css";
import Loader from "../../components/Loader";
import VideoPublishTime from "../../components/PublishTime";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  // const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  console.log("this is video details", videoDetail);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className={style.videoDetailContainer}>
      <div className={style.videoDetailDiv}>
        <span className={style.react_player}>
          <ReactPlayer
            playing
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </span>
        <p className={style.para1}>{title}</p>
        <span className={style.innerDiv}>
          <span className={style.div1}>
            <Link to={`/channel/${channelId}`} className={style.Link}>
              {channelTitle}
            </Link>
            <span>
              {parseInt(viewCount).toLocaleString()} views
              <VideoPublishTime publishDate={publishedAt} />
            </span>
          </span>
          <button className={style.button}>
            <div className={style.like}>
              <ThumbUpAltIcon />
              <p>{parseInt(likeCount).toLocaleString()}</p>
            </div>
            <ThumbDownIcon />
          </button>
        </span>
      </div>
      <div className={style.videoContainer2}>
        <Videos videos={videos} direction="column" isHome="true" />
      </div>
    </div>
  );
};

export default VideoDetail;
