import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import { highPriority, mediumPriority, lowPriority } from "./priority";
import TodoProject from "./todoProject";
import TodoProjectsController from "./todoProjectsController";
import * as DisplayInitializer from "./display/initialize";
import seedDefaultProjects from "./seed/seed";



seedDefaultProjects();
DisplayInitializer.initializeLayout();
DisplayInitializer.populateProjectsList();
DisplayInitializer.initializeNewProjectForm();
