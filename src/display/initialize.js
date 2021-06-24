import navbar from "./navbar";
import main from "./main";
import TodoProjectsController from "../todoProjectsController";
import { createAccordion, createAccordionItem } from "./accordion";

function initializeLayout() {
    document.body.appendChild(navbar);
    document.body.appendChild(main);
}

function populateProjectsList() {
    const list = document.querySelector("#projects-list ul");
    const projects = TodoProjectsController.getProjects();
    projects.forEach(project => {
        const listItem = document.createElement("button");
        listItem.classList.add("list-group-item", "list-group-item-action", "rounded-0", "border-end-0", "border-top-0");
        listItem.textContent = project.getTitle();
        listItem.addEventListener("click", (e) => {
            deactivateProjectsListItems();
            e.target.classList.add("active");
            setProjectDisplay(project);
        });
        list.appendChild(listItem);
    });
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


export { initializeLayout, populateProjectsList };