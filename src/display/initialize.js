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
import findTodoItemByTitle from "../todoItem";

let selectedProject;
const COMPLETED_ITEM_BUTTON_COLOR = "#d9ffed";
const COMPLETED_ITEM_DESCRIPTION_COLOR = "#ebfff5";

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
        selectedProject = project;
        const listItems = document.querySelectorAll("#projects-list ul button");
        removeActiveStyling(listItems);
        e.target.classList.add("active");
        setProjectDisplay(project);
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

    const newItemFormButton = createNewItemFormCollapseButton();
    projectDisplay.appendChild(newItemFormButton);

    const newItemForm = createNewItemForm();
    projectDisplay.appendChild(newItemForm);
    initializeNewItemFormSubmit(project);

    const itemsAccordion = createTodoItemsAccordion(project.getTodoItems());
    projectDisplay.appendChild(itemsAccordion);

    initializeTodoItemDeleteButtons(selectedProject);
}

function initializeTodoItemDeleteButtons(currentProject) {
    const todoItemsAccordion = document.querySelector("#todo-items-accordion");
    const titles = document.querySelectorAll(".accordion-item-title");
    const deleteButtons = document.querySelectorAll(".accordion-item-delete");
    const accordionItems = document.querySelectorAll(".accordion-item");
    const accordionItemsContainer = document.querySelector("#accordion-items-container");

    for (let i = 0; i < titles.length; i++) {
        const accordionItem = accordionItems[i];
        const deleteButton = deleteButtons[i];
        const title = titles[i];
        const accordionItemWrapper = accordionItem.parentElement;
       
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            const foundItem = findTodoItemByTitle(title.textContent);
            currentProject.removeTodoItem(foundItem);
            
            accordionItemsContainer.removeChild(accordionItemWrapper);
        });
    }
}

function resetTodoItemDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".accordion-item-delete");
    deleteButtons.forEach(button => {
        button = button.replaceWith(button.cloneNode(true));
    });
}

function createNewItemFormCollapseButton() {
    const row = document.createElement("div");
    row.classList.add("row");

    const column = document.createElement("div");
    column.classList.add("col-lg-3");

    const button = document.createElement("button");
    button.setAttribute("id", "new-item-form-collapse-button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#new-item-form");
    button.textContent = "New Task";
    button.classList.add("btn", "btn-success", "mb-4", "w-100");

    column.appendChild(button);
    row.appendChild(column);

    return row;
}

function createTodoItemsAccordion(todoItems) {
    const itemsAccordion = createAccordion("todo-items-accordion");
    const row = document.createElement("div");
    row.classList.add("d-flex", "flex-column");
    row.setAttribute("id", "accordion-items-container");
    
    todoItems.forEach(item => {
        const container = document.createElement("div");
        container.classList.add("d-flex");

        const checkbox = createCheckbox();
        checkbox.classList.add("align-self-start", "mt-4");
        const title = item.getTitle();
        const description = item.getDescription();
        const date = item.getDueDate();
        const priorityColor = item.getPriority().getColor();
        const accordionItem = createAccordionItem(title, description, date, priorityColor);
        accordionItem.classList.add("w-100");
        
        initializeCheckbox(checkbox, item, accordionItem);

        if (item.getCompleted()) {
            const accordionItemButton = accordionItem.firstElementChild.firstElementChild;
            const accordionItemDescription = accordionItem.lastElementChild;

            checkbox.setAttribute("checked", "true");
            accordionItemButton.style.backgroundColor = COMPLETED_ITEM_BUTTON_COLOR;
            accordionItemDescription.style.backgroundColor = COMPLETED_ITEM_DESCRIPTION_COLOR;
        }
        
        container.appendChild(checkbox);
        container.appendChild(accordionItem);
        row.appendChild(container);
    });

    itemsAccordion.appendChild(row);

    return itemsAccordion;
}

function createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.classList.add("mx-3");
    checkbox.setAttribute("type", "checkbox");

    return checkbox;
}

function initializeCheckbox(checkbox, todoItem, accordionItem) {
    checkbox.addEventListener("click", () => {
        const accordionItemButton = accordionItem.firstElementChild.firstElementChild;
        const accordionItemDescription = accordionItem.lastElementChild;

        if (todoItem.getCompleted()) {
            todoItem.setCompleted(false);
        } else {
            todoItem.setCompleted(true);
        }
        
        if (!accordionItemButton.style.backgroundColor) {
            accordionItemButton.style.backgroundColor = COMPLETED_ITEM_BUTTON_COLOR;
        } else {
            accordionItemButton.style.backgroundColor = "";
        }

        if (!accordionItemDescription.style.backgroundColor) {
            accordionItemDescription.style.backgroundColor = COMPLETED_ITEM_DESCRIPTION_COLOR;
        } else {
            accordionItemDescription.style.backgroundColor = "";
        }
        
    });
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

        const todoItemsContainer = document.querySelector("#accordion-items-container");
        const newItemWrapper = document.createElement("div");
        newItemWrapper.classList.add("d-flex");
        
        const newAccordionItem = createAccordionItem(
            titleValue,
            descriptionValue,
            dateValue,
            priorityValue().getColor());
        newAccordionItem.classList.add("w-100");

        const checkbox = createCheckbox();

        newItemWrapper.appendChild(checkbox);
        newItemWrapper.appendChild(newAccordionItem);
        todoItemsContainer.appendChild(newItemWrapper);

        initializeCheckbox(checkbox, newTodoItem, newAccordionItem);
        resetTodoItemDeleteButtons();
        initializeTodoItemDeleteButtons(selectedProject);
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