import { getCurrentDate, formatDate } from "../date";
import TodoItem from "../todoItem";
import TodoProject from "../todoProject";
import TodoProjectsController from "../todoProjectsController";
import { highPriority, mediumPriority, lowPriority } from "../priority";

function seedDefaultProjects() {
    const { day, month, year } = getCurrentDate();

    //Garden Project
    const paintShedItem = TodoItem("Paint shed in the back garden", "Velit et do ullamco do eiusmod. Et amet ut sint duis. Occaecat sit culpa nisi aute consequat consectetur id enim ipsum enim consectetur quis consequat proident. Adipisicing sunt tempor ea dolore culpa adipisicing. Aliquip reprehenderit aliqua irure elit in irure non mollit. Excepteur sint qui sunt adipisicing veniam.", formatDate(day, month, year), mediumPriority());
    const gardenProject = TodoProject("Renovate Garden");
    gardenProject.addTodoItem(paintShedItem);


    //Cleaning Project
    const vaccumItem = TodoItem("Vaccum Living Room", "Magna eu exercitation fugiat qui. Magna mollit sint duis eu ea adipisicing aliqua irure.", formatDate(day, month, year), lowPriority());
    const dusterItem = TodoItem("Dust cobwebs", "Sint deserunt anim voluptate velit sint in dolore anim amet proident ipsum proident id laborum. Ut tempor culpa aute velit anim voluptate laborum pariatur cupidatat occaecat consequat occaecat laboris duis. Commodo enim nulla veniam ut dolore deserunt voluptate in veniam. Dolor tempor est mollit exercitation duis elit dolor.", formatDate(day, month, year), highPriority());
    const cleaningProject = TodoProject("Clean House");
    cleaningProject.addTodoItem(vaccumItem);
    cleaningProject.addTodoItem(dusterItem);
    

    //Add Projects to Controller
    TodoProjectsController.addProject(gardenProject);
    TodoProjectsController.addProject(cleaningProject);
}


export default seedDefaultProjects;