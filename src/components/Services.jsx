import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Lightbulb, Activity, Terminal } from 'lucide-react';

const services = [
  {
    title: "PCB Design for Clients",
    icon: CircuitBoard,
    description: "Schematic capture, multilayer layout, and Gerber generation in KiCad/EasyEDA, including power and mixed-signal boards."
  },
  {
    title: "Hardware Prototyping",
    icon: Lightbulb,
    description: "Taking an idea from concept to a working prototype board, ready for bench testing and software integration."
  },
  {
    title: "Board Bring-Up & Debugging",
    icon: Activity,
    description: "Power-rail checks, oscilloscope and logic analyzer fault tracing, and signal-integrity troubleshooting."
  },
  {
    title: "Embedded Firmware",
    icon: Terminal,
    description: "Bare-metal C development on STM32, ESP32, RP2040, ATmega328P, and Arduino platforms."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative border-t border-slate-200 dark:border-pcb-trace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35 }}
            className="text-4xl font-display font-bold inline-block relative pcb-trace pb-4"
          >
            Freelance Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-6 text-slate-600 dark:text-slate-400 font-mono"
          >
            <span className="text-accent-amber">{"// "}</span>
            Currently a final-year student, available for freelance projects.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace rounded-xl p-6 group hover:border-accent-cyan dark:hover:border-accent-cyan transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-pcb-light text-accent-cyan rounded-lg group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-bold text-slate-800 dark:text-white hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors"
                  >
                    Discuss this project 
                    <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
