const ProjectsController = ((projects) => {
    const managedProjects = projects || [];

    const getProjects = () => managedProjects;
    const addProject = (project) => managedProjects.push(project);
    const removeProject = (project) => {
        const foundProject = managedProjects.find(item => item === project);
        const foundProjectIndex = managedProjects.indexOf(foundProject);
        managedProjects.splice(foundProjectIndex, 1);
    };

    return {
        getProjects,
        addProject,
        removeProject
    };
})();


export default ProjectsController;