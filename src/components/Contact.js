import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { fadeInUp, staggerContainer, cardVariants } from '../utils/animations';

/*
  EMAIL SETUP INSTRUCTIONS:
  
  For a more professional email solution, you can set up EmailJS:
  
  1. Go to https://www.emailjs.com/ and create a free account
  2. Create an email service (Gmail, Outlook, etc.)
  3. Create an email template with these variables:
     - {{from_name}} - sender's name
     - {{from_email}} - sender's email
     - {{subject}} - email subject
     - {{message}} - email message
  4. Get your Service ID, Template ID, and User ID from EmailJS dashboard
  5. Replace the IDs in the handleSubmit function below
  6. Uncomment the EmailJS code and comment out the mailto solution
  
  Current implementation uses mailto links as a simple fallback.
*/

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!', {
        position: "top-right",
        autoClose: 3000,
        progressClassName: "!bg-red-500",
        
        icon: <FaExclamationCircle className="text-red-500 w-5 h-5" />
      });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address!', {
        position: "top-right",
        autoClose: 3000,
        progressClassName: "!bg-red-500",
        className: "!bg-red-100 !text-red-800 border-l-4 border-red-500",
        icon: <FaExclamationCircle className="text-red-500 w-5 h-5" />
      });
      setIsLoading(false);
      return;
    }

    try {
      // Show loading toast
      const loadingToast = toast.loading('Sending your message...', {
        position: "top-right",
        progressClassName: "!bg-[#875df8]",
        icon: <FaSpinner className="text-[#875df8] w-5 h-5 animate-spin" />
      });

      // For now, we'll use a mailto link as a simple solution
      // You can replace this with EmailJS or other email service later
      const subject = encodeURIComponent(formData.subject || 'New message from portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:armanhossainatunu@gmail.com?subject=${subject}&body=${body}`;
      
      // Simulate processing time
      setTimeout(() => {
        // Dismiss loading toast
        toast.dismiss(loadingToast);
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success toast
        toast.success('Message Send Successfully🎉.', {
          position: "top-right",
          autoClose: 5000,
          progressClassName: "!bg-base-300",
          className:'!bg-[#875df8] !text-base-200',
          icon: <FaCheckCircle className="text-[#ffff] w-5 h-5" />
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try contacting me directly at armanhossainatunu@gmail.com', {
        position: "top-right",
        autoClose: 5000,
        progressClassName: "!bg-red-500",
        icon: <FaExclamationCircle className="text-red-500 w-5 h-5" />
      });
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { href: 'https://github.com/armanhossainatunu', icon: 'fab fa-github', hoverColor: 'hover:bg-black', isReactIcon: false },
    { href: 'https://www.linkedin.com/in/armanhossainatunu', icon: 'fab fa-linkedin-in', hoverColor: 'hover:bg-[#0077b5]', isReactIcon: false },
    { href: 'https://www.instagram.com/armanhossainatunu', icon: 'fab fa-instagram', hoverColor: 'hover:bg-[#E1306C]', isReactIcon: false },
    { href: 'https://x.com/arman_atunu', icon: FaXTwitter, hoverColor: 'hover:bg-black', isReactIcon: true },
  ];

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10 py-24 bg-white/40 dark:bg-white/5 backdrop-blur-sm border-t border-gray-200 dark:border-white/5" 
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-orange-400 pb-2">
            Let's Work Together
          </h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <motion.div 
            variants={cardVariants}
            className="space-y-8"
          >
            <div className="relative bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Email Me</h5>
                    <a 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
                      href="mailto:armanhossainatunu@gmail.com"
                    >
                      armanhossainatunu@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h5>
                    <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h5>
                    <a 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
                      href="tel:+8801820086865"
                    >
                      +880 1820 086865
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h5>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-white ${link.hoverColor} hover:text-white dark:${link.hoverColor} transition-all duration-300`}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.isReactIcon ? (
                        <link.icon className="text-lg" />
                      ) : (
                        <i className={`${link.icon} text-lg`}></i>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="relative bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-accent-pink text-white font-semibold shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;