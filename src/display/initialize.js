import navbar from "./navbar";
import main from "./main";
import TodoProjectsController from "../todoProjectsController";

function initializeLayout() {
    document.body.appendChild(navbar);
    document.body.appendChild(main);
}

function populateProjectsList() {
    const list = document.querySelector("#projects-list ul");
    const projects = TodoProjectsController.getProjects();
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project.getTitle();
        list.appendChild(listItem);
    });
}


export { initializeLayout, populateProjectsList };