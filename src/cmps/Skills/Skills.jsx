

import './Skills.scss'

export const Skills = ({ skills }) => {

    return (
        <>
            <h3 className='skills-header'>Skills</h3>
            <div className="flex wrap justify-between skills">
                {skills.map(skill => {
                    return (
                        <div className="skill" key={skill.id} >
                            <img src={skill.imgUrl} alt="" />
                            <p>{skill.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

