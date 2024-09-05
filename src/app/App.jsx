import Header from "../components/header/Header"
import Main from "../components/main/Main"
import ScrollToTop from "./ScrollTop";

import gsap from "gsap";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

function App() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: containerRef.current,
      content: "#content",
      smooth: 1,
      effects: true
    })

    setTimeout(() => {
      smoother.scrollTo(0, 0);
    }, 100);


    return () => {
      smoother.kill()
    }
  }, [])


  return (
    <Router>
      <div id="container" ref={containerRef}>
        <div id="content">
          <ScrollToTop />
          <Header />
          <Main />
        </div>
      </div>
    </Router>
  )
}
export default App
