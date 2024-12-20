import landpage from "../assets/imgs/landpage2.jpg";
import computer from "../assets/imgs/icons/computer.svg";



export function About() {
    return <section className="about" id="about">
        <img src={landpage} />
        <div className="about-title">
            <h1>Hi, <br /> I'm a <span>Web Developer</span></h1>
            <p>My name is <span>Mia</span>, Welcome to my <span>Portfolio</span></p>
        </div>
        <section className="about-extended">
            <section>
                <h1>ABOUT ME</h1>
                <p>
                    Motivated and detail-oriented aspiring web developer with a strong foundation
                    in web technologies and a passion for building efficient web applications. A fast
                    learner and proactive team player, with high organizational skills and a
                    responsible approach. Eager to leverage my skills within a dynamic development
                    team and committed to continuous learning and professional growth.
                </p>
            </section>
            <section className="about-animation">
                <div className="blob"></div>
                <img src={computer} />
            </section>
        </section>
        
    </section>
}
