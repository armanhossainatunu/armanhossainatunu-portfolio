import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const SocialSidebar = () => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/armanhossainatunu', icon: 'fab fa-linkedin-in', hoverColor: 'hover:bg-[#0077b5]', title: 'LinkedIn', isReactIcon: false },
    { href: 'https://github.com/armanhossainatunu', icon: 'fab fa-github', hoverColor: 'hover:bg-[#333]', title: 'Github', isReactIcon: false },
    { href: 'https://www.instagram.com/armanhossainatunu', icon: 'fab fa-instagram', hoverColor: 'hover:bg-[#E1306C]', title: 'Instagram', isReactIcon: false },
    { href: 'https://x.com/arman_atunu', icon: FaXTwitter, hoverColor: 'hover:bg-black', title: 'X (Twitter)', isReactIcon: true },
  ];

  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-4 p-2 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-l-2xl border-l border-t border-b border-gray-200 dark:border-white/10 shadow-lg">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white ${link.hoverColor} transition-all duration-300`}
          href={link.href}
          title={link.title}
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
  );
};

export default SocialSidebar;