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

const dusterItem = TodoItem("Dust cobwebs", "Get out the feather duster and clean out some cobwebs! Don't miss the corners!", formatDate(day, month, year), Priority("Medium"));

const cleaningProject = TodoProject("Clean House");
cleaningProject.addTodoItem(vaccumItem);
cleaningProject.addTodoItem(dusterItem);



TodoProjectsController.addProject(gardenProject);
TodoProjectsController.addProject(cleaningProject);


DisplayInitializer.initializeLayout();
DisplayInitializer.populateProjectsList();