import { Link } from "react-router-dom";

import git from "../assets/imgs/icons/git.svg";
import abnb from "../assets/imgs/projects/Abnb/abnbhome2.jpg";
import appsus from "../assets/imgs/projects/Appsus/appsushomepage.jpg";
import mayuway from "../assets/imgs/projects/Mayuway/homepagedesktop.png";



export function Projects() {
    return <section className="projects" id="projects">
        <h1>PROJECTS</h1>
        <p>All projects, including this website, were developed either independently or through collaborative work.</p>
        <h4>Professional Projects</h4>
        <li className="project">
            <Link to="/mayuway">
                <section className="project-image" title="Project Details">
                    <img src={mayuway} />
                    <div className="overlay"></div>
                </section>
            </Link>
            <section className="project-info">
                <Link to="/mayuway">
                <h2>MayuWay</h2>
                </Link>
                <h3>Yoga Instructor Portfolio</h3>
                <p>A seamless web platform developed in React and Vite, featuring responsive design and dynamic components that adapt smoothly across all devices while maintaining optimal performance.</p>
                <a className="project-link" href="https://mayuway.netlify.app/" target="_blank" >
                    Explore the Website
                    <span className="arrow">►</span>
                </a>
                <a className="project-git-link" href="https://github.com/MiaDarvasi/MayuWay.git" target="blank" title="MayuWay"><img src={git} /></a>
            </section>
        </li>
        <h4>Academic Projects</h4>
        <ul>
            <li className="project">
                <Link to="/abnb">
                    <section className="project-image" title="Project Details">
                        <img src={abnb} />
                        <div className="overlay"></div>
                    </section>
                </Link>
                <section className="project-info">
                    <Link to="/abnb">
                    <h2>Abnb</h2>
                    </Link>
                    <h3>Airbnb clone app</h3>
                    <p>A fully responsive, end-to-end application developed collaboratively with React, Node.js, RESTful APIs, MongoDB, and WebSockets for real-time updates and seamless user experience.</p>
                    <section>
                        <a className="project-git-link" href="https://github.com/avivdb/Abnb-frontend" target="blank" title="Frontend"><img src={git} /></a>
                        <a className="project-git-link" href="https://github.com/AdiSabban10/Abnb-backend" target="blank" title="Backend"><img src={git} /></a>
                    </section>
                </section>
            </li>
            <li className="project">
                <Link to="/appsus">
                    <section className="project-image" title="Project Details">
                        <img src={appsus} />
                        <div className="overlay"></div>
                    </section>
                </Link>
                <section className="project-info">
                    <Link to="/appsus">
                        <h2>AppSus</h2>
                    </Link>
                    <h3>Gmail clone app</h3>
                    <p>A responsive front-end application built with React, replicating core Gmail features. It showcases dynamic UI components, state management, and a mobile-first design for optimal performance across devices.</p>
                    <a className="project-git-link" href="https://github.com/MiaDarvasi/AppSus" target="blank" title="AppSus"><img src={git} /></a>
                </section>
            </li>
        </ul>
    </section>
}
