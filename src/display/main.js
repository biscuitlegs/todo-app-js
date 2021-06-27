import projectsList from "./projectsList";
import projectDisplay from "./projectDisplay";

const row = document.createElement("div");
row.classList.add("row");
row.appendChild(projectsList);
row.appendChild(projectDisplay);

const main = document.createElement("main");

main.appendChild(row);


export default main;