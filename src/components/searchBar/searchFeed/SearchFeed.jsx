import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../utils/FetchFromAPI";
import SideBar from "../../../components/sidebar/SideBar";
import Videos from "../../../components/videos/Videos";
import { useParams } from "react-router-dom";
import Style from "./SearchFeed.module.css";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className={Style.maindiv_searchfeed}>
      <span className={Style.sideBar}>
        <SideBar />
      </span>
      <span className={Style.mainContainer}>
        <h1>{searchTerm}</h1>
        <Videos videos={videos} />
      </span>
    </div>
  );
}
