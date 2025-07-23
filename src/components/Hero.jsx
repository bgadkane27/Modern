
const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-black/90" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Browser does not support the video tag.
      </video>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        <div className="container max-w-7xl mx-auto px-4 py-32 flex flex-col">
          <div className="pr-4">
            <h1
              className="sm:text-6xl text-4xl font-semibold mb-6 max-w-3xl">
              I am Baburao — A <span className="text-blue-600 font-bold">QA/QC Engineer </span>
              ensuring quality through effective test strategies.
            </h1>
            <div className="w-full flex justify-end">
              <p
              className="text-sm sm:text-lg max-w-xs text-justify leading-relaxed mb-4 font-semibold">
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
            <p className="text-sm sm:text-lg max-w-3xl text-justify leading-relaxed">
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

export default Hero