const Priority = (importance) => {
    let priorityImportance = importance;

    const getImportance = () => priorityImportance;
    const setImportance = (importance) => priorityImportance = importance;

    return { getImportance, setImportance };
};


export default Priority;