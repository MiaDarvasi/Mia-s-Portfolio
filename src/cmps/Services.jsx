// import React, { useState, useEffect } from 'react';

// import services from '../assets/imgs/service2.png'

// export function Services() {
//     const [scrollPosition, setScrollPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollPosition(window.scrollY);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <section className="services">
//             <section className="services-title">
//                 <h1
//                     className="moving-text"
//                     style={{ transform: `translateX(${scrollPosition * 0.3}px)` }}
//                 >
//                     SERVICES
//                 </h1>
//                 <img src={services} />
//             </section>
//             <section className="services-list">
//                 <div className='sevices-exmp'>
//                     <img src="" />
//                     <h2>Development</h2>
//                     <p>Transforming your vision into reality with cutting-edge technology and the latest web architecture trends.</p>
//                 </div>
//                 <div className='sevices-exmp'>
//                     <img src="" />
//                     <h2>Design & Creative</h2>
//                     <p>Crafting visually captivating designs that engage and resonate with your target audience.</p>
//                 </div>
//                 <div className='sevices-exmp'>
//                     <img src="" />
//                     <h2>Web & Mobile</h2>
//                     <p>Transforming ideas into exceptional web and mobile app experiences.</p>
//                 </div>
//                 <div className='sevices-exmp'>
//                     <img src="" />
//                     <h2>UX & UI</h2>
//                     <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
//                 </div>
//             </section>
//         </section>
//     );
// }




import React, { useState, useEffect } from 'react';
import dev from '../assets/imgs/icons/dev.svg';
import design from '../assets/imgs/icons/design.svg';
import mobile from '../assets/imgs/icons/mobile.svg';
import uxui from '../assets/imgs/icons/uxui.svg';



export function Services() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isListening, setIsListening] = useState(true);  // Track whether we are listening to scroll

    useEffect(() => {
        const threshold = 400; // The threshold scroll position
        let lastScrollPosition = 0;  // To track the last scroll position

        const handleScroll = () => {
            const newScrollPosition = window.scrollY;
            setScrollPosition(newScrollPosition);

            // Scroll Down: Remove listener when scrolled past the threshold
            if (newScrollPosition > threshold && lastScrollPosition <= threshold) {
                window.removeEventListener('scroll', handleScroll);
                setIsListening(false);  // Stop listening
            }

            // Scroll Up: Reattach listener if user scrolls back above the threshold
            if (newScrollPosition <= threshold && lastScrollPosition > threshold) {
                window.addEventListener('scroll', handleScroll);
                setIsListening(true);  // Start listening again
            }

            // Update the last scroll position
            lastScrollPosition = newScrollPosition;
        };

        // Initially add the scroll event listener
        if (isListening) {
            window.addEventListener('scroll', handleScroll);
        }

        // Cleanup the event listener when the component unmounts or is cleaned up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isListening]); // Dependency array ensures that the listener is added/removed correctly

    return (
        <section className="services" id="services">
            <section className="services-container">
                <section className="services-title">
                    <h1
                        className="moving-text"
                        style={{ transform: `translateX(${scrollPosition * 0}px)` }}
                    >
                        SERVICES
                    </h1>
                </section>
                <section className="services-list">
                    <div className='sevices-exmp'>
                        <img src={dev} />
                        <h2>Development</h2>
                        <p>Transforming your vision into reality with cutting-edge technology and the latest web architecture trends.</p>
                    </div>
                    <div className='sevices-exmp'>
                        <img src={design} />
                        <h2>Design & Creative</h2>
                        <p>Crafting visually captivating designs that engage and resonate with your target audience.</p>
                    </div>
                    <div className='sevices-exmp'>
                        <img src={mobile} />
                        <h2>Web & Mobile</h2>
                        <p>Transforming ideas into exceptional web and mobile app experiences.</p>
                    </div>
                    <div className='sevices-exmp'>
                        <img src={uxui} />
                        <h2>UX & UI</h2>
                        <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                    </div>
                </section>
                <button className="button-with-arrow">
                    <a href="#connect">
                        Hear More
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </button>
            </section>
        </section>
    );
}
