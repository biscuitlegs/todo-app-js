const form = document.createElement("div");
form.classList.add("m-3", "collapse", "mb-4", "p-3", "border");
form.setAttribute("id", "new-project-form");

const titleLabel = document.createElement("label");
titleLabel.setAttribute("for", "new-project-title");
titleLabel.classList.add("form-label");
titleLabel.textContent = "Title";

const title = document.createElement("input");
title.classList.add("form-control");
title.setAttribute("type", "text");
title.setAttribute("id", "new-project-title");

const submit = document.createElement("button");
submit.classList.add("btn", "btn-success", "w-100", "form-control", "my-2");
submit.setAttribute("id", "new-project-submit");
submit.textContent = "Add";

form.appendChild(titleLabel);
form.appendChild(title);
form.appendChild(submit);


export default form;