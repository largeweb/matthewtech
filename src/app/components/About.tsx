const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="/about-code-icon.png"
              alt="Illustration of a person with various skills and expertise, surrounded by icons representing different technologies"
              className="w-full mb-8 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-8">
              I am a skilled developer with expertise in web development
              technologies. I specialize in creating responsive and interactive
              user interfaces using modern frameworks and libraries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
