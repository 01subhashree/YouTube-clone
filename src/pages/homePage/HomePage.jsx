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

  console.log(selectedCategory);
  return (
    <div className={style.MainContainer}>
      <div className={style.sideBar}>
        <SideBar setSelectedCategory={setSelectedCategory} />
      </div>
      <div className={style.homeContainer}>
        <span className={style.Container}>
          <CategoriesBar setSelectedCategory={setSelectedCategory} />
        </span>
        <span className={style.Container2}>
          <Videos videos={videos} />
        </span>
      </div>
    </div>
  );
}
