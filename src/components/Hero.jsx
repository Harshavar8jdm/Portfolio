import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Wrench, CircuitBoard, Cpu, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative traces in background */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 200 L150 200 L250 300 L500 300" stroke="currentColor" className="text-accent-cyan" strokeWidth="2" fill="none" />
        <path d="M800 100 L950 100 L1050 200 L1200 200" stroke="currentColor" className="text-accent-amber" strokeWidth="2" fill="none" />
        <circle cx="150" cy="200" r="4" className="fill-accent-cyan" />
        <circle cx="500" cy="300" r="4" className="fill-accent-cyan" />
        <circle cx="950" cy="100" r="4" className="fill-accent-amber" />
        <circle cx="1200" cy="200" r="4" className="fill-accent-amber" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-coral">Harsha</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono text-slate-700 dark:text-slate-300 mb-6">
            Hardware & PCB Design Engineer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 border-l-4 border-accent-amber pl-4">
            "I design boards that power on the first time."
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#portfolio" className="flex items-center gap-2 px-6 py-3 bg-accent-cyan text-pcb-dark font-bold rounded shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:-translate-y-1 transition-all duration-300">
              <CircuitBoard size={20} />
              View My Projects
            </a>
            <a href="/resume.pdf" download="Harsha_Ganesh_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-pcb-trace hover:border-accent-amber dark:hover:border-accent-amber rounded font-bold transition-all duration-300 group">
              <FileText size={20} className="group-hover:text-accent-amber transition-colors" />
              Download Resume
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-pcb-trace">
            {[
              { icon: CircuitBoard, label: "KiCad" },
              { icon: Settings, label: "EasyEDA" },
              { icon: Cpu, label: "STM32/ESP32" },
              { icon: Wrench, label: "FPGA" }
            ].map((tool, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-100 dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace hover:border-accent-cyan/50 hover:bg-slate-200 dark:hover:bg-pcb-light transition-colors group">
                <tool.icon className="mb-2 text-slate-500 dark:text-slate-400 group-hover:text-accent-cyan transition-colors" size={24} />
                <span className="text-xs font-mono text-slate-600 dark:text-slate-300">{tool.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Animated PCB Frame */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-[2rem] border-4 border-slate-200 dark:border-pcb-trace bg-slate-100 dark:bg-pcb-base shadow-2xl overflow-hidden group">
              {/* Decorative trace lines on frame */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-accent-cyan rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-accent-amber rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src="/pfp.jpeg" 
                alt="A. Harsha Vardhana Ganesh"
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 ring-inset ring-2 ring-accent-cyan/20 rounded-[2rem]"></div>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowRight className="rotate-90" />
      </motion.div>
    </section>
  );
};

export default Hero;
