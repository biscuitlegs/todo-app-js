import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import Priority from "./priority";
import TodoProject from "./todoProject";
import TodoProjectsController from "./todoProjectsController";
import * as DisplayInitializer from "./display/initialize";


const { day, month, year } = getCurrentDate();

const paintShedItem = TodoItem("Paint Shed", "Paint the shed a nice color", formatDate(day, month, year), Priority("Medium"));

const gardenProject = TodoProject("Renovate Garden");
gardenProject.addTodoItem(paintShedItem);

const vaccumItem = TodoItem("Vaccum House", "Hoover up all those crumbs!", formatDate(day, month, year), Priority("Low"));

const cleaningProject = TodoProject("Clean House");
cleaningProject.addTodoItem(vaccumItem);

TodoProjectsController.addProject(gardenProject);
TodoProjectsController.addProject(cleaningProject);


DisplayInitializer.initializeLayout();
DisplayInitializer.populateProjectsList();