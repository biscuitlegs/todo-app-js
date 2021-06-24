const projectsList = document.createElement("div");
projectsList.classList.add("col-3", "border", "p-0");
projectsList.setAttribute("id", "projects-list");

const title = document.createElement("h2");
title.classList.add("text-center", "m-2")
title.textContent = "Projects";
projectsList.appendChild(title);

const list = document.createElement("ul");
list.classList.add("list-group");
projectsList.appendChild(list);


export default projectsList;