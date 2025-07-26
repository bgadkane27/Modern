import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { aboutCards } from "../constants";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const quoteRef = useRef(null);
  const taglineRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const nameSplit = new SplitText(nameRef.current, { type: "chars" });
    const quoteSplit = new SplitText(quoteRef.current, { type: "chars" });
    const taglineSplit = new SplitText(taglineRef.current, { type: "chars" });

    gsap.from(nameSplit.chars, {
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top 60%",
        // end: "top 20%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
      y: 100,
      opacity: 0,
      x: 100,
      stagger: 0.05,
      duration: 1,
      ease: "expo.out",
    });

    gsap.from(quoteSplit.chars, {
      scrollTrigger: {
        trigger: quoteRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 40,
      stagger: 0.04,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(taglineSplit.chars, {
      scrollTrigger: {
        trigger: taglineRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      y: 30,
      stagger: 0.03,
      duration: 1,
      ease: "power4.out",
    });
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Grid and Glows */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-green-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1 right-1 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-600/10 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-violet-100/10 pointer-events-none" />

      {/* Hero Section */}
      <div
        ref={containerRef}
        className="relative z-10 text-center w-full min-h-screen max-w-7xl mx-auto flex flex-col justify-between items-center px-6 py-24 sm:px-8 md:px-16"
      >
        <p className="text-xs tracking-widest uppercase text-blue-400">About Me</p>

        <div className="flex flex-col">
          <h1
            ref={nameRef}
            className="text-6xl md:text-9xl font-bold tracking-wide mb-4"
          >
            Divyansh Adkane
          </h1>
          <p
            ref={quoteRef}
            className="text-lg md:text-xl font-medium"
          >
            " Quality isn't a task — it's a discipline "
          </p>
        </div>

        <p
          ref={taglineRef}
          className="mt-6 text-sm tracking-wider capitalize text-gray-300"
        >
          “ Committed to delivering quality and reliability in every project ”
        </p>
      </div>

      {/* Grid Section Below the Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {aboutCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-black/30 border p-6 rounded-tr-4xl transition-colors duration-300 hover:bg-black/40"
              >
                <Icon className="mb-3 text-[#8C39D9]" size={28} />
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative z-0 h-[58vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full mx-auto left-1/2 -translate-x-1/2 opacity-50"
          src="/videos/anka.webm"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

    </section>
  );
};

export default About;

