import "./section-4.css"
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

function Section_4(params) {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".section-4",
            // markers: true,
            start: "top 20%",
            end: "bottom 75%",
            pin: ".text-fixed-4",
        })

    }, [])

    return (
        <section className="section-4">

            <div className="content-text-fixed-4">
                <div className="text-fixed-4">
                    <h1>
                        Japanese pastry with <br />
                        elegant sweetness.
                    </h1>
                </div>
            </div>

            <div className="show-presentation-images-4">

                <div className="content-show-presentation-images-4">
                    <div className="content-images">
                        <div className="imagem-cookie-chocolate"></div>
                        <div className="imagem-cookie-matcha"></div>
                    </div>

                    <div className="content-images">
                        <div className="cookie-sobacha"></div>
                        <div className="DSC_0773-Edit"></div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Section_4;