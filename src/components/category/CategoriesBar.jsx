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
  "Live",
  "Bengali Songs",
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
    <div>
      {buttons.map((ele, index) => (
        <span key={index}>
          <button onClick={() => setSelectedCategory(ele)}>{ele}</button>
        </span>
      ))}
    </div>
  );
}
