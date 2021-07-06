const container = document.createElement("div");
container.classList.add("container-fluid");

const navbarBrand = document.createElement("a");
navbarBrand.classList.add("navbar-brand");
navbarBrand.setAttribute("href", "#");
navbarBrand.textContent = "Todo App";

const navbarToggler = document.createElement("button");
navbarToggler.classList.add("navbar-toggler");
navbarToggler.setAttribute("type", "button");
navbarToggler.setAttribute("data-bs-toggle", "collapse");
navbarToggler.setAttribute("data-bs-target", "#navbarNav");
navbarToggler.setAttribute("aria-controls", "navbarNav");
navbarToggler.setAttribute("aria-expanded", "false");
navbarToggler.setAttribute("aria-label", "Toggle navigation");

const navbarTogglerIcon = document.createElement("span");
navbarTogglerIcon.classList.add("navbar-toggler-icon");

const navbarCollapse = document.createElement("div");
navbarCollapse.classList.add("collapse", "navbar-collapse");
navbarCollapse.setAttribute("id", "navbarNav");

const navbarNav = document.createElement("ul");
navbarNav.classList.add("navbar-nav");

const navItemGithub = document.createElement("li");
navItemGithub.classList.add("nav-item");

const navLinkGithub = document.createElement("a");
navLinkGithub.classList.add("nav-link", "active");
navLinkGithub.setAttribute("aria-current", "page");
navLinkGithub.setAttribute("href", "#");
const navLinkGithubIcon = document.createElement("i");
navLinkGithubIcon.classList.add("bi", "bi-github", "fs-5");
navLinkGithub.appendChild(navLinkGithubIcon);


container.appendChild(navbarBrand);
container.appendChild(navbarToggler);
navbarToggler.appendChild(navbarTogglerIcon);
container.appendChild(navbarCollapse);
navbarCollapse.appendChild(navbarNav);
navbarNav.appendChild(navItemGithub);
navItemGithub.appendChild(navLinkGithub);


const navbar = document.createElement("nav");
navbar.classList.add("navbar", "navbar-expand", "navbar-dark", "bg-dark");
navbar.appendChild(container);


export default navbar;