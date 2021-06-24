import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from "./todoItem";
import { getCurrentDate, formatDate } from "./date";
import Priority from "./priority";



const { day, month, year } = getCurrentDate();

const myTodo = TodoItem("Paint Shed", "Paint the shed a nice color", formatDate(day, month, year), Priority("Medium"));

console.log(myTodo.getPriority().getImportance());
