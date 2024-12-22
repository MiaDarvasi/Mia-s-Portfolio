import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/imgs/mylogoclean.png'

export function AppHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showNav = location.pathname === "/";

    return (
        <section className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
            <section className='app-header-content'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>

                {showNav && !isMobile && (
                    <nav>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                    </nav>
                )}

                <a href="#connect"><button>Let's Connect</button></a>
            </section>
        </section>
    );
}
