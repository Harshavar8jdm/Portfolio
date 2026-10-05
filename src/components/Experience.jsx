import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, Activity, Navigation, Radio } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Digital Systems & Real-Time Simulation Intern",
    company: "IIT Palakkad",
    date: "May 2026 — June 2026",
    location: "Palakkad, India",
    icon: Activity,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan/10",
    borderColor: "border-accent-cyan",
    summary: "Implemented real-time motor models on FPGA at 1 µs sampling rate.",
    details: [
      "Implemented a real-time mathematical model of a PMDC motor on the programmable-logic side of a Zybo Z7-20 (Zynq) FPGA.",
      "Achieved a 1 µs sampling rate, streaming processed samples to a PC over Gigabit Ethernet.",
      "Developed a Python (Matplotlib/Tkinter) front-end to visualize transient and steady-state response."
    ]
  },
  {
    id: 2,
    role: "Drone Design Intern",
    company: "Hypstuma Pvt Ltd",
    date: "July 2025 — August 2025",
    location: "Chennai, India",
    icon: Navigation,
    color: "text-accent-amber",
    bgColor: "bg-accent-amber/10",
    borderColor: "border-accent-amber",
    summary: "Optimized multi-rotor UAV power distribution and PID tuning.",
    details: [
      "Optimized power distribution and signal integrity for multi-rotor UAV platforms using Pixhawk 6C flight controllers and 40A BLHeli_32 ESCs, ensuring stable communication with M8N GPS modules.",
      "Performed PID tuning to reduce oscillation by 15% and validated 2.4 GHz ELRS telemetry links for sub-50 ms latency.",
      "Conducted iterative hardware bring-up, calibration, and fault diagnosis on live flight hardware."
    ]
  },
  {
    id: 3,
    role: "GPR Simulation Intern",
    company: "IIT Tirupati Navishkar I-Hub Foundation",
    date: "June 2025 — July 2025",
    location: "Tirupati, India",
    icon: Radio,
    color: "text-accent-coral",
    bgColor: "bg-accent-coral/10",
    borderColor: "border-accent-coral",
    summary: "Automated dataset generation for GPR machine learning.",
    details: [
      "Automated parameter variations (depth, size, material) to generate a dataset of 23,000 parametric ground-penetrating-radar simulations.",
      "Built the automation pipeline around a custom PyQt5 tool for machine learning applications."
    ]
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <section id="experience" className="py-20 relative bg-slate-100 dark:bg-pcb-dark/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold inline-block relative pcb-trace pb-4"
          >
            Runtime History
          </motion.h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-pcb-base border ${isExpanded ? exp.borderColor : 'border-slate-200 dark:border-pcb-trace'} rounded-xl overflow-hidden transition-colors duration-300 shadow-sm`}
              >
                <div 
                  className="p-6 cursor-pointer flex flex-col md:flex-row gap-4 items-start md:items-center justify-between hover:bg-slate-50 dark:hover:bg-pcb-light transition-colors"
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${exp.bgColor} ${exp.color}`}>
                      <exp.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{exp.company}</span>
                        <span className="text-slate-400 hidden md:inline">•</span>
                        <span className="text-slate-500 font-mono">{exp.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between w-full md:w-auto mt-2 md:mt-0 pl-16 md:pl-0">
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-pcb-dark px-2 py-1 rounded md:hidden">
                      {exp.location}
                    </span>
                    <button className={`p-2 rounded-full transition-transform duration-300 ${isExpanded ? 'rotate-180 text-accent-cyan bg-accent-cyan/10' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-pcb-light'}`}>
                      <ChevronDown size={20} />
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-pcb-trace/50 ml-[76px] mr-6">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">{exp.summary}</p>
                        <ul className="space-y-3">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${exp.color}`}></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
