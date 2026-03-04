import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: '',
    budget: '',
    timeline: '',
    country: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }
    
    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: '',
        budget: '',
        timeline: '',
        country: ''
      });
    }, 2000);
  };

  const quickContact = [
    {
      icon: '📞',
      title: 'Call Us',
      value: '+91 9985110345',
      description: 'Mon-Fri 9AM-6PM IST',
      action: 'tel:+919985110345'
    },
    {
      icon: '📧',
      title: 'Email Us',
      value: 'info@mahaganith.com',
      description: 'We reply within 24 hours',
      action: 'mailto:info@mahaganith.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Chat Now',
      description: 'Available 24/7',
      action: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: 'Visakhapatnam Office',
      description: 'Dwaraka Nagar, Vizag',
      action: '#'
    }
  ];

  const products = [
    'IoT Smart Streetlight Pro',
    'Solar Smart Streetlight',
    'Urban Light Node',
    'Industrial Heavy Duty',
    'Compact Smart Luminaire',
    'Hybrid Smart System',
    'Not sure - Need consultation'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹2,00,000',
    '₹2,00,000 - ₹10,00,000',
    '₹10,00,000 - ₹50,00,000',
    'Above ₹50,00,000'
  ];

  const timelines = [
    'Immediate - Within 1 month',
    'Urgent - 1-3 months',
    'Planned - 3-6 months',
    'Future - 6+ months'
  ];

  const countries = [
    'India', 'United States', 'United Kingdom', 'UAE', 'Singapore',
    'Australia', 'Canada', 'Germany', 'France', 'Japan', 'Other'
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Ready to transform your city with smart street lighting? 
              As an innovative startup, our passionate team is here to help you find the perfect solution 
              for your specific needs.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
          </motion.div>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {quickContact.map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{contact.title}</h3>
                <p className="text-blue-300 font-semibold mb-2">{contact.value}</p>
                <p className="text-blue-200 text-sm">{contact.description}</p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Combined Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
                        errors.name ? 'border-red-400' : 'border-white/20'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
                        errors.email ? 'border-red-400' : 'border-white/20'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-2">
                    Product Interest
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800">Select a product</option>
                    {products.map((product, index) => (
                      <option key={index} value={product} className="bg-gray-800">
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
                        errors.budget ? 'border-red-400' : 'border-white/20'
                      }`}
                    >
                      <option value="" className="bg-gray-800">Select budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-gray-800">
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-red-400 text-sm mt-1">{errors.budget}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
                        errors.timeline ? 'border-red-400' : 'border-white/20'
                      }`}
                    >
                      <option value="" className="bg-gray-800">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline} className="bg-gray-800">
                          {timeline}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="text-red-400 text-sm mt-1">{errors.timeline}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-200 mb-2">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
                        errors.country ? 'border-red-400' : 'border-white/20'
                      }`}
                    >
                      <option value="" className="bg-gray-800">Select country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country} className="bg-gray-800">
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-400 text-sm mt-1">{errors.country}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-400' : 'border-white/20'
                    }`}
                    placeholder="Tell us about your project requirements, expected scale, and any specific challenges..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 text-blue-200 text-center"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-blue-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                
                {/* Quick Contact */}
                <div className="space-y-4 mb-8">
                  {quickContact.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.action}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{contact.title}</h4>
                        <p className="text-blue-300 font-semibold text-sm">{contact.value}</p>
                        <p className="text-blue-200 text-xs">{contact.description}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Location */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Our Office</h4>
                  <div className="space-y-2">
                    <p className="text-blue-200 text-sm font-medium">Corporate Office</p>
                    <p className="text-blue-200 text-sm">1-1, Balarampuram Street, M Kothavalasa Village</p>
                    <p className="text-blue-200 text-sm">Jami Mandal, Vizianagaram Dist</p>
                    <p className="text-blue-200 text-sm">Andhra Pradesh - 535214</p>
                    <p className="text-blue-300 text-sm">+91 9985110345</p>
                    <p className="text-blue-300 text-sm">info@mahaganith.com</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 mt-6 text-white">
                  <h4 className="text-lg font-bold mb-3">Quick Response</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold mb-1">24H</div>
                      <div className="text-blue-100 text-xs">Email Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">2H</div>
                      <div className="text-blue-100 text-xs">Call Back</div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Contact;
