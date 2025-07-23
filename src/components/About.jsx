const About = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url('/imgs/main(10).avif')`,
    //   }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/95 z-0" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero-bg2.mp4" type="video/mp4" />
        Browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center pr-4">
        <h2 className="text-4xl sm:text-9xl font-bold mb-12">
          Crafting 
          <span className="text-blue-400"> Quality</span>, <br />
          Ensuring 
          <span className="text-blue-400"> Excellence</span>, <br /> 
          Take 
          <span className="text-blue-400"> Challenges</span>, <br/>
          Building 
          <span className="text-blue-400"> Trust</span>, <br />
        </h2>
        <p className="text-xl font-bold">Making a real difference.</p>
      </div>
    </section>
  );
};

export default About;
