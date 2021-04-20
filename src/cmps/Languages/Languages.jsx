

import './Languages.scss'

export const Languages = ({ languages }) => {

    return (
        <>
            <h3 className='languages-header'>languages</h3>
            <div className="flex column languages">
                {languages.map(({ language, level }, idx) => {
                    return (
                        <div className="language" key={idx} >
                            <p>{language}</p>
                            <p>{level}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

