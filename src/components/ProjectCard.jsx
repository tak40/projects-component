import React from "react"

function ProjectCard(props) {
    const { title, description, image, technologies, githubLink, liveLink } =
        props.project

    return (
        <section className='project-card'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>Tech Stack & Focus</h4>
            <p>{technologies.join(", ")}</p>
            <div className='links-container'>
                <a
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                >
                    Github
                </a>
                <a
                    href={liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                >
                    Live
                </a>
            </div>
        </section>
    )
}

export default ProjectCard
