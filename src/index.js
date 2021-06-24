import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import Priority from "./priority";
import TodoProject from "./todoProject";

import initialize from "./display/initialize";
initialize();



const { day, month, year } = getCurrentDate();

const myTodo = TodoItem("Paint Shed", "Paint the shed a nice color", formatDate(day, month, year), Priority("Medium"));

const myTodoProject = TodoProject();
myTodoProject.addTodoItem(myTodo);
myTodoProject.removeTodoItem(myTodo);

console.log(myTodoProject.getTodoItems());
