import "./section-3.css"
import img01 from "./und-pastry.webp"
import img02 from "./furikake-cartoon02.gif"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

function Section_3(params) {

    useGSAP(() => {
        let contexto = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".section-03",
                start: "top top",
                end: "bottom 0%",
                scrub: 1,
                pin: ".section-03",
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
            let revealContainer = document.querySelectorAll(".reveal-03");

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
                        trigger: ".section-03",
                        start: "top top",
                        end: "bottom 0%",
                        scrub: 1,
                    }
                })
                const breads1 = new SplitText(".pastry", { type: "chars" })
                const breadsChars1 = breads1.chars
                timelineChars.fromTo(breadsChars1,
                    { fontSize: "3vw", duration: 1, stagger: 0.05, ease: "none" },
                    { fontSize: "16vw", duration: 1, stagger: 0.05, ease: "none" },
                )

            })
        });

        return () => {
            contexto.revert();
        };
    }, []);


    return (
        <>
            <section className="section-03" >

                <div className="container-reveal-03">
                    <div id="img-one-03"></div>
                    <div id="img-two-03"></div>
                    <h1 id="pastry-1" className="pastry">PASTRY</h1>

                    <div className="reveal-03">
                        <img src={img01} alt="image-01-03" className="image-01-03" />
                        <img src={img02} alt="image-02-03" className="image-02-03" />
                        <h1 id="pastry-2" className="pastry" >PASTRY</h1>
                    </div>

                </div>

            </section >

            <aside className="aside-3">
                <p>
                    The Melon bread, a very famous Japanese sweet bread, and cookies made with
                    Japanese ingredients are available. Our melon bread is made with UnD's signature
                    almond milk bread dough and baked with almond pudding kneaded cookie dough
                    on top, making it fluffy, crispy. Our cookies are crispy on the outside and
                    moist on the inside with a very elegant sweetness. The cookies come in three
                    different flavors: the basic cookie, a matcha cookie made with premium Uji
                    matcha green tea, and a buckwheat tea cookie made with traditional Japanese
                    buckwheat tea.
                </p>
            </aside>
        </>
    )
}

export default Section_3;