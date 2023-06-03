/* eslint-disable react/prop-types */
import style from "./CategoriesBar.module.css";

const buttons = [
  "All",
  "React js",
  "Angular js",
  "Gaming",
  "Music",
  "Redux",
  "Music",
  "Algorithm Art ",
  "k-drama",
  "South Movies",
  "Coding",
  "Cricket",
  "Football",
  "Romantic comedies",
  "Gatsby",
  "K-Pop",
  "Shwetabh",
];

export default function CategoriesBar({ setSelectedCategory }) {
  return (
    <div className={style.CategoriesBar}>
      {buttons.map((ele, index) => (
        <span key={index}>
          <button
            className={style.btn}
            onClick={() => setSelectedCategory(ele)}
          >
            {ele}
          </button>
        </span>
      ))}
    </div>
  );
}
