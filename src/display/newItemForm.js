import { formatDate, getCurrentDate } from "../date";
import * as Priority from "../priority";

const { day, month, year } = getCurrentDate();
const currentDate = `${year}-0${month}-0${day}`;

function createNewItemForm() {
    const form = document.createElement("div");
    form.setAttribute("id", "new-item-form");
    form.classList.add("collapse", "mb-4", "p-3", "border");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "new-item-title");
    titleLabel.classList.add("form-label");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "new-item-title");
    titleInput.classList.add("form-control", "mb-3");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "new-item-description");
    descriptionLabel.classList.add("form-label");
    descriptionLabel.textContent = "Description";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "new-item-description");
    descriptionInput.classList.add("form-control", "mb-3");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "new-item-date");
    dateLabel.classList.add("form-label");
    dateLabel.textContent = "Due Date";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("value", currentDate);
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "new-item-date");
    dateInput.classList.add("form-control", "mb-3");

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "new-item-priority");
    priorityLabel.classList.add("form-label");
    priorityLabel.textContent = "Priority";

    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "new-item-priority");
    priorityInput.classList.add("form-select", "mb-3");

    Priority.priorities.forEach(priority => {
        const option = document.createElement("option");
        option.textContent = priority().getName();
        priorityInput.appendChild(option);
    });

    const submitRow = document.createElement("div");
    submitRow.classList.add("row");

    const submitRowColumn = document.createElement("div");
    submitRowColumn.classList.add("col-lg-3");

    const submit = document.createElement("button");
    submit.setAttribute("id", "new-item-submit");
    submit.textContent = "Add";
    submit.classList.add("btn", "btn-success", "w-100");

    submitRow.appendChild(submitRowColumn);
    submitRowColumn.appendChild(submit);

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);
    form.appendChild(submitRow);

    return form;
}


export default createNewItemForm;