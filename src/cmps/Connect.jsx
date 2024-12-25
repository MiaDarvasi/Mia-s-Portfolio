import ig from "../assets/imgs/icons/ig.svg";
import linkedin from "../assets/imgs/icons/linkedin.svg";
import git from "../assets/imgs/icons/git.svg";
import lions from "../assets/imgs/testLP/africa19flipped.jpg"


export function Connect() {
    return <section className="connect" id="connect">
        <section className="connect-container">
            <img className="connect-main-img" src={lions} />
            <section className="connect-content">
                <h1>Get In Touch</h1>
                <p><span>Email:</span> miadarv@gmail.com</p>
                <section className="social">
                    <a href="https://github.com/MiaDarvasi" target="blank" title="Git"><img src={git} /></a>
                    <a href="https://www.linkedin.com/in/mia-darvasi/" target="blank" title="LinkedIn"><img src={linkedin} /></a>
                    <a href="https://www.instagram.com/Miadarv/#" target="blank" title="Instagram"><img src={ig} /></a>
                </section>
            </section>
        </section>
    </section>
}
