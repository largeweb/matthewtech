import { config } from "../config";

const Skills = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {config.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={`${skill.title} Logo`}
                  className={`${
                    skill.title || skill.description
                      ? "w-16 h-16 mb-4"
                      : "w-32 h-32"
                  } object-contain`}
                />
              )}
              {skill.title && (
                <h3 className="text-xl font-bold mb-2 text-center">
                  {skill.title}
                </h3>
              )}
              {skill.description && (
                <p className="text-center">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
