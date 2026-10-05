import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-pcb-dark border-t border-slate-200 dark:border-pcb-trace relative overflow-hidden">
      
      {/* Oscilloscope Wave Animation */}
      <div className="absolute top-0 left-0 w-full h-12 opacity-30 pointer-events-none overflow-hidden">
        <svg className="w-[200%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <motion.path 
            initial={{ x: 0 }}
            animate={{ x: -500 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
            d="M0,50 C100,0 150,100 250,50 C350,0 400,100 500,50 C600,0 650,100 750,50 C850,0 900,100 1000,50" 
            fill="none" 
            stroke="currentColor" 
            className="text-accent-cyan"
            strokeWidth="3" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="text-accent-cyan" size={24} />
              <span className="font-display font-bold text-xl tracking-wider">HARSHA GANESH</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Hardware & PCB Design Engineer creating robust, glowing electronics from concept to bench test.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-mono">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-accent-cyan transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-accent-cyan transition-colors">Experience</a></li>
              <li><a href="#portfolio" className="hover:text-accent-cyan transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-accent-cyan transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 font-mono">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Harshavar8jdm" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/harsha-ganesh-ee" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:harshaganesh300@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-accent-cyan transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-pcb-trace flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-mono">
            © {new Date().getFullYear()} A. Harsha Vardhana Ganesh. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-500 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse"></span>
              Built with caffeine and copper.
            </span>
            
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded bg-slate-200 dark:bg-pcb-trace flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-accent-cyan hover:text-pcb-dark transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
