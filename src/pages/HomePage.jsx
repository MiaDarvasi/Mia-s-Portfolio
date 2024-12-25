import { useEffect } from "react";
import { About } from "../cmps/About";
import { Services } from "../cmps/Services";
import { Skills } from "../cmps/Skills";
import { Projects } from "../cmps/Projects";

export function HomePage() {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector('.parallax');
            const scrollPosition = window.scrollY;

            parallax.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="home-page">
                <section className="section-1">
                    <section className="parallax">
                        <div className="parallax-inner">
                            <br />
                            <h1>MIA DARVASI</h1>
                            <p>Web Developer | Web Design</p>
                            <br />
                            <button onClick={scrollToAbout}>▼</button>
                        </div>
                    </section>
                    <About />
                    <Skills />
                    <section className="parallax-1">
                        <div className="parallax-1-inner">
                            <Services />
                        </div>
                    </section>
                </section>
                <Projects />
            </section>
        </>
    );
}
