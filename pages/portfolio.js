import {useState} from "react";
import portfoliojson from '../data/Portfolio.json'
const Portfolio = function({props}){
    const [Selected_category, Set_Selected_category]=useState('all');
    const [filtered_list, set_filtered_list] = useState(portfoliojson.projects);
    const onClick_category_select=(categories_id)=>{
        Set_Selected_category(categories_id);
        if(categories_id==="all") set_filtered_list(portfoliojson.projects);
        else {
            set_filtered_list(
                portfoliojson.projects.filter(x=>x.categories_id===categories_id)
            )
        }
    }
    return <>
        <article className="portfolio active" data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">
                    <li className="filter-item">
                        <button
                            className={Selected_category==="all"?"active":""}
                            onClick={()=>onClick_category_select("all")}
                            data-filter-btn="">All</button>
                    </li>
                    {
                        portfoliojson.categories.map((item,index)=>{
                            return <li className="filter-item" key={index}>
                                <button
                                    className={Selected_category===item.id?"active":""}
                                    onClick={()=>onClick_category_select(item.id)}
                                    data-filter-btn="">{item.value}</button>
                            </li>
                        })
                    }

                    {/*<li className="filter-item">
                        <button data-filter-btn="" className="">Web design</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="" className="">Applications</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="" className="">Web development</button>
                    </li>*/}

                </ul>

                <div className="filter-select-box">

                    <button className="filter-select" data-select="">

                        <div className="select-value" data-selecct-value="">All</div>

                        <div className="select-icon">
                            <ion-icon name="chevron-down" role="img" className="md hydrated"
                                      aria-label="chevron down"></ion-icon>
                        </div>

                    </button>

                    <ul className="select-list">
                        <li className="select-item">
                            <button data-select-item="">All</button>
                        </li>
                        {
                            portfoliojson.categories.map((item,index)=>{
                                return <li className="select-item" key={index}>
                                    <button data-select-item="">{item.value}</button>
                                </li>
                            })
                        }

                    </ul>

                </div>

                <ul className="project-list">
                    {
                        filtered_list.map((item,index)=>{
                            return <li className={"project-item active"} data-filter-item="" data-category="web development" key={index}>
                                <a href="#">

                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <img src="/icons-eye.png" alt=""/>
                                            {/*<ion-icon name="eye-outline" role="img" className="md hydrated"
                                                      aria-label="eye outline"></ion-icon>*/}
                                        </div>

                                        <img src={item.image_url} alt="finance" loading="lazy"/>
                                    </figure>

                                    <h3 className="project-title">{item.title}</h3>

                                    <p className="project-category">{portfoliojson.categories[item.categories_id].value}</p>

                                </a>
                            </li>
                        })
                    }

{/*

                    <li className="project-item active" data-filter-item="" data-category="web development">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/My-Project-2.png" alt="orizon" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Funding</h3>

                            <p className="project-category">Web development</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web design">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/My-Project-3.jpg" alt="fundo" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Cripto</h3>

                            <p className="project-category">Web design</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="applications">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/My-Project-5.jpeg" alt="brawlhalla" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Admin Panels(Vuetify)</h3>

                            <p className="project-category">Web Development</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web design">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/My-Project-6.png" alt="dsm." loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Trading Screens</h3>

                            <p className="project-category">Web Development</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web design">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-6.png" alt="metaspark" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">MetaSpark</h3>

                            <p className="project-category">Web design</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web development">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-7.png" alt="summary" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Summary</h3>

                            <p className="project-category">Web development</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="applications">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-8.jpg" alt="task manager" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Task Manager</h3>

                            <p className="project-category">Applications</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web development">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-9.png" alt="arrival" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Arrival</h3>

                            <p className="project-category">Web development</p>

                        </a>
                    </li>
*/}

                </ul>

            </section>

        </article>
    </>
}
export default Portfolio;