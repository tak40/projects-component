import React from "react"
import projectsData from "../projectsData"
import ProjectCard from "./ProjectCard"

function ProjectList() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
}

export default ProjectList
