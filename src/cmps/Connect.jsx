import ig from "../assets/imgs/icons/ig.svg";
import linkedin from "../assets/imgs/icons/linkedin.svg";
import git from "../assets/imgs/icons/git.svg";


export function Connect() {
    return <section className="connect" id="connect">
        <h1>Get In Touch</h1>
        <p><span>Email:</span> miadarv@gmail.com</p>
        <section className="social">
            <a href="https://github.com/MiaDarvasi" target="blank" title="Git"><img src={git} /></a>
            <a href="https://www.linkedin.com/in/mia-darvasi/" target="blank" title="LinkedIn"><img src={linkedin} /></a>
            <a href="https://www.instagram.com/Miadarv/#" target="blank" title="Instagram"><img src={ig} /></a>
        </section>
    </section>
}
