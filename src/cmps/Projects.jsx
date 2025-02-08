import { Link } from "react-router-dom";

import git from "../assets/imgs/icons/git.svg";
import abnb from "../assets/imgs/projects/Abnb/abnbhome2.jpg";
import appsus from "../assets/imgs/projects/Appsus/appsushomepage.jpg";
import mayuway from "../assets/imgs/projects/Mayuway/homepagedesktop.png";
import ginattamar from "../assets/imgs/projects/Ginattamar/gthome.jpg";


export function Projects() {
    return <section className="projects" id="projects">
        <h1>PROJECTS</h1>
        <p>All projects were developed by me, including this website.</p>
        <h4>Professional Projects</h4>
        <ul>
            <li className="project">
                <Link to="/ginattamar">
                    <section className="project-image" title="Project Details">
                        <img src={ginattamar} />
                        <div className="overlay"></div>
                    </section>
                </Link>
                <section className="project-info">
                    <Link to="/ginattamar">
                        <h2>Ginat Tamar</h2>
                    </Link>
                    <h3>Commercial Website for a Plant Nursery</h3>
                    <p>A visually engaging, fully responsive commercial website built with React, showcasing a plant nursery’s products and services. Designed with a focus on user experience, it offers smooth navigation and an immersive, plant-themed aesthetic, ensuring both functionality and style across all devices.</p>
                    <p className="project-warning">* This website is still under development and ongoing improvements. if you see any problems, please contact me (:</p>
                    <a className="project-link" href="https://ginattamartemp.netlify.app/" target="_blank" >
                        Explore the Website
                        <span className="arrow">►</span>
                    </a>
                    <a className="project-git-link" href="https://github.com/MiaDarvasi/MayuWay.git" target="blank" title="MayuWay"><img src={git} /></a>
                </section>
            </li>
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
                    <h3>Personal Portfolio for a Yoga Instructor</h3>
                    <p>A seamless web platform developed in React and Vite, featuring responsive design and dynamic components that adapt smoothly across all devices while maintaining optimal performance.</p>
                    <a className="project-link" href="https://mayuway.netlify.app/" target="_blank" >
                        Explore the Website
                        <span className="arrow">►</span>
                    </a>
                    <a className="project-git-link" href="https://github.com/MiaDarvasi/MayuWay.git" target="blank" title="MayuWay"><img src={git} /></a>
                </section>
            </li>
        </ul>
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
