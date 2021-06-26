const form = document.createElement("div");
form.classList.add("m-3", "collapse");
form.setAttribute("id", "new-project-form");

const title = document.createElement("input");
title.classList.add("form-control");
title.setAttribute("type", "text");
title.setAttribute("id", "new-project-title");
title.setAttribute("placeholder", "Project Title...");

const submit = document.createElement("button");
submit.classList.add("btn", "btn-success", "w-100", "form-control", "my-2");
submit.setAttribute("id", "new-project-submit");
submit.textContent = "Add";

form.appendChild(title);
form.appendChild(submit);


export default form;