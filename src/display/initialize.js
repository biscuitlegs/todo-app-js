import navbar from "./navbar";
import main from "./main";
import TodoProjectsController from "../todoProjectsController";
import { createAccordion, createAccordionItem } from "./accordion";
import TodoProject from "../todoProject";
import ProjectsController from "../todoProjectsController";
import createNewItemForm from "./newItemForm";
import TodoItem from "../todoItem";
import * as Priority from "../priority";
import { dayMonthYearFromDateInput } from "../date";

let selectedProject;

function initializeLayout() {
    document.body.appendChild(navbar);
    document.body.appendChild(main);
}

function initializeProjectsList() {
    const list = document.querySelector("#projects-list ul");
    list.innerHTML = "";

    const projects = TodoProjectsController.getProjects();
    projects.forEach(project => {
        const deleteButton = createProjectDeleteButton();
        initializeProjectDeleteButton(deleteButton, project, ProjectsController);

        const listItem = createProjectsListItem(project.getTitle(), project);
        initializeProjectsListItem(listItem, project);

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}

function createProjectsListItem(text) {
    const listItem = document.createElement("button");
    listItem.classList.add("list-group-item", "list-group-item-action", "rounded-0", "border-end-0", "border-top-0", "d-flex", "justify-content-between");
    listItem.textContent = text;

    return listItem;
}

function initializeProjectsListItem(item, project) {
    item.addEventListener("click", (e) => {
        const listItems = document.querySelectorAll("#projects-list ul button");
        removeActiveStyling(listItems);
        e.target.classList.add("active");
        setProjectDisplay(project);
        selectedProject = project;
    });
}

function createProjectDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.textContent = "Delete";

    return deleteButton;
}

function initializeProjectDeleteButton(button, project, projectsController) {
    button.addEventListener("click", (e) => {
        const projectDisplay = document.querySelector("#project-display");
        e.stopPropagation();
        projectsController.removeProject(project);
        initializeProjectsList();
        if (selectedProject === project) {
            setProjectDisplayToDefault(projectDisplay);
        }
    });
}

function setProjectDisplayToDefault() {
    const projectDisplay = document.querySelector("#project-display");
    const container = document.createElement("div");
    container.classList.add("d-flex", "flex-column", "justify-content-center", "h-100");

    const heading = document.createElement("h2");
    heading.classList.add("fs-1", "w-100", "p-3", "text-center");
    heading.textContent = "No project currently selected";

    const subHeading = document.createElement("h3");
    subHeading.classList.add("fs-2", "w-100", "p-3", "text-center", "text-secondary", "fw-light");
    subHeading.textContent = "Click on a project in the list to see all of the tasks associated with that project.";

    projectDisplay.innerHTML = "";
    container.appendChild(heading);
    container.appendChild(subHeading);
    projectDisplay.appendChild(container);
}

function removeActiveStyling(items) {
    items.forEach(item => item.classList.remove("active"));
}

function setProjectDisplay(project) {
    const projectDisplay = document.querySelector("#project-display");
    projectDisplay.innerHTML = "";

    const title = document.createElement("h1");
    title.classList.add("text-center", "display-5", "m-3");
    title.textContent = project.getTitle();
    projectDisplay.appendChild(title);

    const newItemForm = createNewItemForm();
    projectDisplay.appendChild(newItemForm);
    initializeNewItemFormSubmit(project);

    const itemsAccordion = createTodoItemsAccordion(project.getTodoItems());
    projectDisplay.appendChild(itemsAccordion);
}

function createTodoItemsAccordion(todoItems) {
    const itemsAccordion = createAccordion("todo-items-accordion");

    todoItems.forEach(item => {
        const title = item.getTitle();
        const description = item.getDescription();
        const date = item.getDueDate();
        const priorityColor = item.getPriority().getColor();
        const accordionItem = createAccordionItem(title, description, date, priorityColor);

        itemsAccordion.appendChild(accordionItem);
    });

    return itemsAccordion;
}

function initializeNewItemFormSubmit(project) {
    const submitButton = document.querySelector("#new-item-submit");

    submitButton.addEventListener("click", () => {
        const title = document.querySelector("#new-item-title");
        const description = document.querySelector("#new-item-description");
        const date = document.querySelector("#new-item-date");
        const priority = document.querySelector("#new-item-priority");

        const titleValue = title.value;
        const descriptionValue = description.value;
        const dateValue = dayMonthYearFromDateInput(date.value);
        const priorityValue = Priority.getPriorityFromName(priority.value);

        const newTodoItem = TodoItem(
            titleValue,
            descriptionValue,
            dateValue,
            priorityValue()
        );

        project.addTodoItem(newTodoItem);

        const todoItemsAccordion = document.querySelector("#todo-items-accordion");
        const newAccordionItem = createAccordionItem(
            titleValue,
            descriptionValue,
            dateValue,
            priorityValue().getColor());
        todoItemsAccordion.appendChild(newAccordionItem);
    });
}

function initializeNewProjectForm() {
    const projectSubmit = document.querySelector("#new-project-submit");

    projectSubmit.addEventListener("click", () => {
        const projectTitle = document.querySelector("#new-project-title").value;
        const newProject = TodoProject(projectTitle);
        TodoProjectsController.addProject(newProject);
        initializeProjectsList();
    });
}


export { 
        initializeLayout,
        initializeProjectsList,
        initializeNewProjectForm,
        setProjectDisplayToDefault
    };