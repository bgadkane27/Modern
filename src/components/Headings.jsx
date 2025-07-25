import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Headings = () => {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useGSAP(() => {
    headingRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.3, scale: 0.85, x: 50 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          x:0,
          ease: "power3.out",
          duration: 1.25,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >      
      <div className="absolute inset-0 z-0">
        <img src="/public/imgs/main (7).jpg" alt="background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex flex-col text-center pr-4 px-2">
        <h1 ref={addToRefs} className="text-4xl sm:text-9xl font-bold mb-2">
          Crafting <span className="text-blue-400">Quality</span>,
        </h1>
        <h1 ref={addToRefs} className="text-4xl sm:text-9xl font-bold mb-2">
          Ensuring <span className="text-blue-400">Excellence</span>,
        </h1>
        <h1 ref={addToRefs} className="text-4xl sm:text-9xl font-bold mb-2">
          Take <span className="text-blue-400">Challenges</span>,
        </h1>
        <h1 ref={addToRefs} className="text-4xl sm:text-9xl font-bold">
          Building <span className="text-blue-400">Trust</span>,
        </h1>
        <span className="text-2xl font-bold mt-12 text-blue-400">To Make a real difference.</span>
      </div>
    </div>
  );
};

export default Headings;

