import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import Priority from "./priority";
import TodoProject from "./todoProject";
import TodoProjectsController from "./todoProjectsController";
import * as DisplayInitializer from "./display/initialize";


const { day, month, year } = getCurrentDate();

const myTodoItem = TodoItem("Paint Shed", "Paint the shed a nice color", formatDate(day, month, year), Priority("Medium"));

const myTodoProject = TodoProject("Renovate Garden");
myTodoProject.addTodoItem(myTodoItem);

TodoProjectsController.addProject(myTodoProject);


DisplayInitializer.initializeLayout();
DisplayInitializer.populateProjectsList();