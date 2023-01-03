import information from '../data/contact.json'
import {info} from "next/dist/build/output/log";
const sidebar =({data})=>{
    return <>
        <aside className="sidebar" data-sidebar="">

            <div className="sidebar-info">

                <figure className="avatar-box">
                    {/*<img src="/my-avatar.png" alt="Richard hanrick" width="80"/>*/}
                    <img src="/my-image.png" alt={information.fullname} width="80"/>
                </figure>

                <div className="info-content">
                    <h1 className="name" title={information.fullname}>{information.fullname}</h1>
                    <p className="title">{information.proffession}</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn="">
                    <span>Show Contacts</span>

                    <ion-icon name="chevron-down" role="img" className="md hydrated"
                              aria-label="chevron down"></ion-icon>
                </button>

            </div>

            <div className="sidebar-info_more">

                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="mail-outline" role="img" className="md hydrated"
                                      aria-label="mail outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href={"mailto:"+information.email} className="contact-link">{information.email}</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="phone-portrait-outline" role="img" className="md hydrated"
                                      aria-label="phone portrait outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a href={"tel:"+information.phone} className="contact-link">{information.phone}</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="calendar-outline" role="img" className="md hydrated"
                                      aria-label="calendar outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime={information.birtday}>{information.birtday}</time>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <ion-icon name="location-outline" role="img" className="md hydrated"
                                      aria-label="location outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>{information.location}</address>
                        </div>

                    </li>

                </ul>

                <div className="separator"></div>

                <ul className="social-list">

                    <li className="social-item">
                        <a href="my-app/components/sidebar#" className="social-link">
                            <ion-icon name="logo-facebook" role="img" className="md hydrated"
                                      aria-label="logo facebook"></ion-icon>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="my-app/components/sidebar#" className="social-link">
                            <ion-icon name="logo-twitter" role="img" className="md hydrated"
                                      aria-label="logo twitter"></ion-icon>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="my-app/components/sidebar#" className="social-link">
                            <ion-icon name="logo-instagram" role="img" className="md hydrated"
                                      aria-label="logo instagram"></ion-icon>
                        </a>
                    </li>

                </ul>

            </div>

        </aside>
    </>;
}
export default sidebar;