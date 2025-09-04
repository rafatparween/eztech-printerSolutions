
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Dignode() {
  const items = [
    { 
      name: "Printer Setup", 
      icon: "https://cdn-icons-png.freepik.com/512/8625/8625321.png",
      gradient: "from-cyan-400 to-blue-600",
      shadow: "shadow-cyan-500/30"
    },
    { 
      name: "Printer Offline", 
      icon: "https://static.vecteezy.com/system/resources/previews/024/198/139/non_2x/printer-icon-in-blue-color-vector.jpg",
      gradient: "from-purple-400 to-indigo-600",
      shadow: "shadow-purple-500/30"
    },
    { 
      name: "Wireless Printer", 
      icon: "https://cdn-icons-png.freepik.com/512/6864/6864708.png",
      gradient: "from-emerald-400 to-teal-600",
      shadow: "shadow-emerald-500/30"
    },
    { 
      name: "Ink Issues", 
      icon: "https://www.shareicon.net/data/2015/05/04/33421_printer_256x256.png",
      gradient: "from-amber-400 to-orange-600",
      shadow: "shadow-amber-500/30"
    },
    { 
      name: "Scanner", 
      icon: "https://t3.ftcdn.net/jpg/04/81/66/56/360_F_481665663_aij2vpvwMjSS1LltlvcgmjzsOYSuHgbe.jpg",
      gradient: "from-rose-400 to-pink-600",
      shadow: "shadow-rose-500/30"
    },
    { 
      name: "Fax Problems", 
      icon: "https://pngimg.com/d/printer_PNG101582.png",
      gradient: "from-violet-400 to-fuchsia-600",
      shadow: "shadow-violet-500/30"
    },
  ];

  return (
    <div className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100/50"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.3, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Premium Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
              Diagnose & Solve
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Premium solutions for all your printing challenges
          </motion.p>
        </motion.div>

        {/* Luxury 3D Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
              }}
              className="relative group perspective-1000"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-lg transition duration-500`}></div>
              
              {/* 3D Card Container */}
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  transition: { duration: 0.5 }
                }}
                className={`relative bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center border border-gray-200/50 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:${item.shadow}`}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                }}
              >
                {/* Floating Icon with Gradient Background */}
                <div className={`relative w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/20"></div>
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-12 h-12 object-contain filter drop-shadow-lg z-10 transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h3>
                <p className="text-gray-500 mb-6">Expert solution for your issue</p>
                
                {/* Animated Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-auto w-full bg-gradient-to-br ${item.gradient} text-white px-6 py-3 rounded-xl text-md font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2`}
                >
                  <span>Get Premium Solution</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiArrowRight className="text-lg" />
                  </motion.div>
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}