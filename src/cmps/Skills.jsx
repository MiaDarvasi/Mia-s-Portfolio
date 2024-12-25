import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import auth from "../assets/imgs/icons/auth.png";
import bug from "../assets/imgs/icons/bug.png";
import responsiveimg from "../assets/imgs/icons/responsive.png";
import architecture from "../assets/imgs/icons/architecture.png";
import performance from "../assets/imgs/icons/performance.png";
import git from "../assets/imgs/icons/git2.png";
import collab from "../assets/imgs/icons/collab.png";
import api from "../assets/imgs/icons/api.png";
import cloud from "../assets/imgs/icons/cloud.png";




export function Skills() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 770 },
            items: 4
        },
        largeMobile: {
            breakpoint: { max: 770, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return <>
        <section className="skills" id="skills">
            <h1>SKILLS</h1>
            <p>I am proficient in JavaScript and frameworks like React, Node.js, and Redux for both front-end and back-end development. I have strong expertise in HTML, CSS (with SASS), and responsive design. With a solid understanding of Git for version control and MongoDB for NoSQL databases, I can efficiently manage code and data. Additionally, I am experienced in WebSockets for real-time communication, and I excel in problem-solving, adaptability, and collaborating within cross-functional teams to deliver high-quality projects.</p>

            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={auth} />
                    <h5>Authentication & Authorization</h5>
                </div>
                <div className="item">
                    <img src={bug} />
                    <h5>Debugging Complex Issues</h5>
                </div>
                <div className="item">
                    <img src={responsiveimg} />
                    <h5>Responsive Design</h5>
                </div>
                <div className="item">
                    <img src={architecture} />
                    <h5>Web Architecture</h5>
                </div>
                <div className="item">
                    <img src={api} />
                    <h5>RESTful API</h5>
                </div>
                <div className="item">
                    <img src={collab} />
                    <h5>Collaborative Work</h5>
                </div>
                <div className="item">
                    <img src={performance} />
                    <h5>Performance Optimization</h5>
                </div>
                <div className="item">
                    <img src={cloud} />
                    <h5>Cloud Management & Deployment</h5>
                </div>
                <div className="item">
                    <img src={git} />
                    <h5>Version Control (Git)</h5>
                </div>
            </Carousel>
        </section>
    </>
}
