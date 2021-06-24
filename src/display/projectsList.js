const projectsList = document.createElement("div");
projectsList.classList.add("col-3", "border");
projectsList.setAttribute("id", "projects-list");

const list = document.createElement("ul");
projectsList.appendChild(list);


export default projectsList;