const Skills = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center">
            <img
              src="/skill1.png"
              alt="Icon representing proficiency in HTML"
              className="w-12 h-12 mr-4"
            />
            <p className="text-lg font-bold">HTML</p>
          </div>
          {/* Add more skill items */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
