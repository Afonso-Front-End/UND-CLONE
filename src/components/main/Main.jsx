import "./main.css"
import Section_1 from "./section-1/Section-1"
import Section_2 from "./section-2/Section_2";
import Section_3 from "./section-3/Sectiobn-3";
import Section_4 from "./section-4/Section-4";
import Section_5 from "./section-5/Section-5";
import Section_6 from "./section-6/Section-6";

function Main(params) {
    return (
        <div className="container-main">
            <div className="content-main">
                <Section_1 />
                <div className="red">
                    <Section_2 />
                    <Section_3 />
                </div>
                <div className="blue">
                    <Section_4 />
                    <Section_5 />
                </div>
                <Section_6 />
            </div>
        </div>
    )
}

export default Main;