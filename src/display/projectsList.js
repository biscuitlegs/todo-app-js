import newProjectForm from "./newProjectForm";

const projectsList = document.createElement("div");
projectsList.style.minWidth = "250px";
projectsList.classList.add("col-sm-3", "border", "p-0", "pt-3");
projectsList.setAttribute("id", "projects-list");

const header = document.createElement("div");
header.classList.add("row", "align-items-center", "mb-1", "me-lg-1");

const headerLeft = document.createElement("div");
headerLeft.classList.add("col-lg-8");

const headerRight = document.createElement("div");
headerRight.classList.add("col-lg");

const title = document.createElement("h2");
title.classList.add("text-center");
title.textContent = "Projects";

const newProjectButton = document.createElement("button");
newProjectButton.classList.add("btn", "btn-success", "w-100", "my-3");
newProjectButton.setAttribute("type", "button");
newProjectButton.setAttribute("data-bs-toggle", "collapse");
newProjectButton.setAttribute("data-bs-target", "#new-project-form");
newProjectButton.setAttribute("id", "new-project-button");
newProjectButton.textContent = "New";

const list = document.createElement("ul");
list.classList.add("list-group");


headerLeft.appendChild(title);
headerRight.appendChild(newProjectButton);

header.appendChild(headerLeft);
header.appendChild(headerRight);

projectsList.appendChild(header);
projectsList.appendChild(newProjectForm);
projectsList.appendChild(list);


export default projectsList;