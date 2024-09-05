import "./section-5.css"
import undSoup02_02 from "./und-soup02-02.webp"
import matcha01 from "./matcha01.webp"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);


function Section_5(params) {

    useGSAP(() => {
        let contexto = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".section-5",
                start: "top top",
                end: "bottom 0%",
                scrub: 1,
                pin: ".section-5",
            });

            // ScrollTrigger.create({
            //     trigger: ".section-number-two",
            //     start: "top 20%",
            //     end: "+=250%",
            //     markers: true,
            //     scrub: 1,
            //     pin: ".content-text-fixed",
            // });
        });
        return () => {
            contexto.revert();
        };
    }, []);
    useGSAP(() => {
        let contexto = gsap.context(() => {
            let revealContainer = document.querySelectorAll(".reveal-5");

            revealContainer.forEach((container) => {
                let image = container.querySelector("img")
                let timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: 0.5,
                        start: "top 0%",
                        end: "bottom 0%",
                    }
                })


                timeline.set(container, { autoAlpha: 1 })
                timeline.fromTo(container,
                    { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration: 1, ease: "none" },
                    { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", duration: 1, ease: "none" },
                )

                const timelineChars = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".section-5",
                        start: "top top",
                        end: "bottom 0%",
                        scrub: 1,
                    }
                })
                const breads1 = new SplitText(".ingredients", { type: "chars" })
                const breadsChars1 = breads1.chars
                timelineChars.fromTo(breadsChars1,
                    { fontSize: "3vw", duration: 1, stagger: 0.05, ease: "none" },
                    { fontSize: "10vw", duration: 1, stagger: 0.05, ease: "none" },
                )

            })
        });

        return () => {
            contexto.revert();
        };
    }, []);

    return (
        <>
            <section className="section-5" >

                <div className="container-reveal-5">
                    <div className="und-soup02-01"></div>
                    <div className="matcha02"></div>
                    <h1 id="ingredients-1" className="ingredients">INGREDIENTS</h1>

                    <div className="reveal-5">
                        <img src={undSoup02_02} alt="undSoup02_01" className="undSoup02_02" />
                        <img src={matcha01} alt="matcha01" className="matcha01" />
                        <h1 id="ingredients-2" className="ingredients" >INGREDIENTS</h1>
                    </div>

                </div>

            </section >

            <aside className="aside-5">
                <p>
                    The finest Uji Matcha and completely additive-free original miso are available.
                    Our Uji Matcha from Kyoto Prefecture is the highest quality matcha produced with
                    historical background and processing methods using 100% tea leaves produced exclusively
                    in Kyoto. We source our high-quality, healthy, authentic matcha directly from the farmers. <br />
                    Our original miso is made by by a female miso maker with 30 years of miso making experience
                    using rice koji inherited from a long-established soy sauce shop located at the foot of
                    Todaiji Temple in Nara that has been in operation for 160 years, and completely
                    additive-free handmade miso made with Japanese soybeans. Miso is considered
                    the pride of Japan as a superfood with many health benefits. <br />
                    Please try our delicious and essential Japanese ingredients for your health!
                </p>
            </aside>
        </>
    )
}

export default Section_5;