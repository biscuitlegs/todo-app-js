const TodoItem = (title, description, dueDate, priority) => {
    let todoTitle = title;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;
    let completed = false;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getCompleted = () => completed;

    const setTitle = (title) => todoTitle = title;
    const setDescription = (description) => todoDescription = description;
    const setDueDate = (dueDate) => todoDueDate = dueDate;
    const setPriority = (priority) => todoPriority = priority;
    const setCompleted = (boolean) => completed = boolean;

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getCompleted,
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        setCompleted
    };
};

function findTodoItemByTitle(title) {
    let foundItem;
    selectedProject.getTodoItems().forEach(item => {
        if (item.getTitle() === title) foundItem = item;
    });

    return foundItem;
}


export default TodoItem;
export { findTodoItemByTitle };