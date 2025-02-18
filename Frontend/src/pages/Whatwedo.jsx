import React from "react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-12">
        {/* WHAT WE DO Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold border-l-8 border-blue-500 pl-6">
            WHAT WE DO?
          </h1>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            At <span className="text-blue-400 font-semibold">Busitron</span>, we empower businesses with cutting-edge tools and 
            opportunities to connect, collaborate, and grow. Our platform serves 
            as a catalyst for success, enabling meaningful interactions and 
            strategic partnerships.
          </p>
        </div>

        {/* Our Approach Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Approach
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            We combine technology, innovation, and a strong network to facilitate 
            business growth. Whether you are a startup, an enterprise, or a solo 
            entrepreneur, <span className="text-blue-400 font-semibold">Busitron</span> provides the right environment for 
            you to thrive.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Services
          </h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔗", title: "Networking", desc: "A dynamic platform where businesses connect and create meaningful relationships." },
              { icon: "🤝", title: "Business Matchmaking", desc: "AI-driven insights help businesses find the right partners and opportunities." },
              { icon: "📚", title: "Knowledge Sharing", desc: "Access industry insights, expert articles, and growth strategies." },
              { icon: "🎤", title: "Live Events & Webinars", desc: "Participate in high-value networking events and expert-led discussions." },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold flex items-center space-x-2">
                  <span className="text-3xl">{service.icon}</span>
                  <span>{service.title}</span>
                </h3>
                <p className="text-gray-300 mt-2 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact Section */}
        <div>
          <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6">
            Our Impact
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Busitron is not just a platform; it’s a movement that drives business 
            success. With thousands of businesses leveraging our ecosystem, we 
            continue to build a future where collaboration and innovation shape 
            new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
