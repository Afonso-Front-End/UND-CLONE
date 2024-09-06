import "./section-2.css"
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

function Section_2(params) {

    useGSAP(() => {
        let contexto = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".section-2",
                // markers: true,
                start: "top 20%",
                end: "bottom 60%",
                pin: ".text-fixed",
            })
        })
        return () => {
            contexto.kill()
        }
    }, [])

    return (
        <section className="section-2">

            <div className="content-text-fixed">
                <div className="text-fixed">
                    <h1>Almond Milk Bread</h1>
                    <h2>A moist, fluffy bread with a mellow flavor.</h2>
                </div>
            </div>

            <div className="show-presentation-images">

                <div className="content-show-presentation-images">
                    <div className="content-images-1">
                        <div className="bread-condensed-01"></div>
                        <div className="basic-bread01"></div>
                    </div>

                    <div className="content-images-2">
                        <div className="bread-basic-2loaf"></div>
                        <div className="bread-chocolate-01"></div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Section_2;