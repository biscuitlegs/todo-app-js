const TodoProject = (todoItems) => {
    const projectTodoItems = todoItems || [];

    const getTodoItems = () => projectTodoItems;
    const addTodoItem = (todoItem) => projectTodoItems.push(todoItem);
    const removeTodoItem = (todoItem) => {
        const foundTodoItem = projectTodoItems.find(item => item === todoItem);
        const foundTodoItemIndex = projectTodoItems.indexOf(foundTodoItem);
        projectTodoItems.splice(foundTodoItemIndex, 1);
    };

    return {
        getTodoItems,
        addTodoItem,
        removeTodoItem
    };
};

export default TodoProject;