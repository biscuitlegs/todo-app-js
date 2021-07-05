const highPriority = () => {
    const PRIORITY_COLOR = "#dc3545";
    const PRIORITY_NAME = "High";

    const getColor = () => PRIORITY_COLOR;
    const getName = () => PRIORITY_NAME;

    return {
        getColor,
        getName
    };
};

const mediumPriority = () => {
    const PRIORITY_COLOR = "#ffc107";
    const PRIORITY_NAME = "Medium";

    const getColor = () => PRIORITY_COLOR;
    const getName = () => PRIORITY_NAME;

    return {
        getColor,
        getName
    };
};

const lowPriority = () => {
    const PRIORITY_COLOR = "#198754";
    const PRIORITY_NAME = "Low";

    const getColor = () => PRIORITY_COLOR;
    const getName = () => PRIORITY_NAME;

    return {
        getColor,
        getName
    };
};

function getPriorityFromName(name) {
    const priorities = [highPriority, mediumPriority, lowPriority];
    let foundPriority;

    priorities.forEach(priority => {
        if (priority().getName() === name) {
            foundPriority = priority;
        };
    });

    return foundPriority;
}

const priorities = [lowPriority, mediumPriority, highPriority];


export { highPriority, mediumPriority, lowPriority, getPriorityFromName, priorities };