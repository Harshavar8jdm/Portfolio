import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, GraduationCap, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-200 dark:border-pcb-trace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="text-4xl font-display font-bold inline-block relative pcb-trace pb-4"
          >
            System Specs
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Bio Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace rounded-xl p-8 shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cpu size={100} />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-accent-cyan" />
              <h3 className="text-2xl font-display font-bold">About Me</h3>
            </div>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                I'm a final-year Electronics and Communication Engineering student at Sri Venkateswara College of Engineering, specializing in embedded systems and hardware design. 
              </p>
              <p>
                My true passion lies in building things that actually work on the bench. I've designed, routed, and successfully bench-tested over <strong>17 custom multi-layer and power PCBs</strong> using KiCad. From power converters and battery management systems to high-speed microcontroller boards, I handle the entire lifecycle—schematic capture, layout, board bring-up, and signal-integrity debugging.
              </p>
              <p>
                I've validated my skills through hardware engineering internships at <strong>IIT Palakkad, IIT Tirupati, and Hypstuma</strong>. I'm currently seeking an entry-level PCB / Hardware Design Engineer role where I can continue turning schematics into tangible, glowing electronics.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-accent-amber" />
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-slate-200 dark:border-pcb-trace ml-3 space-y-8">
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-accent-cyan rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                <div className="text-sm font-mono text-accent-cyan mb-1">2023 — 2027</div>
                <h4 className="text-lg font-bold">B.Tech, Electronics and Communications Engineering</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Sri Venkateswara College of Engineering</p>
                <div className="mt-2 inline-block px-3 py-1 bg-slate-100 dark:bg-pcb-light text-slate-700 dark:text-slate-300 text-sm font-mono rounded">
                  CGPA: <span className="text-accent-amber font-bold">8.8</span>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-slate-300 dark:bg-pcb-trace rounded-full -left-[9px] top-1"></div>
                <div className="text-sm font-mono text-slate-500 mb-1">2021 — 2023</div>
                <h4 className="text-lg font-bold">Intermediate</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Gnanadhare PU College</p>
                <div className="mt-2 inline-block px-3 py-1 bg-slate-100 dark:bg-pcb-light text-slate-700 dark:text-slate-300 text-sm font-mono rounded">
                  Score: <span className="text-slate-800 dark:text-white font-bold">88.8%</span> (532/600)
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
