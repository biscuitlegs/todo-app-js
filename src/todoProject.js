const TodoProject = (title, todoItems) => {
    const projectTitle = title;
    const projectTodoItems = todoItems || [];

    const getTitle = () => projectTitle;
    const setTitle = (title) => projectTitle = title;
    const getTodoItems = () => projectTodoItems;
    const addTodoItem = (todoItem) => projectTodoItems.push(todoItem);
    const removeTodoItem = (todoItem) => {
        const foundTodoItem = projectTodoItems.find(item => item.getTitle() === todoItem.getTitle());
        const foundTodoItemIndex = projectTodoItems.indexOf(foundTodoItem);
        projectTodoItems.splice(foundTodoItemIndex, 1);
    };

    return {
        getTitle,
        setTitle,
        getTodoItems,
        addTodoItem,
        removeTodoItem
    };
};


export default TodoProject;