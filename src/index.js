import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import { highPriority, mediumPriority, lowPriority } from "./priority";
import TodoProject from "./todoProject";
import TodoProjectsController from "./todoProjectsController";
import * as DisplayInitializer from "./display/initialize";
import seedDefaultProjects from "./seed/seed";
import "./display/mobile.css";

seedDefaultProjects();
DisplayInitializer.initializeLayout();
DisplayInitializer.initializeProjectsList();
DisplayInitializer.setProjectDisplayToDefault();
DisplayInitializer.initializeNewProjectForm();