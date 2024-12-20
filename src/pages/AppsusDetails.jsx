import git from "../assets/imgs/icons/git.svg";
import appsuscompose from "../assets/imgs/projects/Appsus/appsuscompose.jpg";
import appsusdrafts from "../assets/imgs/projects/Appsus/appsusdrafts.jpg";
import appsusarchive from "../assets/imgs/projects/Appsus/appsusarchive.jpg";
import appsusresponsivehomepage from "../assets/imgs/projects/Appsus/appsusresponsivehomepage.jpg";
import appsushomepage from "../assets/imgs/projects/Appsus/appsushomepage.jpg";
import appsusfilter from "../assets/imgs/projects/Appsus/appsusfilter.jpg";
import appsusresponsivefilter from "../assets/imgs/projects/Appsus/appsusresponsivefilter.jpg";



export function AppsusDetails() {
    return <>
        <img className="project-main-img" src={appsushomepage} />
        <section className="project-details">
            <h1>AppSus</h1>
            <h2>Gmail clone app</h2>
            <p>AppSus is a responsive, multi-page front-end application built with React, designed to replicate core Gmail features. The app includes dynamic UI components, efficient state management, and a mobile-first approach to ensure a seamless user experience across devices. With multiple pages for a more robust user interface, it demonstrates proficiency in React development, focusing on performance, scalability, and intuitive navigation.</p>
            <a href="https://github.com/MiaDarvasi/AppSus" target="blank" title="AppSus"><img src={git} /></a>
            <ul className="gallery">
                <li className="gallery-item">
                    <h3>Compose, Archive and Drafts features</h3>
                    <section className="gallery-item-imgs">
                        <img src={appsuscompose} />
                        <img src={appsusdrafts} />
                        <img src={appsusarchive} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Responsive Homepage</h3>
                    <section className="gallery-item-imgs">
                        <img src={appsushomepage} />
                        <img src={appsusresponsivehomepage} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Advanced Filtering System</h3>
                    <section className="gallery-item-imgs">
                        <img src={appsusfilter} />
                        <img src={appsusresponsivefilter} />
                    </section>
                </li>
            </ul>
        </section>
    </>
}
