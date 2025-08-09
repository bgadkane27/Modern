import { useRef } from "react";
import { projects } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCarousel() {
  const cardRef = useRef([]);

  useGSAP(() => {
    cardRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0.5, scale: 0.85, rotateX: 15, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          skewY: 0,
          ease: "power2.out",
          duration: 1.25,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section id="project" className="min-h-screen py-24 flex flex-col items-center relative overflow-hidden">
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
      <div className="w-full max-w-7xl mx-auto mb-8 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-sm pb-4">
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="border font-bold px-4 py-1 rounded-full text-xs">
              PROJECTS
            </div>
          </div>
        </div>
        <p className="text-2xl mb-2 text-center">
          Projects Aren't Just Work — It Reflects <strong className="text-[#8C39D9] font-bold">Passion, quality and reliability</strong>.
        </p>
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRef.current[index] = el)}
              className="relative overflow-hidden transition group border w-full min-h-96 shadow-md bg-black"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <a
                title="link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-4 transition-all duration-300 ease-in group-hover:scale-125"
              >
                <Link2 size={24} className="text-[#8C39D9]" />
              </a>

              <div
                className="p-6 absolute bottom-0 w-full bg-black min-h-60 transform transition-transform duration-300 group-hover:-translate-y-5"
              >
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
