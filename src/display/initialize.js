import navbar from "./navbar";
import main from "./main";
import TodoProjectsController from "../todoProjectsController";
import { createAccordion, createAccordionItem } from "./accordion";
import TodoProject from "../todoProject";
import ProjectsController from "../todoProjectsController";

let selectedProject;

function initializeLayout() {
    document.body.appendChild(navbar);
    document.body.appendChild(main);
    const projectDisplay = document.querySelector("#project-display");
    setProjectDisplayDefault(projectDisplay);
}

function populateProjectsList() {
    const list = document.querySelector("#projects-list ul");
    clearProjectsList(list);

    const projects = TodoProjectsController.getProjects();
    projects.forEach(project => {
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Delete";
        initializeProjectDeleteButton(deleteButton, project, ProjectsController);

        const listItem = document.createElement("button");
        listItem.classList.add("list-group-item", "list-group-item-action", "rounded-0", "border-end-0", "border-top-0", "d-flex", "justify-content-between");
        listItem.textContent = project.getTitle();
        listItem.addEventListener("click", (e) => {
            deactivateProjectsListItems();
            e.target.classList.add("active");
            setProjectDisplay(project);
            selectedProject = project;
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}

function initializeProjectDeleteButton(button, project, projectsController) {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const projectDisplay = document.querySelector("#project-display");
        projectsController.removeProject(project);
        populateProjectsList();
        if (selectedProject === project) {
            setProjectDisplayDefault(projectDisplay);
        }
    });
}

function setProjectDisplayDefault(display) {
    const container = document.createElement("div");
    container.classList.add("d-flex", "flex-column", "justify-content-center", "h-100");

    const heading = document.createElement("h2");
    heading.classList.add("fs-1", "w-100", "p-3", "text-center");
    heading.textContent = "No project currently selected";

    const subHeading = document.createElement("h3");
    subHeading.classList.add("fs-2", "w-100", "p-3", "text-center", "text-secondary", "fw-light");
    subHeading.textContent = "Click on a project in the list to see all of the tasks associated with that project.";

    display.innerHTML = "";
    container.appendChild(heading);
    container.appendChild(subHeading);
    display.appendChild(container);
}

function clearProjectsList(list) {
    list.innerHTML = "";
}

function deactivateProjectsListItems() {
    const listItems = document.querySelectorAll("#projects-list ul button");
    listItems.forEach(item => item.classList.remove("active"));
}

function setProjectDisplay(project) {
    const projectDisplay = document.querySelector("#project-display");
    projectDisplay.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("text-center", "display-5", "m-3");
    title.textContent = project.getTitle();

    projectDisplay.appendChild(title);


    const itemsAccordion = createAccordion("todoItemsAccordion");

    project.getTodoItems().forEach(item => {
        const title = item.getTitle();
        const description = item.getDescription();
        const date = item.getDueDate();
        const priorityColor = item.getPriority().getColor();
        const accordionItem = createAccordionItem(title, description, date, priorityColor);


        itemsAccordion.appendChild(accordionItem);
    });


    projectDisplay.appendChild(itemsAccordion);
}

function initializeNewProjectForm() {
    const projectSubmit = document.querySelector("#new-project-submit");

    projectSubmit.addEventListener("click", () => {
        const projectTitle = document.querySelector("#new-project-title").value;
        const newProject = TodoProject(projectTitle);
        TodoProjectsController.addProject(newProject);
        populateProjectsList();
    });
}


export { initializeLayout, populateProjectsList, initializeNewProjectForm };