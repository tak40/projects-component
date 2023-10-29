import React from "react"

function ProjectCard(props) {
    const { title, description, image, technologies, githubLink, liveLink } =
        props.project

    return (
        <article className='project-card'>
            <img src={image} alt={title} />
            <div className='title-description-container'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <section className='tech-stack'>
                <h4>Tech Stack & Focus</h4>
                <p>{technologies.join(", ")}</p>
            </section>
            <div className='project-links'>
                <a
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn'
                >
                    GitHub
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
        </article>
    )
}

export default ProjectCard
