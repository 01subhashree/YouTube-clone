/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import style from "./ShortsDetail.module.css";

const iconStyle = {
  backgroundColor: "#efeaea",
  width: "2rem",
  height: "2rem",
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "2rem",
  "@media (max-width: 600px)": {
    width: "1.5rem",
    height: "1.5rem",
    padding: "0.5rem",
  },
};

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
        <span className={style.innerDiv}>
          <ThumbUpAltIcon sx={iconStyle} />
          {likeCount}
        </span>
        <span className={style.innerDiv}>
          <ThumbDownIcon sx={iconStyle} />
          <p>Dislike</p>
        </span>
        <span className={style.innerDiv}>
          <SpeakerNotesIcon sx={iconStyle} />
          {commentCount}
        </span>
      </span>
    </div>
  );
};

export default ShortsDetail;
