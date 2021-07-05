import { formatDate, getCurrentDate } from "../date";
import * as Priority from "../priority";

const { day, month, year } = getCurrentDate();
const currentDate = `${year}-0${month}-0${day}`;

function createNewItemForm() {
    const form = document.createElement("div");
    form.setAttribute("id", "#new-item-submit");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "new-item-title");

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "new-item-description");

    const dateInput = document.createElement("input");
    dateInput.setAttribute("value", currentDate);
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "new-item-date");

    const priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "new-item-priority");

    Priority.priorities.forEach(priority => {
        const priorityObject = priority();
        const option = document.createElement("option");
        option.textContent = priorityObject.getName();
        priorityInput.appendChild(option);
    });

    const submit = document.createElement("button");
    submit.setAttribute("id", "new-item-submit");
    submit.textContent = "Add";

    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(dateInput);
    form.appendChild(priorityInput);
    form.appendChild(submit);

    return form;
}


export default createNewItemForm;