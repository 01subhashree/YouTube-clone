/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/DemoFile";

export default function ChannelCard({ channelDetail }) {
  console.log("channel card", channelDetail);
  return (
    <div>
      <img
        style={{ width: "100px" }}
        src={
          channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
        }
        alt={channelDetail?.snippet?.title}
      />
    </div>
  );
}
