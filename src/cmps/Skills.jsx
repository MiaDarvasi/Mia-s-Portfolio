import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import auth from "../assets/imgs/icons/auth.png";
import bug from "../assets/imgs/icons/bug.png";
import responsiveimg from "../assets/imgs/icons/responsive.png";
import api from "../assets/imgs/icons/api.png";
import collab from "../assets/imgs/icons/collab.png";






export function Skills() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return <>
        <section className="skills" id="skills">
            <h1>SKILLS</h1>
            <ul>
                <li>
                    <h2>JavaScript & Frameworks (React, Node.js, Redux)</h2>
                    <p>Skilled in JavaScript for front-end and back-end development, using React for dynamic UIs, Node.js for server-side code, and Redux for state management.</p>
                </li>
                <li>
                    <h2>HTML & CSS (SASS)</h2>
                    <p>Proficient in HTML for structuring content and CSS (with SASS) to create responsive and maintainable layouts.</p>
                </li>
                <li>
                    <h2>Version Control & Git</h2>
                    <p>Proficient in Git for version control, enabling efficient collaboration and code management across teams.</p>
                </li>
                <li>
                    <h2>WebSockets</h2>
                    <p>Experienced in using WebSockets for real-time communication between the client and server, enabling interactive features such as live updates, notifications, and chat functionality in web applications.</p>
                </li>
                <li>
                    <h2>Databases (MongoDB)</h2>
                    <p>Experienced with MongoDB for handling NoSQL databases, storing data in a flexible, scalable format.</p>
                </li>
                <li>
                    <h2>Adaptability & Problem Solving</h2>
                    <p>Quick to adapt to new technologies and solve problems with a logical, methodical approach.</p>
                </li>
                <li>
                    <h2>Collaboration & Teamwork</h2>
                    <p>Effective in working with cross-functional teams, ensuring smooth communication and efficient project delivery, while maintaining a positive team dynamic.</p>
                </li>
            </ul>
        </section>

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
                <img src={api} />
                <h5>RESTful API</h5>
            </div>
            <div className="item">
                <img src={collab} />
                <h5>Collaborative Work</h5>
            </div>
        </Carousel>
    </>
}
