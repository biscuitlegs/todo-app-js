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
    accordionButton.setAttribute("data-bs-target", `#${name.replace(" ", "")}`);
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", "collapseOne");
    
    const accordionButtonPriority = document.createElement("span");
    accordionButtonPriority.classList.add("fw-bold", "fs-4");
    accordionButtonPriority.textContent = "!";
    accordionButtonPriority.style.color = color;
    accordionButton.appendChild(accordionButtonPriority);


    const accordionButtonTitle = document.createElement("span");
    accordionButtonTitle.classList.add("fw-bold");
    accordionButtonTitle.textContent = name;
    accordionButton.appendChild(accordionButtonTitle);

    const accordionButtonDate = document.createElement("span");
    accordionButtonDate.textContent = dueDate;
    accordionButton.appendChild(accordionButtonDate);

    const accordionButtonDetails = document.createElement("div");
    accordionButtonDetails.classList.add("d-flex", "justify-content-evenly", "align-items-center");
    accordionButtonDetails.style.width = "250px";
    accordionButtonDetails.appendChild(accordionButtonPriority);
    accordionButtonDetails.appendChild(accordionButtonDate);
    accordionButtonDetails.appendChild(accordionButtonTitle);

    accordionButton.appendChild(accordionButtonDetails);

    const accordionCollapse = document.createElement("div");
    accordionCollapse.classList.add("accordion-collapse", "collapse");
    accordionCollapse.setAttribute("id", name.replace(" ", ""));

    const accordionBody = document.createElement("div");
    accordionBody.classList.add("accordion-body");
    accordionBody.innerHTML = body;

    accordionItem.appendChild(accordionHeader);
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionCollapse);
    accordionCollapse.appendChild(accordionBody);


    return accordionItem;
}

export { createAccordion, createAccordionItem }