const highPriority = () => {
    const priorityColor = "#dc3545";

    const getColor = () => priorityColor;

    return {
        getColor
    };
};

const mediumPriority = () => {
    const priorityColor = "#ffc107";

    const getColor = () => priorityColor;

    return {
        getColor
    };
};

const lowPriority = () => {
    const priorityColor = "#198754";

    const getColor = () => priorityColor;

    return {
        getColor
    };
};


export { highPriority, mediumPriority, lowPriority };