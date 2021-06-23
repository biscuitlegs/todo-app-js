import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

//Test
const div = document.createElement("div");
div.classList.add("alert", "alert-primary");
div.textContent = "Hello, World!";
document.body.appendChild(div);