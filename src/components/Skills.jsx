import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Cpu, Code, Plane } from 'lucide-react';

const skillGroups = [
  {
    title: "PCB Design & EDA",
    icon: Layers,
    color: "text-accent-cyan",
    borderColor: "hover:border-accent-cyan",
    skills: [
      "KiCad", "EasyEDA", "Schematic Capture", "Multilayer Layout", 
      "Gerber Generation", "Signal-Integrity Optimization", 
      "Power-Electronics Layout", "Mixed-Signal (AC/DC Isolation)"
    ]
  },
  {
    title: "Hardware Bring-Up & Debugging",
    icon: Zap,
    color: "text-accent-amber",
    borderColor: "hover:border-accent-amber",
    skills: [
      "Board-Level Functional Testing", "Oscilloscope Fault Tracing", 
      "Multimeter Diagnostics", "Continuity & Power-Rail Checks", 
      "Logic Analyzers", "Register-Level Firmware Debugging"
    ]
  },
  {
    title: "Microcontrollers & Digital",
    icon: Cpu,
    color: "text-accent-coral",
    borderColor: "hover:border-accent-coral",
    skills: [
      "STM32", "ESP32", "ATmega328P", "RP2040 (Pico)", 
      "Arduino", "Zynq/FPGA (Zybo Z7-20)", "Bare-Metal C", "RTOS Principles"
    ]
  },
  {
    title: "Programming & Frameworks",
    icon: Code,
    color: "text-emerald-400",
    borderColor: "hover:border-emerald-400",
    skills: [
      "C", "Python (PyQt5, Selenium, Streamlit)", "Java", 
      "MATLAB/Simulink", "Verilog"
    ]
  },
  {
    title: "Systems & Flight Hardware",
    icon: Plane,
    color: "text-purple-400",
    borderColor: "hover:border-purple-400",
    skills: [
      "Pixhawk 6C", "M8N GPS", "ELRS Telemetry"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-slate-200 dark:border-pcb-trace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="text-4xl font-display font-bold inline-block relative pcb-trace pb-4"
          >
            Component Inventory
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace rounded-xl p-6 transition-all duration-300 ${group.borderColor} group hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-6">
                <group.icon className={`${group.color} transition-transform group-hover:scale-110`} size={28} />
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm font-mono bg-slate-100 dark:bg-pcb-light text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-pcb-trace hover:-translate-y-1 hover:bg-slate-200 dark:hover:bg-pcb-trace transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
