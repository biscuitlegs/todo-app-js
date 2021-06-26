import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import { highPriority, mediumPriority, lowPriority } from "./priority";
import TodoProject from "./todoProject";
import TodoProjectsController from "./todoProjectsController";
import * as DisplayInitializer from "./display/initialize";


const { day, month, year } = getCurrentDate();

const paintShedItem = TodoItem("Paint Shed", "Paint the shed a nice color", formatDate(day, month, year), mediumPriority());

const gardenProject = TodoProject("Renovate Garden");
gardenProject.addTodoItem(paintShedItem);

const vaccumItem = TodoItem("Vaccum House", "Hoover up all those crumbs!", formatDate(day, month, year), lowPriority());

const dusterItem = TodoItem("Dust cobwebs", "Get out the feather duster and clean out some cobwebs! Don't miss the corners!", formatDate(day, month, year), highPriority());

const cleaningProject = TodoProject("Clean House");
cleaningProject.addTodoItem(vaccumItem);
cleaningProject.addTodoItem(dusterItem);



TodoProjectsController.addProject(gardenProject);
TodoProjectsController.addProject(cleaningProject);


DisplayInitializer.initializeLayout();
DisplayInitializer.populateProjectsList();
DisplayInitializer.initializeNewProjectForm();