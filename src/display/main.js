import projectsList from "./projectsList";
import projectDisplay from "./projectDisplay";

const row = document.createElement("div");
row.classList.add("row", "h-100");
row.appendChild(projectsList);
row.appendChild(projectDisplay);

const main = document.createElement("main");
main.style.height = "100vh";

main.appendChild(row);


export default main;