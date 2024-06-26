import { config } from "../config";
const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              {project.logo && (
                <img
                  src={project.logo}
                  alt="Screenshot of a web application showcasing a modern and intuitive user interface"
                  className="w-full rounded-t-lg"
                />
              )}
              {project.banner && (
                <img
                  src={project.banner}
                  alt="Screenshot of a web application showcasing a modern and intuitive user interface"
                  className="w-full rounded-t-lg"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                {Array.isArray(project.description) ? (
                  project.description.map((desc, i) => (
                    <p key={i} className="text-gray-600">
                      {desc}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600">{project.description}</p>
                )}
                {Array.isArray(project.url) ? (
                  project.url.map((url, i) => (
                    <a
                      key={i}
                      href={url}
                      className="block text-indigo-600 hover:text-indigo-800 mt-4"
                    >
                      View ({url})
                    </a>
                  ))
                ) : (
                  <a
                    href={project.url}
                    className="block text-indigo-600 hover:text-indigo-800 mt-4"
                  >
                    View ({project.url})
                  </a>
                )}
                {project.status && (
                  <p className="text-gray-600 mt-2">Status: {project.status}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
