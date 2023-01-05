import resumejson from '../data/resume.json'
const resume =({props})=>{
    return <>
        <article className="resume active" data-page="resume">

            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <img src="/icons8-student-center-90.png" alt=""/>
                        <ion-icon name="book-outline" role="img" className="md hydrated"
                                  aria-label="book outline"></ion-icon>
                    </div>

                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    {
                        resumejson.education.map((item,index)=>{
                        return <>
                            <li className="timeline-item" key={index}>

                                <h4 className="h4 timeline-item-title">{item.title}</h4>

                                <span>{item.years}</span>

                                <p className="timeline-text">
                                    {item.context}
                                </p>

                            </li>
                        </>
                        })
                    }
                </ol>

            </section>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <img src="/icons8-experience-skill-48.png" alt=""/>
                        {/*<ion-icon name="book-outline" role="img" className="md hydrated"
                                  aria-label="book outline"></ion-icon>*/}
                    </div>

                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    {
                        resumejson.experience.map((item,index)=>{
                            return <>
                                <li className="timeline-item" key={index}>

                                    <h4 className="h4 timeline-item-title">{item.title}</h4>

                                    <span>{item.years}</span>
                                    {/*{
                                        item.context.split('\n').map((paragraph,paragraph_index)=>{
                                            return <p className="timeline-text" key={paragraph_index}>
                                                {paragraph}
                                            </p>
                                        })
                                    }*/}
                                    <p className="timeline-text">
                                        {item.context}
                                    </p>

                                </li>
                            </>
                        })
                    }
                </ol>

            </section>

            <section className="skill">

                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">
                    {
                        resumejson.skills.map((item,index)=>{
                            return  <li className="skills-item" key={index}>

                                <div className="title-wrapper">
                                    <h5 className="h5">{item.title}</h5>
                                    <data value={item.percent}>{item.percent}%</data>
                                </div>

                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{"width": item.percent+"%"}}></div>
                                </div>

                            </li>
                        })
                    }

                </ul>

            </section>

        </article>
    </>
}
export default resume;