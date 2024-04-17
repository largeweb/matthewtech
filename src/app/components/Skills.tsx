const Skills = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
              <div className="flex items-center"></div>
              <img
                src="/cloudflare-logo.png"
                alt="Cloudflare Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">
                Pages | Workers | R2 | KV | D1 | Edge Runtime{" "}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/huggingface-logo.png"
                alt="HuggingFace Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">
                Transformers | LLMs | Video | ML Development
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/openai-logo.png"
                alt="OpenAI Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">
                OpenAI GPT4 | DALLE-3 | Function Calling | TTS | Whisper
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/anthropic-logo.png"
                alt="Anthropic Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">Anthropic | Claude 3</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/nextjs-logo.png"
                alt="NextJS Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">
                NextJS Full Stack Framework (Edge Enabled)
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/expo-logo.png"
                alt="Cloudflare Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">
                Expo React Native Mobile App Development
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/python-logo.png"
                alt="Python Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">Python</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <div className="flex items-center">
              <img
                src="/typescript-logo.png"
                alt="Typescript Logo"
                className="w-12 h-12 mr-4"
              />
              <p className="text-lg font-bold">Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
