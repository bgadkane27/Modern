const About = () => {
  return (
    <section id="about" className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "60px 60px",
        }}
      ></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-green-600/10 rounded-full blur-2xl">
      </div>
    </section>
  );
};

export default About;
