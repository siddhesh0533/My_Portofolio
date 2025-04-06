import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/siddhesh-patil-bba162276/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@siddheshpatil0533",
    icon: Instagram,
    url: "https://www.instagram.com/siddheshpatil0533",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "GeeksforGeeks",
    displayName: "GeeksforGeeks",
    subText: "@siddheshpatil0533",
    icon: ({ className, ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-6 h-6 ${className}`}
        {...props}
      >
        <path d="M6.2 10.4c.5.1 1.3.1 2.3.1-.5-.7-.9-1.4-1.2-2.1-.4-.7-.5-1.3-.5-1.8 0-.5.1-1 .3-1.5.2-.5.6-.9 1.2-1.2.6-.3 1.3-.5 2.1-.5 1.2 0 2.3.3 3.1.9.8.6 1.2 1.4 1.2 2.3 0 .6-.1 1.1-.4 1.6-.3.5-.6.8-1.1 1.1-.5.2-1 .3-1.6.3-.5 0-.9-.1-1.3-.3-.4-.2-.7-.4-.9-.7s-.4-.6-.4-.9c0-.2.1-.3.3-.3.1 0 .3.1.4.2.3.4.6.6 1 .8.4.2.8.3 1.3.3.5 0 1-.1 1.4-.4s.6-.8.6-1.5c0-.7-.3-1.2-.9-1.6s-1.3-.6-2.1-.6c-.9 0-1.5.2-2 .5-.5.3-.7.7-.7 1.2 0 .5.2 1.1.5 1.7.4.6.8 1.3 1.4 2.1l2.6 3.2c.7.8 1.3 1.5 1.7 2.1.4.6.6 1.1.6 1.7 0 .6-.2 1.1-.5 1.6-.3.5-.8.9-1.3 1.1-.6.3-1.3.4-2.2.4-1.2 0-2.2-.3-3-.9s-1.2-1.3-1.2-2.2c0-.4.1-.8.3-1.2.2-.4.6-.6 1.1-.8.1 0 .2 0 .3.1.1.1.1.2.1.4 0 .1 0 .2-.1.3-.2.1-.4.3-.5.5-.1.2-.2.4-.2.6 0 .6.3 1.1.9 1.5.6.4 1.4.6 2.3.6 1 0 1.7-.2 2.2-.6s.8-.9.8-1.5c0-.4-.1-.8-.3-1.2s-.5-.9-.9-1.3l-2.4-3-2.5-3.1c-.6-.8-1.1-1.5-1.5-2.2-.4-.7-.6-1.3-.6-1.9 0-1 .4-1.8 1.1-2.3.7-.6 1.6-.9 2.7-.9 1.2 0 2.2.3 3.1.8.8.5 1.2 1.2 1.2 2.1 0 .5-.1.9-.3 1.2s-.5.6-.8.7c-.3.2-.6.2-.9.2-.3 0-.6-.1-.9-.3-.3-.2-.5-.4-.6-.6-.1-.1-.1-.2-.1-.3 0-.1.1-.2.3-.3.2 0 .4.1.5.2.2.2.5.4.9.4.4 0 .7-.1.9-.3.2-.2.3-.4.3-.8 0-.4-.2-.7-.6-.9-.4-.2-1-.4-1.8-.4-.8 0-1.4.2-1.8.5-.4.3-.6.7-.6 1.1 0 .5.2 1.1.5 1.6.4.6.8 1.2 1.4 1.9l2.5 3.1c.8.9 1.4 1.8 1.8 2.6.4.8.6 1.5.6 2.1 0 .9-.3 1.6-.9 2.2s-1.3 1-2.2 1.2c-.5.1-1.1.2-1.7.2-1.4 0-2.5-.3-3.4-.9-.9-.6-1.4-1.4-1.4-2.4 0-.5.1-1 .3-1.3.2-.4.5-.6.9-.8z" />
      </svg>
    ),
    url: "https://www.geeksforgeeks.org/user/siddheshpi22n/",
    color: "#2f8d46",
    gradient: "from-[#2f8d46] to-[#4caf50]"
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@siddhesh0533",
    icon: Github,
    url: "https://github.com/siddhesh0533",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "LeetCode",
    displayName: "LeetCode",
    subText: "@siddheshpatil0533",
    icon: ({ className, ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className={`w-6 h-6 ${className}`}
        {...props}
      >
        <path d="M333.5 92.6 233.2 193l98.6 97.6-44.8 43.4L145.2 193l143.6-142zM192.1 364l43.2 44L79.4 562 0 480.7z" />
      </svg>
    ),
    url: "https://leetcode.com/siddheshpatil0533",
    color: "#FFA116",
    gradient: "from-[#FFA116] to-[#f7c873]"
  }
  
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [instagram, youtube, github, tiktok] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
  href={linkedIn.url}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
>
  {/* Hover Gradient Background */}
  <div 
    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${linkedIn.gradient}`}
  />
  
  {/* Content Container */}
  <div className="relative flex items-center gap-4">
    {/* Icon Container */}
    <div className="relative flex items-center justify-center">
      <div 
        className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
        style={{ backgroundColor: linkedIn.color }}
      />
      <div className="relative p-2 rounded-md">
        <linkedIn.icon
          className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
          style={{ color: linkedIn.color }}
        />
      </div>
    </div>

    {/* Text Container */}
    <div className="flex flex-col">
      <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
        {linkedIn.displayName}
      </span>
      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {linkedIn.subText}
      </span>
    </div>
  </div>

  {/* External Link */}
  <ExternalLink 
    className="relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
  />

  {/* Shine Effect */}
  <div 
    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </div>
</a>


        {/* Second Row - Instagram & YouTube */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[instagram, youtube].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>

        {/* Third Row - GitHub & TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[github, tiktok].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`} />
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                     style={{ backgroundColor: link.color }} />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;