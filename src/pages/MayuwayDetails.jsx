import git from "../assets/imgs/icons/git.svg";
import cpmmobile from "../assets/imgs/projects/Mayuway/cpmmobile.png";
import cpmexmp from "../assets/imgs/projects/Mayuway/cpmexmp.png";
import cpmexmp2 from "../assets/imgs/projects/Mayuway/cpmexmp2.png";
import homepagedesktop from "../assets/imgs/projects/Mayuway/homepagedesktop.png";
import homepagedesktop2 from "../assets/imgs/projects/Mayuway/homepagedesktop2.png";
import homepagemobile from "../assets/imgs/projects/Mayuway/homepagemobile.png";
import hummenu from "../assets/imgs/projects/Mayuway/hummenu.png";
import yogastyles from "../assets/imgs/projects/Mayuway/yogastyles.png";


export function MayuwayDetails() {
    return <>
        <img className="project-main-img" src={homepagedesktop} />
        <section className="project-details">
            <h1>MayuWay</h1>
            <h2>Yoga Instructor Portfolio</h2>
            <p>A seamless web platform developed in React and Vite for a Yoga instructor, featuring responsive design and dynamic components that adapt smoothly across all devices. The application incorporates multiple interconnected pages with intuitive navigation, selected third-party libraries and engaging animations. Custom-built UI elements and thoughtful state management ensure a fluid user experience, whether visitors are exploring the site on their phones or desktop browsers.</p>
            <section>
                <a href="https://github.com/MiaDarvasi/MayuWay.git" target="blank" title="MayuWay"><img src={git} /></a>
            </section>
            <ul className="gallery">
                <li className="gallery-item">
                    <h3>Responsivene Layout</h3>
                    <section className="gallery-item-imgs">
                        <img src={homepagedesktop} />
                        <img src={homepagemobile} />
                        <img src={hummenu} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Multiple Pages and Components</h3>
                    <section className="gallery-item-imgs">
                        <img src={homepagedesktop2} />
                        <img src={yogastyles} />
                    </section>
                </li>
                <li className="gallery-item">
                    <h3>Custom Design</h3>
                    <section className="gallery-item-imgs">
                        <img src={cpmexmp} />
                        <img src={cpmexmp2} />
                        <img src={cpmmobile} />
                    </section>
                </li>
            </ul>
        </section>
    </>
}
