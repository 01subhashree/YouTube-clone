/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/DemoFile";
import style from "./ChannelCard.module.css";

export default function ChannelCard({ channelDetail }) {
  console.log("channel card", channelDetail);
  return (
    <div className={style.ChannelCardDiv}>
      <img
        className={style.ChannelCardimg}
        src={
          channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
        }
        alt={channelDetail?.snippet?.title}
      />
    </div>
  );
}
