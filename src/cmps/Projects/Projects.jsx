

import './Projects.scss'

export const Projects = ({ projects }) => {

    return (
        <>
            <h3 className='projects-header'>projects</h3>
            <div className="flex column projects">
                {projects.map(({ projectLink, title, subtitle }, idx) => {
                    return (
                        <div className="project" key={idx} >
                            <p>{title}</p>
                            <p>{subtitle}</p>
                            <a href={projectLink} target="_blank">{projectLink}</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

