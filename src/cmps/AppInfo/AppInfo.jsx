import { useEffect, useState } from 'react'
import './AppInfo.scss'
export const AppInfo = ({ romData }) => {
    const [scrollTop, setScroll] = useState(0);
    const [mobileVersion, setMobileVersion] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    const handleScroll = (ev) => {
        let scrollTop = ev.srcElement.documentElement.scrollTop;
        setScroll(prevState => prevState = scrollTop);
        console.log('scrollTop', scrollTop);
    }
    const handleResize = (ev) => {
        let resize = ev.target.innerWidth;
        setMobileVersion(prevState => prevState = resize);
        console.log('resize', resize);
    }
    let visibilityPercents = (150 - scrollTop) / 150
    if (visibilityPercents < 0) visibilityPercents = 0;
    const fixedStyle = scrollTop < 150;
    return (
        <article className='container flex column align-center app-info'>
            <section className={`flex column name-role text-center ${(!fixedStyle && mobileVersion) && 'fixed'}`}>
                <p className='name'>{romData.firstname} {romData.fullname}</p>
                <p className='role'>{romData.role}</p>
            </section>
            {(mobileVersion < 730) ? <img src={romData.imgUrl} alt="" style={{ opacity: visibilityPercents, height: 110 * visibilityPercents }} /> : <img src={romData.imgUrl} alt="" />}
            <section className='about' style={{ opacity: visibilityPercents, height: 150 * visibilityPercents }}>
                <p>{romData.summary}<span> My main specialites are in {romData.technologies.map(tech => tech)}</span> </p>
            </section>
            <section className='flex column contact' style={{ opacity: visibilityPercents, height: 250 * visibilityPercents }}>
                <div className="phone">
                    <div className="title">
                        <span>Phone</span><i className="fas fa-phone"></i>
                    </div>
                    <p>{romData.phone}</p>
                </div>
                <div className="email">
                    <div className="title">
                        <span>Email</span><i className="fas fa-envelope"></i>
                    </div>
                    <p>{romData.email}</p>
                </div>
                <div className="linkedin">
                    <div className="title">
                        <span>Linkedin</span><i className="fab fa-linkedin"></i>
                    </div>
                    <a href={romData.links[1]} target="_blank">{romData.links[1]}</a>
                </div>
                <div className="github">
                    <div className="title">
                        <span>Github</span><i className="fab fa-github"></i>
                    </div>
                    <a href={romData.links[0]} target="_blank">{romData.links[0]}</a>
                </div>
            </section>
        </article >
    )
}

