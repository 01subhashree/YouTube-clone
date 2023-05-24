/* eslint-disable react/prop-types */
import style from "./CategoriesBar.module.css";

const buttons = [
  "New",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
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
