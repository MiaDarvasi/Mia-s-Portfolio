// import { About } from "../cmps/About";

// export function HomePage() {
//     return (
//         <>
//             <section className="home-page">
//                 <section className="section-1">
//                     <section className="parallax">
//                         <div className="parallax-inner">
//                             <br />
//                             <h1>MIA DARVASI</h1>
//                             <p>Web Developer | Web Design</p>
//                             <br />
//                         </div>
//                     </section>
//                     <About />
//                     <section className="parallax-1">
//                         <div className="parallax-inner">
//                             <br />
//                             <h1>Skilled in End-to-End Web Development & Currently Managing Multiple Active Commercial Websites</h1>
//                             <br />
//                         </div>
//                     </section>
//                 </section>
//                 <section className="section-2">
//                     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</h3>
//                     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</h3>
//                     <section className="parallax-2">
//                         <div className="parallax-inner">
//                             <br />
//                             <h1>Mountains</h1>
//                             <br />
//                         </div>
//                     </section>
//                     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</h3>
//                     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</h3>
//                 </section>
//             </section >
//         </>
//     )
// }



import { useEffect } from "react";
import { About } from "../cmps/About";
import { Services } from "../cmps/Services";

export function HomePage() {
    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector('.parallax');
            const scrollPosition = window.scrollY;

            // Adjust the background position relative to scroll
            parallax.style.backgroundPosition = `center ${scrollPosition * -0.5}px`;
            // Multiply by 0.5 to make the image scroll at half the speed of the page (parallax effect)
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        </div>
                    </section>
                    <About />

                    <section className="parallax-1">
                        <div className="parallax-inner">
                            <Services />
                        </div>
                    </section>

                </section>
            </section>
        </>
    );
}
