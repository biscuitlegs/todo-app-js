function createAccordion(name) {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.setAttribute("id", name);

    return accordion;
}

function createAccordionItem(name, body) {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const accordionHeader = document.createElement("h2");
    accordionHeader.classList.add("accordion-header");
    
    const accordionButton = document.createElement("button");
    accordionButton.classList.add("accordion-button", "collapsed");
    accordionButton.setAttribute("type", "button");
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#${name.replace(" ", "")}`);
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", "collapseOne");
    accordionButton.textContent = name;

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