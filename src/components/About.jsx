// import { useGSAP } from "@gsap/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Brain, CalendarCheck, Lightbulb, MessageSquare, RefreshCw, SearchCheck, Smile, Target, UserRound, Users } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const quoteRef = useRef(null);
  const taglineRef = useRef(null);

  useGSAP(() => {
    const nameSplit = new SplitText(nameRef.current, { type: "chars" });
    const quoteSplit = new SplitText(quoteRef.current, { type: "chars" });
    const taglineSplit = new SplitText(taglineRef.current, { type: "chars" });

    gsap.from(nameSplit.chars, {
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        markers:true
      },
      opacity: 0,
      y: 50,
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
            Baburao Adkane
          </h1>
          <p
            ref={quoteRef}
            className="capitalize text-lg md:text-xl font-medium"
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
          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <UserRound className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Who I Am</h2>
            <p className="text-sm leading-relaxed">
              I have a deep understanding of testing strategies, bug tracking, and delivering quality software products.
            </p>
          </div>
          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <SearchCheck className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Attentive</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I pay close attention to details, ensuring that no bug or inconsistency goes unnoticed throughout the development lifecycle.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <Brain className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Strong Analytical</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I break down complex problems into smaller, manageable parts, helping teams uncover root causes and prevent issues early.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <MessageSquare className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Excellent Communication</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I communicate clearly with developers, designers, and stakeholders to align expectations and ensure transparency in testing.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <Users className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Excellent Collaboration</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I work closely with cross-functional teams, contributing to a supportive and productive work environment that values quality.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <Lightbulb className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Curious and Proactive</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I constantly explore how systems behave and proactively suggest improvements—even before issues arise.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <CalendarCheck className="mb-3 text-[#8C39D9]" size={28} />
            <h2 className="text-lg font-semibold mb-2">Strong Time Management</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I prioritize testing tasks efficiently, ensuring deliverables are completed on time without compromising quality.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <RefreshCw className="mb-3 text-[#8C39D9]" size={24} />
            <h2 className="text-lg font-semibold mb-2">Patience and Perseverance</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I thoroughly retest edge cases and scenarios, staying calm through repetitive or challenging test cycles.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <Smile className="mb-3 text-[#8C39D9]" size={24} />
            <h2 className="text-lg font-semibold mb-2">User-Centric Mindset</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I think like an end user to test real-world scenarios, ensuring the product delivers value and ease of use.
            </p>
          </div>

          <div className="bg-black/30 border p-6 rounded-tr-4xl">
            <Target className="mb-3 text-[#8C39D9]" size={24} />
            <h2 className="text-lg font-semibold mb-2">Product Oriented</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I focus on how each feature contributes to the product’s overall goals, ensuring functionality aligns with user needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

