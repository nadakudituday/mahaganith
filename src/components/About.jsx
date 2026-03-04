import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "70%", label: "Energy Savings" },
    { number: "50K+", label: "Lights Installed" },
    { number: "24/7", label: "Monitoring" },
    { number: "99.9%", label: "Uptime" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuously pushing the boundaries of IoT technology to create smarter, more efficient solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "Committed to reducing carbon footprint through energy-efficient smart lighting solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const teamMembers = [
    {
      name: "D Harshini",
      position: "CEO & Founder",
      image: "/api/placeholder/300/300",
      bio: "Visionary leader with 15+ years in renewable energy and smart city solutions. Pioneered IoT street lighting in India.",
      linkedin: "#",
      email: "harshini@mahaganith.com"
    },
    {
      name: "Nadakuditi Uday",
      position: "CTO",
      image: "/api/placeholder/300/300",
      bio: "Tech expert specializing in IoT, AI, and sustainable energy systems. Former NASA researcher with 12 patents.",
      linkedin: "#",
      email: "uday@mahaganith.com"
    },
    {
      name: "Gowtham Ayila",
      position: "Head of Operations",
      image: "/api/placeholder/300/300",
      bio: "Operations excellence expert with 10+ years managing large-scale infrastructure projects across 15+ countries.",
      linkedin: "#",
      email: "gowtham@mahaganith.com"
    },
    {
      name: "Shankar Kanneboina",
      position: "Head of R&D",
      image: "/api/placeholder/300/300",
      bio: "Research scientist focused on sustainable lighting technologies. PhD in Electrical Engineering from IIT Bombay.",
      linkedin: "#",
      email: "shankar@mahaganith.com"
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started with a small team of 3 engineers in Bangalore with a vision to revolutionize street lighting in India.",
      milestone: true
    },
    {
      year: "2017",
      title: "First Major Project",
      description: "Successfully installed 500 smart streetlights in Bangalore's tech corridor, saving 40% energy costs.",
      milestone: true
    },
    {
      year: "2019",
      title: "Expansion Phase",
      description: "Expanded operations to 5 major cities and installed 10,000+ units. Raised Series A funding of $5M.",
      milestone: true
    },
    {
      year: "2020",
      title: "Innovation Breakthrough",
      description: "Launched proprietary IoT platform and received patent for adaptive lighting technology.",
      milestone: false
    },
    {
      year: "2021",
      title: "National Recognition",
      description: "Awarded 'Best Smart City Solution' by Government of India. Partnered with 15+ municipalities.",
      milestone: true
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Entered international markets with projects in UAE, Singapore, and Africa. Installed 50,000+ units globally.",
      milestone: true
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description: "Launched carbon-negative streetlight series and committed to planting 1 million trees.",
      milestone: false
    }
  ];

  const clients = [
    {
      name: "Bangalore Municipal Corporation",
      logo: "/api/placeholder/200/100",
      project: "15,000 Smart Streetlights",
      testimonial: "Mahaganith's solution reduced our energy costs by 65% and improved citizen safety significantly."
    },
    {
      name: "Mumbai Smart City",
      logo: "/api/placeholder/200/100",
      project: "8,000 Urban Light Nodes",
      testimonial: "The environmental monitoring features have been invaluable for our smart city initiatives."
    },
    {
      name: "Delhi Metro",
      logo: "/api/placeholder/200/100",
      project: "5,000 Industrial Lights",
      testimonial: "Robust and reliable solutions that withstand extreme weather conditions."
    },
    {
      name: "Hyderabad IT Hub",
      logo: "/api/placeholder/200/100",
      project: "3,000 Compact Luminaires",
      testimonial: "Perfect blend of aesthetics and functionality for our tech campus."
    },
    {
      name: "Chennai Port Authority",
      logo: "/api/placeholder/200/100",
      project: "2,000 Heavy Duty Lights",
      testimonial: "Exceptional durability and performance in harsh marine environment."
    },
    {
      name: "Pune Smart City",
      logo: "/api/placeholder/200/100",
      project: "Solar Streetlight Project",
      testimonial: "Zero electricity bills and excellent performance even during monsoon season."
    }
  ];

  const officeLocations = [
    {
      city: "Visakhapatnam",
      address: "Corporate Office: #123, Dwaraka Nagar, Visakhapatnam - 530016",
      phone: "+91 891 2345 6789",
      email: "vizag@mahaganith.com",
      employees: "50+",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              About Mahaganith TECHOSOL
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Pioneering the future of smart street lighting in India since 2015. 
              We combine cutting-edge IoT technology with sustainable energy solutions 
              to create brighter, safer, and greener cities.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: "50K+", label: "Units Installed", icon: "💡" },
              { number: "25+", label: "Cities Served", icon: "🏙️" },
              { number: "375+", label: "Team Members", icon: "👥" },
              { number: "9+", label: "Years Excellence", icon: "⭐" }
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
        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">From Vision to Reality</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Founded in 2015 by a team of passionate engineers, Mahaganith TECHOSOL started 
                  as an innovative startup with a simple mission: to make Indian cities smarter and more sustainable through 
                  cutting-edge smart street lighting solutions.
                </p>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Today, we're proud to be one of India's fastest-growing smart street lighting startups, with 
                  installations across 25+ cities and a reputation for innovation and excellence in the smart city space.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Our startup journey continues as we expand our reach and develop new technologies to 
                  create brighter, safer, and more efficient urban environments for tomorrow's cities.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl h-96 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 012-2H7a2 2 0 012 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-6 py-3 rounded-2xl font-bold">
                  Since 2015
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-300"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 ${
                    item.milestone ? 'ring-2 ring-blue-400' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                      {item.milestone && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Milestone</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-blue-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{member.position}</p>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-blue-200 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={`mailto:${member.email}`} className="text-blue-200 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Offices</h2>
          <div className="flex justify-center">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 max-w-md w-full"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 012-2H7a2 2 0 012 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{office.city}</h3>
                  <p className="text-blue-100 mb-4">{office.address}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-blue-200">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {office.phone}
                    </div>
                    <div className="flex items-center text-blue-200">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {office.email}
                    </div>
                    <div className="flex items-center text-blue-200">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {office.employees} Employees
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients & Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Valued Clients</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{client.name}</span>
                </div>
                <p className="text-blue-400 font-semibold mb-2">{client.project}</p>
                <p className="text-blue-100 text-sm italic">"{client.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
            <h3 className="text-4xl font-bold mb-6">Join Our Journey</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Be part of the smart city revolution. Whether you're a municipality, 
              business partner, or talented professional, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 text-lg shadow-xl"
              >
                Partner With Us
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200 text-lg"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
