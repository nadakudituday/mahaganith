import { motion } from 'framer-motion';
import lightImage from '../assets/ci.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Smart Street Lighting
              <span className="block text-3xl md:text-5xl mt-2 text-blue-300 font-bold">
                for Smart Cities
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto lg:mx-0 font-semibold">
              As an innovative startup, we transform your city with intelligent illumination solutions that 
              reduce energy costs by 70% while enhancing public safety and sustainability.
            </p>
            
            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-xl"
              >
                Explore Products
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Light Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:pl-12"
          >
            <div className="relative">
              {/* Main glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 rounded-3xl blur-2xl opacity-60 scale-105"></div>
              
              {/* Secondary glow for depth */}
              <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl blur-xl opacity-40"></div>
              
              {/* Light Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-6 backdrop-blur-sm border border-white/10 shadow-2xl">
                <img 
                  src={lightImage}
                  alt="Smart Street Lighting"
                  className="w-full h-auto max-h-[400px] object-contain rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500"
                />
                
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
              </div>
              
              {/* Floating light beam effect */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl"
              ></motion.div>
              
              {/* Top left accent */}
              <motion.div
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [-5, 5, -5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-2 border-white/20"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              
              {/* Bottom right accent */}
              <motion.div
                animate={{ 
                  y: [8, -8, 8],
                  rotate: [5, -5, 5]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-2 border-white/20"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </motion.div>
              
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "70%", label: "Energy Savings" },
            { number: "50K+", label: "Lights Installed" },
            { number: "24/7", label: "Monitoring" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
    
  );
};

export default Hero;
