import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../../utils/FetchFromAPI";
import SideBar from "../../../components/sidebar/SideBar";
import Videos from "../../../components/Videos";
import { useParams } from "react-router-dom";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div>
      <span>
        <SideBar />
      </span>
      <span>
        <h1>HomePage</h1>
        {searchTerm}
        <Videos videos={videos} />
      </span>
    </div>
  );
}
