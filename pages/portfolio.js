const portfolio = ({props})=>{
    return <>
        <article className="portfolio active" data-page="portfolio">

            <header>
                <h2 className="h2 article-title">Portfolio <span style={{'font-size': '12px'}}>(these are not my pages, I still editing this site, sorry)</span></h2>
            </header>

            <section className="projects">

                <ul className="filter-list">

                    <li className="filter-item">
                        <button className="active" data-filter-btn="">All</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="" className="">Web design</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="" className="">Applications</button>
                    </li>

                    <li className="filter-item">
                        <button data-filter-btn="" className="">Web development</button>
                    </li>

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

                        <li className="select-item">
                            <button data-select-item="">Web design</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item="">Applications</button>
                        </li>

                        <li className="select-item">
                            <button data-select-item="">Web development</button>
                        </li>

                    </ul>

                </div>

                <ul className="project-list">

                    <li className="project-item active" data-filter-item="" data-category="web development">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-1.jpg" alt="finance" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Finance</h3>

                            <p className="project-category">Web development</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web development">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-2.png" alt="orizon" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Orizon</h3>

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

                                <img src="/project-3.jpg" alt="fundo" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Fundo</h3>

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

                                <img src="/project-4.png" alt="brawlhalla" loading="lazy"/>
                            </figure>

                            <h3 className="project-title">Brawlhalla</h3>

                            <p className="project-category">Applications</p>

                        </a>
                    </li>

                    <li className="project-item active" data-filter-item="" data-category="web design">
                        <a href="#">

                            <figure className="project-img">
                                <div className="project-item-icon-box">
                                    <ion-icon name="eye-outline" role="img" className="md hydrated"
                                              aria-label="eye outline"></ion-icon>
                                </div>

                                <img src="/project-5.png" alt="dsm." loading="lazy"/>
                            </figure>

                            <h3 className="project-title">DSM.</h3>

                            <p className="project-category">Web design</p>

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

                </ul>

            </section>

        </article>
    </>
}
export default portfolio;