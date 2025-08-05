import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitText from "gsap/SplitText";
import Light from "./Light";

gsap.registerPlugin(SplitText);

const Hero = () => {

  const headingRef = useRef(null);
  const subtitleRef1 = useRef(null);
  const subtitleRef2 = useRef(null);

  useGSAP(() => {
    const split = new SplitText(headingRef.current, { type: "words,chars" });
    const lines1 = new SplitText(subtitleRef1.current, { type: "lines" });
    const lines2 = new SplitText(subtitleRef2.current, { type: "lines" });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    tl.from(split.chars, {
      x: 50,
      opacity: 0,
      stagger: 0.02,
      rotationX: -180,
      ease: "sine",
    })
      .from(lines1.lines, {
        x: 100,
        opacity: 0,
        duration: 1.5,
      }, "-=0.5")
      .from(lines2.lines, {
        y: 20,
        opacity: 0,
        duration: 1.5,
      }, "-=1");
  }, []);

  return (
    <div id="hero" 
    className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Light
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={0.5}
          lightSpread={1}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.1}
          distortion={0.01}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen overflow-x-hidden">
        <div className="container max-w-7xl mx-auto px-4 py-32 flex flex-col">
          <div className="pr-4">
            <h1
              ref={headingRef}
              className="sm:text-6xl text-4xl font-semibold mb-6 max-w-3xl">
              I am Baburao — A <span className="text-blue-500 font-bold">QA/QC Engineer </span>
              ensuring quality through effective test strategies.
            </h1>
            <div className="w-full flex justify-end">
              <p
                ref={subtitleRef1}
                className="text-sm sm:text-lg max-w-xs leading-relaxed mb-4 font-semibold text-justify">
                Currently a QA/QC Engineer at
                <span className="text-blue-400 font-medium"> Expert Business Solutions</span>, designing test strategies that fulfill product needs across
                <span className="text-blue-400 font-medium"> HRMS</span>,
                <span className="text-blue-400 font-medium"> ERP</span>,
                <span className="text-blue-400 font-medium"> Retail</span>,
                <span className="text-blue-400 font-medium"> Restaurant</span>,
                <span className="text-blue-400 font-medium"> CRM</span>,
                <span className="text-blue-400 font-medium"> Subscription</span>, and
                <span className="text-blue-400 font-medium"> Real Estate</span> domains.
              </p>
            </div>
            <p
              ref={subtitleRef2}
              className="text-sm sm:text-lg max-w-3xl text-justify leading-relaxed">
              Let's team up —
              <span className="text-blue-400 font-medium"> your ideas</span>,
              <span className="text-blue-400 font-medium"> my expertise</span>, and
              <span className="text-blue-400 font-medium"> a commitment to quality</span> every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;