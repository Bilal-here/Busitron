import { motion } from "framer-motion";

export default function TechLogos() {
  const technologies = [
    { name: "HTML", img: "https://wallpapercave.com/wp/wp10869912.jpg" },
    { name: "CSS", img: "https://wallpapercave.com/wp/wp14445334.png" },
    { name: "JavaScript", img: "https://wallpapercave.com/wp/wp12454867.png" },
    { name: "Tailwind CSS", img: "https://wallpapercave.com/wp/wp13639446.jpg" },
    { name: "React", img: "https://wallpapercave.com/wp/wp2465923.jpg" },
    { name: "Next.js", img: "https://wallpapercave.com/wp/wp11846997.png" },
    { name: "Node.js", img: "https://wallpapercave.com/wp/wp4923978.jpg" },
    { name: "Express.js", img: "https://icon.icepanel.io/Technology/svg/Express.svg" },
    { name: "MongoDB", img: "https://wallpapercave.com/wp/wp8725088.jpg" },
  ];

  return (
    <div className="relative bg-black text-white py-20 px-6 lg:px-24 flex flex-col items-center overflow-hidden">
      {/* Background Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-fixed opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />

      {/* Heading */}
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 uppercase tracking-wide relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies We Use
      </motion.h2>

      {/* Logo Grid */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 justify-items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {technologies.map((tech, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_#00f0ff] rounded-2xl p-4 bg-gray-900 bg-opacity-60 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-gray-700 shadow-md">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-medium mt-3 text-gray-300 uppercase tracking-wider">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
