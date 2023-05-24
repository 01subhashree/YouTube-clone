/* eslint-disable react/prop-types */
import VideoCard from "./VideoCard";

export default function Videos({ videos }) {
  console.log(videos);
  return (
    <div>
      <h2>video</h2>
      {videos &&
        videos.length != 0 &&
        videos.map((ele, index) => (
          <div key={index}>{ele.id.videoId && <VideoCard video={ele} />}</div>
        ))}
    </div>
  );
}
