import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/FetchFromAPI";
import SideBar from "../../components/sidebar/SideBar";
import CategoriesBar from "../../components/category/CategoriesBar";
import style from "./HomePage.module.css";
import Videos from "../../components/videos/Videos";

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className={style.mainDiv}>
      <span>
        <SideBar />
      </span>
      <span>
        <CategoriesBar setSelectedCategory={setSelectedCategory} />
        <h1>HomePage</h1>
        <Videos videos={videos} />
      </span>
    </div>
  );
}
