import "./section-6.css"
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)
function Section_6(params) {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".section-6",
            start: "top 20%",
            end: "bottom 65%",
            pin: ".text-fixed-6",
        })

    }, [])
    return (
        <section className="section-6">

            <div className="content-text-fixed-6">
                <div className="text-fixed-6">
                    <h1>
                        The Finest Ingredients
                    </h1>
                </div>
            </div>

            <div className="show-presentation-images-6">

                <div className="content-show-presentation-images-6">
                    <div className="content-images-6">
                        <div className="imagem-matcha-bottle"></div>
                        <div className="imagem-organic-miso-yellow01"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Section_6;