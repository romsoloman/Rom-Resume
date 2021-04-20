

import './Education.scss'

export const Education = ({ education }) => {

    return (
        <>
            <h3 className='education-header'>education</h3>
            <div className="flex column justify-center education">
                {education.map(({ place, startedDate, finishedDate, placeDetails }, idx) => {
                    return (
                        <div className="flex place" key={idx} >
                            <div className="point"></div>
                            <div className="time">
                                <p>{finishedDate}</p>
                                <p>{startedDate}</p>
                            </div>
                            <div className="place-info">
                                <p>{place}</p>
                                <p>{placeDetails}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

