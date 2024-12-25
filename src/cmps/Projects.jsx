import { Link } from "react-router-dom";

import git from "../assets/imgs/icons/git.svg";
import abnbhome2 from "../assets/imgs/projects/Abnb/abnbhome2.jpg";
import appsushomepage from "../assets/imgs/projects/Appsus/appsushomepage.jpg";



export function Projects() {
    return <section className="projects" id="projects">
        <h1>PROJECTS</h1>
        <p>All projects, including this website, were developed either independently or through collaborative work.</p>
        <ul>
            <li className="project">
                <Link to="/abnb">
                    <section className="project-image" title="Project Details">
                        <img src={abnbhome2} />
                        <div className="overlay"></div>
                    </section>
                </Link>
                <section className="project-info">
                    <h2>Abnb</h2>
                    <h3>Airbnb clone app</h3>
                    <p>A fully responsive, end-to-end application developed collaboratively with React, Node.js, RESTful APIs, MongoDB, and WebSockets for real-time updates and seamless user experience.</p>
                    <a href="https://github.com/avivdb/Abnb-frontend" target="blank" title="Frontend"><img src={git} /></a>
                    <a href="https://github.com/AdiSabban10/Abnb-backend" target="blank" title="Backend"><img src={git} /></a>
                </section>
            </li>
            <li className="project">
                <Link to="/appsus">
                    <section className="project-image" title="Project Details">
                        <img src={appsushomepage} />
                        <div className="overlay"></div>
                    </section>
                </Link>
                <section className="project-info">
                    <h2>AppSus</h2>
                    <h3>Gmail clone app</h3>
                    <p>A responsive front-end application built with React, replicating core Gmail features. It showcases dynamic UI components, state management, and a mobile-first design for optimal performance across devices.</p>
                    <a href="https://github.com/MiaDarvasi/AppSus" target="blank" title="AppSus"><img src={git} /></a>
                </section>
            </li>
        </ul>
    </section>
}
