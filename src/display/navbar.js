const container = document.createElement("div");
container.classList.add("container-fluid");

const navbarBrand = document.createElement("a");
navbarBrand.classList.add("navbar-brand");
navbarBrand.setAttribute("href", "#");
navbarBrand.textContent = "Navbar";

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

const navItemHome = document.createElement("li");
navItemHome.classList.add("nav-item");

const navLinkHome = document.createElement("a");
navLinkHome.classList.add("nav-link", "active");
navLinkHome.setAttribute("aria-current", "page");
navLinkHome.setAttribute("href", "#");
navLinkHome.textContent = "Home";


container.appendChild(navbarBrand);
container.appendChild(navbarToggler);
navbarToggler.appendChild(navbarTogglerIcon);
container.appendChild(navbarCollapse);
navbarCollapse.appendChild(navbarNav);
navbarNav.appendChild(navItemHome);
navItemHome.appendChild(navLinkHome);


const navbar = document.createElement("nav");
navbar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");
navbar.appendChild(container);


export default navbar;