import { getCurrentDate, formatDate } from "../date";
import TodoItem from "../todoItem";
import TodoProject from "../todoProject";
import TodoProjectsController from "../todoProjectsController";
import { highPriority, mediumPriority, lowPriority } from "../priority";

function seedDefaultProjects() {
    const { day, month, year } = getCurrentDate();

    //Garden Project
    const paintShedItem = TodoItem("Paint the shed in the back garden", "Velit et do ullamco do eiusmod. Et amet ut sint duis. Occaecat sit culpa nisi aute consequat consectetur id enim ipsum enim consectetur quis consequat proident. Adipisicing sunt tempor ea dolore culpa adipisicing. Aliquip reprehenderit aliqua irure elit in irure non mollit. Excepteur sint qui sunt adipisicing veniam.", formatDate(year, month, day), mediumPriority());
    const gardenProject = TodoProject("Renovate Garden");
    gardenProject.addTodoItem(paintShedItem);


    //Cleaning Project
    const vaccumItem = TodoItem("Vaccum the living room", "Magna eu exercitation fugiat qui. Magna mollit sint duis eu ea adipisicing aliqua irure.", formatDate(year, month, day), lowPriority());
    const mopItem = TodoItem("Mop the garage floor", "Quis Lorem in id eiusmod elit ipsum labore amet et consectetur nisi ad. Aute non cillum sunt deserunt sit. Do reprehenderit ad ad in culpa. Veniam voluptate do ad labore aliquip commodo. Enim minim nulla dolore ipsum cillum consectetur minim cillum ut exercitation aute.", formatDate(year, month, day), lowPriority());
    const dusterItem = TodoItem("Dust cobwebs", "Sint deserunt anim voluptate velit sint in dolore anim amet proident ipsum proident id laborum. Ut tempor culpa aute velit anim voluptate laborum pariatur cupidatat occaecat consequat occaecat laboris duis. Commodo enim nulla veniam ut dolore deserunt voluptate in veniam. Dolor tempor est mollit exercitation duis elit dolor.", formatDate(year, month, day), highPriority());
    const cleaningProject = TodoProject("Clean House");
    cleaningProject.addTodoItem(vaccumItem);
    cleaningProject.addTodoItem(mopItem);
    cleaningProject.addTodoItem(dusterItem);
    

    //Add Projects to Controller
    TodoProjectsController.addProject(gardenProject);
    TodoProjectsController.addProject(cleaningProject);
}


export default seedDefaultProjects;