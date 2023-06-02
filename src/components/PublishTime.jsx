/* eslint-disable react/prop-types */

const VideoPublishTime = ({ publishDate }) => {
  const currentDate = new Date();
  const videoPublishDate = new Date(publishDate);

  const timeDiff = Math.abs(currentDate - videoPublishDate);
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

  let displayTime;
  if (minutesDiff < 1) {
    displayTime = "Just now";
  } else if (minutesDiff < 60) {
    displayTime = `${minutesDiff} minute${minutesDiff === 1 ? "" : "s"} ago`;
  } else if (hoursDiff < 24) {
    displayTime = `${hoursDiff} hour${hoursDiff === 1 ? "" : "s"} ago`;
  } else if (daysDiff < 30) {
    displayTime = `${daysDiff} day${daysDiff === 1 ? "" : "s"} ago`;
  } else if (monthsDiff < 12) {
    displayTime = `${monthsDiff} month${monthsDiff === 1 ? "" : "s"} ago`;
  } else {
    displayTime = `${yearsDiff} year${yearsDiff === 1 ? "" : "s"} ago`;
  }

  return <span>{displayTime}</span>;
};

export default VideoPublishTime;
