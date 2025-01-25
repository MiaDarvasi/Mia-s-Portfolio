import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../assets/imgs/mylogoclean.png';

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

    const headerClass = `app-header ${isScrolled || location.pathname !== "/" ? 'scrolled' : ''}`;

    return (
        <section className={headerClass}>
            <section className='app-header-content'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {!isMobile && (
                    <nav>
                        <HashLink to="/#about">About</HashLink>
                        <HashLink to="/#services">Services</HashLink>
                        <HashLink to="/#projects">Projects</HashLink>
                    </nav>
                )}

                <a href="#connect"><button>Get In Touch</button></a>
            </section>
        </section>
    );
}
