import React from 'react';

const Hero = () => {
  return (
    <div
      className="bg-cover container bg-center h-[600px] w-full flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/gradientBackground.png')" }}
    >
      <div className='w-[80%]'>

     <div className="text-center px-4 py-12">
  <h2 className="text-4xl md:text-6xl font-semibold mx-auto max-w-3xl leading-tight">
    Create amazing content <br />
    <span className="text-[#5044e5]">with AI tools</span>
  </h2>

  <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-base md:text-lg">
    Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
    <button className="bg-[#5044e5] text-white px-6 py-3 rounded-md hover:bg-[#3e37c8] transition">
      Start creating now
    </button>
    <button className="border border-[#5044e5] text-[#5044e5] px-6 py-3 rounded-md hover:bg-[#f0f0ff] transition">
      Watch demo
    </button>
  </div>
</div>
 </div>

    </div>
  );
};

export default Hero;
