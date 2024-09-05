import "./section-1.css"
import test02 from "./test02.webp"
import undBread from "./und-bread.webp"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);

function Section_1() {

    useGSAP(() => {
        let contexto = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".section-01",
                start: "top top",
                end: "bottom 0%",
                scrub: 1,
                pin: ".section-01",
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
            let revealContainer = document.querySelectorAll(".reveal-1");

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
                        trigger: ".section-01",
                        start: "top top",
                        end: "bottom 0%",
                        scrub: 1,
                    }
                })
                const breads1 = new SplitText(".breads", { type: "chars" })
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
            <section className="section-01" >

                <div className="container-reveal-1">
                    <div className="test01"></div>
                    <div className="und-bread01"></div>
                    <h1 id="breads-1" className="breads">BREADS</h1>

                    <div className="reveal-1">
                        <img src={test02} alt="test02" className="test02" />
                        <img src={undBread} alt="und-bread" className="und-bread" />
                        <h1 id="breads-2" className="breads" >BREADS</h1>
                    </div>

                </div>

            </section >

            <aside className="aside-1">
                <p>
                    Our bread is handmade with carefully selected, safe, and secure ingredients,
                    and is completely additive-free. We use organic flour and a unique formula
                    that includes up to 75% almond milk, heavy cream, and water to create a moist,
                    fluffy bread with a mellow flavor. Almond milk contains less fat and fewer
                    calories than raw milk, and is rich in minerals and vitamins. It also adds
                    natural sweetness and a mellow mouthfeel, giving it a taste more akin to
                    brioche than ordinary bread. Three different flavors are available: Basic,
                    Chocolate, and Condensed Milk.
                </p>
            </aside>
        </>
    )
}

export default Section_1;