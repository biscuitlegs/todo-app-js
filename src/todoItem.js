const TodoItem = (title, description, dueDate, priority) => {
    let todoTitle = title;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;

    const setTitle = (title) => todoTitle = title;
    const setDescription = (description) => todoDescription = description;
    const setDueDate = (dueDate) => todoDueDate = dueDate;
    const setPriority = (priority) => todoPriority = priority;

    return {
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setTitle,
        setDescription,
        setDueDate,
        setPriority
    };
};


export default TodoItem;