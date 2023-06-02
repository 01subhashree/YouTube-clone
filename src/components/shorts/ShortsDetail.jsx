/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import style from "./ShortsDetail.module.css";

const ShortsDetail = ({ video }) => {
  if (!video || !video.id || !video.id.videoId) {
    return <div>No video available</div>;
  }
  const id = video.id.videoId;
  const [videoDetail, setVideoDetail] = useState(null);
  const commentCount = videoDetail?.statistics?.commentCount;
  const likeCount = videoDetail?.statistics?.likeCount;

  console.log("this is video details", id);
  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0])
    );
  }, [id]);

  console.log("this is video details", videoDetail);

  return (
    <div className={style.mainContainer_Shorts}>
      <span className={style.Div1}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          className={style.videoDiv_shorts}
        />
      </span>

      <span className={style.Div2}>
        <span>
          <ThumbUpAltIcon />
          {likeCount}
        </span>
        <ThumbDownIcon />
        <span>
          <SpeakerNotesIcon />
          {commentCount}
        </span>
      </span>
    </div>
  );
};

export default ShortsDetail;
