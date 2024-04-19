const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        {/* Add your contact form or contact information here */}
        {/* add colorful matthewgordon64@gmail.com */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2 text-black">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:matthewgordon64@gmail.com"
                className="text-indigo-600 hover:text-indigo-800 text-black"
              >
                matthewgordon64@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
