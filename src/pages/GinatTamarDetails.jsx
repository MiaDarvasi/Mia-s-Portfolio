import git from "../assets/imgs/icons/git.svg";
import mobile1 from "../assets/imgs/projects/Ginattamar/gtphne.jpg"
import mobile2 from "../assets/imgs/projects/Ginattamar/gtphne2.jpg"
import mobile3 from "../assets/imgs/projects/Ginattamar/gtphne3.jpg"
import home from "../assets/imgs/projects/Ginattamar/gthome.jpg"
import page from "../assets/imgs/projects/Ginattamar/gtpage.jpg"
import api1 from "../assets/imgs/projects/Ginattamar/gtapi.jpg"
import api2 from "../assets/imgs/projects/Ginattamar/gtapi2.jpg"
import api3 from "../assets/imgs/projects/Ginattamar/gtapi3.jpg"
import cmp1 from "../assets/imgs/projects/Ginattamar/gtcmp.jpg"
import cmp2 from "../assets/imgs/projects/Ginattamar/gtcmp2.jpg"




export function GinatTamarDetails() {
    return <>
        <img className="project-main-img" src={home} />
        <section className="project-details">
            <h1>Ginat Tamar</h1>
            <h2>Commercial Website for a Plant Nursery</h2>
            <p>A smooth, responsive commercial web platform built with React and Vite for a plant nursery, designed to provide an optimized experience across all devices. The site includes multiple interconnected pages with intuitive navigation, custom UI components, and engaging animations. By integrating third-party libraries and implementing effective state management, the platform ensures a seamless and dynamic user experience, whether accessed on mobile or desktop.</p>
            <p className="project-warning">* This website is still under development and ongoing improvements. if you see any problems, please contact me (:</p>
            <a className="project-link" href="https://ginattamartemp.netlify.app/" target="_blank" >
                Explore the Website
                <span className="arrow">►</span>
            </a>
            <section>
                <a href="https://github.com/MiaDarvasi/Ginat-Tamar---Plant-Nursery.git" target="blank" title="Ginat Tamar"><img src={git} /></a>
            </section>
            <ul className="gallery">
                <li className="gallery-item">
                    <h3>Responsivene Layout</h3>
                    <p>The website is designed with a responsive layout, ensuring an optimal experience on all devices.</p>
                    <section className="gallery-item-imgs">
                        <img src={home} />
                        <img src={mobile1} />
                        <img src={mobile2} />
                        <img src={mobile3} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Custom Design</h3>
                    <p>The website's design is fully customized to reflect the unique branding and style of the plant nursery. With a focus on aesthetics and functionality, created a visually engaging experience to enhance user interaction.</p>
                    <section className="gallery-item-imgs">
                        <img src={page} />
                        <img src={cmp2} />
                        <img src={home} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Multiple Pages and Components</h3>
                    <p>The website features multiple pages and reusable components for a streamlined structure.</p>
                    <section className="gallery-item-imgs">
                        <img src={page} />
                        <img src={cmp1} />
                        <img src={cmp2} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Third-Party Libraries</h3>
                    <p>hird-party libraries were utilized to enhance the user experience, adding features like improved accessibility, interactive carousels, and other dynamic elements. These tools helped streamline development and ensured a smooth, feature-rich interface.</p>
                    <section className="gallery-item-imgs">
                        <img src={api1} />
                        <img src={api2} />
                        <img src={api3} />
                    </section>
                </li>
            </ul>
        </section>
    </>
}
