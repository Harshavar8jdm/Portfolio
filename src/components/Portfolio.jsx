import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircuitBoard } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = ["All", "Power Electronics", "Battery Management", "Microcontroller Boards", "Test, Measurement & Auto"];

const projects = [
  // ── Flagship Projects ─────────────────────────────────────────────
  {
    title: "5S 30A BMS for NiMH Packs",
    category: "Battery Management",
    description: "High-current 30A battery management system built with BQ79150WPWT for 5-cell NiMH battery packs, featuring cell balancing and protection.",
    tags: ["BQ79150WPWT", "KiCad", "30A", "NiMH"],
    image: "/5s1p.png",
    github: "https://github.com/Harshavar8jdm/5-series-bms",
    featured: true,
  },
  {
    title: "EMU (Engine Monitoring Unit)",
    category: "Test, Measurement & Auto",
    description: "Custom hardware unit for real-time engine parameter monitoring — tracks temperature, RPM, and sensor data on embedded display.",
    tags: ["Automotive", "Sensors", "MCU", "Real-Time"],
    image: "/emu.png",
    github: "https://github.com/Harshavar8jdm/engine-monitoring-unit",
    featured: true,
  },
  {
    title: "STM32F401RCT6 Dev Board",
    category: "Microcontroller Boards",
    description: "Full-featured development board for the STM32F401RCT6 with exposed GPIOs, SWD debug header, and onboard regulation.",
    tags: ["STM32F401", "ARM Cortex-M4", "KiCad"],
    image: "/stm32.png",
    github: "https://github.com/Harshavar8jdm/stm32f401rct6-dev-board",
    featured: true,
  },
  {
    title: "WCH CH224A USB PD Trigger Power Supply",
    category: "Power Electronics",
    description: "USB Power Delivery trigger board using WCH CH224A to negotiate PD profiles up to 20V — ideal for bench power supply applications.",
    tags: ["CH224A", "USB-PD", "Type-C", "Power"],
    image: "/usbpd.png",
    github: "https://github.com/Harshavar8jdm/USB-PD-Power-Supply",
    featured: true,
  },
  {
    title: "ESP32 WROOM-32 Dev Board (30 Pin)",
    category: "Microcontroller Boards",
    description: "Custom 30-pin development board for the ESP32 WROOM-32 module with auto-program circuit, USB-UART bridge, and clean power regulation.",
    tags: ["ESP32", "Wi-Fi/BLE", "CP2102", "MCU"],
    image: "/esp32.png",
    github: "https://github.com/Harshavar8jdm/esp32-wroom-32-dev-board",
    featured: true,
  },

  // ── Other Projects (with images) ──────────────────────────────────
  {
    title: "BarelyScope",
    category: "Test, Measurement & Auto",
    description: "A custom 2-channel oscilloscope built around an STM32 MCU for signal analysis.",
    tags: ["STM32", "KiCad", "Mixed-Signal", "ADC"],
    image: "/barely scope.png",
    github: "https://github.com/Harshavar8jdm/BarelyScope",
  },
  {
    title: "CP2102 USB-to-UART Bridge",
    category: "Microcontroller Boards",
    description: "Compact USB to UART serial bridge board for programming MCUs.",
    tags: ["CP2102", "USB", "UART"],
    image: "/cp2102.png",
    github: "https://github.com/Harshavar8jdm/cp2102-usb-to-uart-bridge",
  },
  {
    title: "1S Li-ion Charger",
    category: "Power Electronics",
    description: "Li-ion battery charger board using BQ24092DGQT.",
    tags: ["BQ24092", "Charging"],
    image: "/1slion.png",
    github: "https://github.com/Harshavar8jdm/1S-Li-ion-Battery-Charger-Module",
  },
  {
    title: "1S LiFePO4 BMS",
    category: "Battery Management",
    description: "Battery management system for 1S LiFePO4 cells based on HY2112.",
    tags: ["HY2112", "LiFePO4", "BMS"],
    image: "/1slifepo4.png",
    github: "https://github.com/Harshavar8jdm/1S-LiFePO4-bms",
  },
  {
    title: "LM2596S Buck Converter",
    category: "Power Electronics",
    description: "High-efficiency step-down converter module based on LM2596S.",
    tags: ["LM2596S", "DC-DC", "Power"],
    image: "/lm2596s.png",
    github: "https://github.com/Harshavar8jdm/LM2596S-Buck-Converter",
  },
  {
    title: "CDI Module for Motorcycles",
    category: "Test, Measurement & Auto",
    description: "Capacitor-discharge ignition (CDI) module designed for single-cylinder motorcycles.",
    tags: ["Power Electronics", "Automotive", "High Voltage"],
    image: "/cdi.png",
    github: "https://github.com/Harshavar8jdm/capacitor-discharge-ignition",
  },
  {
    title: "LMR16006 12V-to-3.3V Converter",
    category: "Power Electronics",
    description: "12V to 3.3V step-down buck converter for logic power supply.",
    tags: ["LMR16006", "Power"],
    image: "/lmr16006.png",
    github: "https://github.com/Harshavar8jdm/lmr16006-12v-3v3-sw-buck-converter",
  },
  {
    title: "TPS61040DBVR Boost Converter",
    category: "Power Electronics",
    description: "5V to 12V step-up boost converter module.",
    tags: ["TPS61040", "Boost", "Power"],
    image: "/tps61040.png",
    github: "https://github.com/Harshavar8jdm/tps61040dbvr-boost-converter-module",
  },
  {
    title: "BME280 Breakout Module",
    category: "Microcontroller Boards",
    description: "Environmental sensor breakout module for BME280 via I2C/SPI.",
    tags: ["BME280", "I2C/SPI", "Sensor"],
    image: "/bme280.png",
    github: "https://github.com/Harshavar8jdm/BME280-Breakout-Module",
  },
  {
    title: "Micro-SD Card Breakout",
    category: "Microcontroller Boards",
    description: "Breakout board for interfacing micro-SD cards via SPI.",
    tags: ["SPI", "Storage", "SD Card"],
    image: "/sdcard.png",
    github: "https://github.com/Harshavar8jdm/micro-sd-spi-breakout-mod",
  },

  // ── Other Projects (no image) ──────────────────────────────────────
  {
    title: "IoT Power Quality Analyzer",
    category: "Test, Measurement & Auto",
    description: "Real-time power quality analyzer with isolated AC/DC layout for THD monitoring.",
    tags: ["ESP32", "ACS712", "Isolation", "IoT"],
  },
  {
    title: "LMR51450 Buck Converter",
    category: "Power Electronics",
    description: "Compact step-down converter using LMR51450.",
    tags: ["LMR51450", "DC-DC"],
  },
  {
    title: "ESP32-S3 Development Board",
    category: "Microcontroller Boards",
    description: "Custom development board featuring the ESP32-S3 with auto-program circuits.",
    tags: ["ESP32-S3", "Wi-Fi/BLE", "MCU"],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(
    proj => activeTab === "All" || proj.category === activeTab
  );

  return (
    <section id="portfolio" className="py-20 relative bg-slate-100 dark:bg-pcb-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold inline-block relative pcb-trace pb-4"
          >
            PCB Designs
          </motion.h2>
          
          <a 
            href="https://github.com/Harshavar8jdm" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-pcb-trace text-slate-800 dark:text-white rounded hover:bg-slate-300 dark:hover:bg-pcb-light transition-colors"
          >
            <FaGithub size={18} />
            <span className="font-mono text-sm">github.com/Harshavar8jdm</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                activeTab === category 
                  ? 'bg-accent-cyan text-pcb-dark font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]' 
                  : 'bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace hover:border-accent-cyan text-slate-600 dark:text-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-white dark:bg-pcb-base rounded-xl border ${project.featured ? 'border-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]' : 'border-slate-200 dark:border-pcb-trace'} overflow-hidden flex flex-col h-full hover:border-accent-cyan dark:hover:border-accent-cyan transition-colors`}
              >
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-accent-cyan text-pcb-dark text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    Flagship
                  </div>
                )}
                
                {/* PCB Image */}
                <div className="h-48 bg-slate-200 dark:bg-pcb-light relative overflow-hidden flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <CircuitBoard className="text-slate-400 dark:text-pcb-trace opacity-50 w-24 h-24" />
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-pcb-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github || "https://github.com/Harshavar8jdm"}
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-accent-cyan text-pcb-dark px-4 py-2 rounded font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <FaGithub size={16} /> View on GitHub
                    </a>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-2 leading-tight">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-pcb-trace/50 text-slate-600 dark:text-accent-amber rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
