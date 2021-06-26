function createAccordion(name) {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.setAttribute("id", name);

    return accordion;
}

function createAccordionItem(name, body, dueDate, color) {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const accordionHeader = document.createElement("h2");
    accordionHeader.classList.add("accordion-header");
    
    const accordionButton = document.createElement("div");
    accordionButton.classList.add("accordion-button", "collapsed");
    accordionButton.setAttribute("type", "button");
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#${nameToElementId(name)}`);
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", "collapseOne");
    
    const accordionButtonPriority = document.createElement("span");
    accordionButtonPriority.classList.add("fw-bold", "fs-4", "me-2");
    accordionButtonPriority.textContent = "!";
    accordionButtonPriority.style.color = color;
    accordionButton.appendChild(accordionButtonPriority);


    const accordionButtonTitle = document.createElement("span");
    accordionButtonTitle.classList.add("fw-bold", "me-2");
    accordionButtonTitle.textContent = name;
    accordionButton.appendChild(accordionButtonTitle);

    const accordionButtonDate = document.createElement("span");
    accordionButtonDate.classList.add("me-2");
    accordionButtonDate.textContent = dueDate;
    accordionButton.appendChild(accordionButtonDate);

    const accordionButtonDetails = document.createElement("div");
    accordionButtonDetails.classList.add("d-flex", "justify-content-start", "align-items-center");
    accordionButtonDetails.appendChild(accordionButtonPriority);
    accordionButtonDetails.appendChild(accordionButtonDate);
    accordionButtonDetails.appendChild(accordionButtonTitle);

    accordionButton.appendChild(accordionButtonDetails);

    const accordionCollapse = document.createElement("div");
    accordionCollapse.classList.add("accordion-collapse", "collapse");
    accordionCollapse.setAttribute("id", nameToElementId(name));

    const accordionBody = document.createElement("div");
    accordionBody.classList.add("accordion-body");
    accordionBody.innerHTML = body;

    accordionItem.appendChild(accordionHeader);
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionCollapse);
    accordionCollapse.appendChild(accordionBody);


    return accordionItem;
}

function nameToElementId(name) {
    return name.toLowerCase().replace(/\s/gi, "-");
}

export { createAccordion, createAccordionItem }