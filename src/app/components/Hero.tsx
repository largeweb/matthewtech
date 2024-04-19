const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-500 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-white mb-8">
              I am a passionate developer specializing in creating amazing web
              experiences.
            </p>
            <a
              href="#projects"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-100"
            >
              View Projects
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero-image.png"
              alt="Illustration of a developer working on a computer, with code and graphics floating around"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
