

import { Education } from '../Education/Education'
import { Languages } from '../Languages/Languages'
import { Projects } from '../Projects/Projects'
import { Skills } from '../Skills/Skills'
import './AppDescription.scss'

export const AppDescription = ({ romData }) => {

    return (
        <article className='container app-description'>
            <Projects projects={romData.projects} />
            <Education education={romData.education} />
            <Languages languages={romData.languages} />
            <Skills skills={romData.skills} />
        </article >
    )
}

