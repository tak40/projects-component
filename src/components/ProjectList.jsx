import React, { useState, useEffect, useRef } from "react"
import projectsData from "../projectsData"
import ProjectCard from "./ProjectCard"
import Loading from "./Loading"
import { gsap } from "gsap"

function ProjectList() {
    const [loading, setLoading] = useState(true)
    const projectsRef = useRef(null) // Reference to the projects container

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    useEffect(() => {
        if (!loading) {
            gsap.fromTo(
                projectsRef.current.children,
                {
                    opacity: 0,
                    y: 50, // Initial vertical displacement
                },
                {
                    opacity: 1,
                    y: 0, // End at their original position
                    stagger: 0.15, // 0.2 seconds delay between each item
                    duration: 0.25,
                    delay: (i) => (i === 0 ? 0.1 : 0), // 1-second delay only for the first project
                }
            )
        }
    }, [loading])

    return (
        <div className='projectList-container'>
            {loading ? <Loading /> : null}
            <div className='projects' ref={projectsRef}>
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList
