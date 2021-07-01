const highPriority = () => {
    const PRIORITY_COLOR = "#dc3545";

    const getColor = () => PRIORITY_COLOR;

    return {
        getColor
    };
};

const mediumPriority = () => {
    const PRIORITY_COLOR = "#ffc107";

    const getColor = () => PRIORITY_COLOR;

    return {
        getColor
    };
};

const lowPriority = () => {
    const PRIORITY_COLOR = "#198754";

    const getColor = () => PRIORITY_COLOR;

    return {
        getColor
    };
};


export { highPriority, mediumPriority, lowPriority };