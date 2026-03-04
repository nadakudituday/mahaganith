import { motion } from 'framer-motion';
import { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: '🔬' },
    { id: 'smart', name: 'Smart Lighting', icon: '💡' },
    { id: 'solar', name: 'Solar Solutions', icon: '☀️' },
    { id: 'industrial', name: 'Industrial', icon: '🏭' }
  ];

  const products = [
    {
      id: 1,
      name: "IoT Smart Streetlight Pro",
      category: "smart",
      price: "₹45,000 - ₹1,20,000",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Real-time monitoring via mobile app",
        "Adaptive brightness control",
        "Motion detection sensors",
        "Energy consumption analytics",
        "Weather adaptive lighting",
        "Remote fault detection",
        "Automatic dimming schedules"
      ],
      uses: [
        "City streets and highways",
        "Residential colonies",
        "Commercial complexes",
        "Industrial areas",
        "Educational campuses"
      ],
      description: "Our flagship IoT-enabled streetlight with advanced sensors and cloud connectivity for complete smart city integration.",
      specs: {
        power: "50W-150W",
        luminosity: "5000-15000 lm",
        lifespan: "50,000+ hours",
        connectivity: "4G/LTE, LoRaWAN, Wi-Fi",
        warranty: "5 Years",
        sensor: "PIR, Light, Temperature"
      },
      savings: "75% energy reduction",
      roi: "18 months"
    },
    {
      id: 2,
      name: "Solar Smart Streetlight",
      category: "solar",
      price: "₹55,000 - ₹1,50,000",
      image: "https://images.unsplash.com/photo-1508514197211-4d6afbf6e632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "100% off-grid operation",
        "Battery backup 3-5 days",
        "Smart charge management",
        "MPPT technology",
        "Zero electricity bills",
        "Weather resistant",
        "Auto brightness control"
      ],
      uses: [
        "Remote villages",
        "Highways and expressways",
        "Rural areas",
        "Farm lighting",
        "Mining areas"
      ],
      description: "Environmentally friendly solution combining solar power with smart lighting technology for sustainable illumination.",
      specs: {
        power: "20W-80W",
        solar: "Monocrystalline panel",
        battery: "LiFePO4 12V-100Ah",
        autonomy: "3-5 days",
        warranty: "5 Years",
        certification: "IP67, IEC, UL"
      },
      savings: "100% energy reduction",
      roi: "30 months"
    },
    {
      id: 3,
      name: "Urban Light Node",
      category: "smart",
      price: "₹35,000 - ₹85,000",
      image: "https://images.unsplash.com/photo-1579532533134-16e26103b6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Environmental monitoring",
        "Air quality sensors",
        "Noise level detection",
        "Smart city integration",
        "Traffic flow analysis",
        "Emergency response system",
        "Data analytics platform"
      ],
      uses: [
        "Smart city projects",
        "Traffic junctions",
        "Public squares",
        "Parking areas",
        "Smart campuses"
      ],
      description: "Multi-functional streetlight node serving as a hub for smart city data collection and environmental monitoring.",
      specs: {
        power: "30W-100W",
        luminosity: "3000-10000 lm",
        sensors: "PM2.5, CO, NO2, Noise, Temp",
        connectivity: "5G, NB-IoT, Ethernet",
        warranty: "3 Years",
        certification: "IP65, FCC, RoHS"
      },
      savings: "65% energy reduction",
      roi: "24 months"
    },
    {
      id: 4,
      name: "Industrial Heavy Duty",
      category: "industrial",
      price: "₹75,000 - ₹2,00,000",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Extreme weather resistance",
        "High-output illumination",
        "Advanced thermal management",
        "Surge protection",
        "Heavy-duty construction",
        "Remote diagnostics",
        "Automated maintenance alerts"
      ],
      uses: [
        "Industrial parks",
        "Manufacturing facilities",
        "Warehouses",
        "Construction sites",
        "Mining operations"
      ],
      description: "Industrial-grade streetlight designed for harsh environments and high-traffic areas with maximum durability.",
      specs: {
        power: "100W-300W",
        luminosity: "10000-30000 lm",
        durability: "-40°C to +60°C",
        connectivity: "Fiber optic, 4G, RS485",
        warranty: "7 Years",
        certification: "IP68, MIL-STD"
      },
      savings: "80% energy reduction",
      roi: "20 months"
    },
    {
      id: 5,
      name: "Compact Smart Luminaire",
      category: "smart",
      price: "₹25,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1517248135467-4cbbad980045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Space-saving design",
        "Easy installation",
        "Cloud-based management",
        "Group control system",
        "Mobile app integration",
        "Scheduled operations",
        "Energy monitoring"
      ],
      uses: [
        "Residential streets",
        "Society complexes",
        "Small commercial areas",
        "Educational institutes",
        "Hospital campuses"
      ],
      description: "Compact yet powerful solution perfect for residential areas and smaller streets with smart features.",
      specs: {
        power: "15W-50W",
        luminosity: "1500-5000 lm",
        installation: "Standard pole mount",
        connectivity: "Wi-Fi, Bluetooth, Zigbee",
        warranty: "2 Years",
        certification: "IP54, CE"
      },
      savings: "60% energy reduction",
      roi: "15 months"
    },
    {
      id: 6,
      name: "Hybrid Smart System",
      category: "solar",
      price: "₹65,000 - ₹1,80,000",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Solar + grid hybrid",
        "Intelligent power switching",
        "Battery optimization",
        "Grid tie capability",
        "Net metering ready",
        "Energy storage integration",
        "Smart grid compatibility"
      ],
      uses: [
        "Urban infrastructure",
        "Commercial complexes",
        "Industrial parks",
        "Smart city projects",
        "Government buildings"
      ],
      description: "Advanced hybrid system combining solar and grid power for maximum reliability and efficiency.",
      specs: {
        power: "40W-120W",
        solar: "Polycrystalline panel",
        battery: "LiFePO4 24V-200Ah",
        hybrid: "Solar + Grid",
        warranty: "5 Years",
        certification: "IP66, IEC, UL"
      },
      savings: "85% energy reduction",
      roi: "22 months"
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Smart Street Lighting Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your city with our advanced IoT-powered street lighting systems. 
              Reduce energy costs by up to 75% while enhancing public safety and sustainability.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: "75%", label: "Energy Savings", icon: "⚡" },
              { number: "50K+", label: "Units Installed", icon: "🌍" },
              { number: "24/7", label: "Monitoring", icon: "📊" },
              { number: "5+", label: "Years Warranty", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-300 group border border-white/20"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <svg className="w-24 h-24 text-white opacity-80 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">{product.savings}</div>
                  <div className="text-sm opacity-90">Energy Savings</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-blue-200 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-200">Price:</span>
                    <span className="text-sm font-bold text-orange-400">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-200">ROI:</span>
                    <span className="text-sm font-bold text-green-400">{product.roi}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Uses:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.uses.slice(0, 3).map((use, idx) => (
                      <span key={idx} className="bg-white/10 text-xs text-blue-200 px-2 py-1 rounded-full">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium py-3 rounded-xl hover:from-orange-400 hover:to-orange-300 transition-all duration-300 text-sm"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your City?</h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join municipalities across India in adopting smart street lighting solutions. 
              Reduce costs, enhance safety, and build sustainable cities for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 text-lg shadow-xl"
              >
                Get Free Consultation
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200 text-lg"
              >
                Download Catalog
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    

      {/* Enhanced Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
          >
            <div className="relative">
              {/* Modal Header */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-700 rounded-t-3xl flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 rounded-t-3xl"></div>
                <svg className="w-20 h-20 text-white opacity-90 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left Column - Product Info */}
                  <div>
                    <div className="mb-6">
                      <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-orange-500/30">
                        {selectedProduct.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-4">{selectedProduct.name}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedProduct.description}</p>
                      
                      <div className="flex gap-4 mb-6">
                        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex-1">
                          <div className="text-2xl font-bold text-green-400 mb-1">{selectedProduct.savings}</div>
                          <div className="text-sm text-green-300 font-medium">Energy Savings</div>
                        </div>
                        <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 flex-1">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{selectedProduct.roi}</div>
                          <div className="text-sm text-blue-300 font-medium">Return on Investment</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Features
                      </h4>
                      <div className="grid gap-3">
                        {selectedProduct.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start bg-white/5 rounded-xl p-4 border border-white/10">
                            <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Ideal Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.uses.map((use, idx) => (
                          <span key={idx} className="bg-orange-500/20 text-orange-300 px-3 py-2 rounded-full text-sm border border-orange-500/30">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Specifications & Actions */}
                  <div>
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Technical Specifications
                      </h4>
                      <div className="bg-gradient-to-br from-white/5 to-blue-500/5 rounded-2xl p-6 border border-white/10">
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-3 border-b border-white/10 last:border-0">
                            <span className="text-gray-400 capitalize font-medium text-sm">{key}:</span>
                            <span className="text-white font-semibold text-sm">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">{selectedProduct.price}</div>
                      <p className="text-orange-100 mb-6 text-sm">Pricing varies based on specifications and quantity</p>
                      
                      <div className="space-y-3">
                        <a
                          href="/contact"
                          onClick={() => setSelectedProduct(null)}
                          className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 text-center block shadow-lg"
                        >
                          Get Quote
                        </a>
                        <button
                          onClick={() => setSelectedProduct(null)}
                          className="w-full bg-transparent border-2 border-white text-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
                        >
                          Download Spec Sheet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Products;
