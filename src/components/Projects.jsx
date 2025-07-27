import { useRef } from "react";
import { projects } from "../constants"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link2 } from "lucide-react";


const Projects = () => {
  const sectionRef = useRef(null);
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
    <section
      // ref={sectionRef}
      className="relative min-h-screen flex flex-col py-24 overflow-hidden">
      <div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
					backgroundSize: "50px 50px",
				}}
			></div>
      <div className="w-full max-w-7xl mx-auto mb-8 px-4">
        <h1 className="
                text-xl sm:text-4xl font-bold max-w-fit pb-6
                bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text font-serif
                ">
          Projects
        </h1>
        <p className="text-2xl mb-2">
          Projects Aren't Just Work — It Reflects <strong className="text-[#747bff] font-bold">Passion, quality and reliability</strong>.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (cardRef.current[i] = el)}
              className="bg-black/40 border p-6 rounded-tr-4xl transition-colors duration-300 hover:bg-black/60"
            >
              <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
              <p className="text-base text-justify leading-relaxed text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-blue-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <a
                title="link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-5"
              >
                <Link2 color="#b82e85" size={24} />
              </a>
              {/* <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Projects