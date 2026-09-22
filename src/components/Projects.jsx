import { Cpu, BatteryCharging, Plug, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const categories = [
    {
      title: "Power Electronics – Converters & Chargers",
      icon: <Plug size={24} />,
      projects: [
        "LM2596S buck converter",
        "LMR51450 buck converter",
        "LMR16006 12V-to-3.3V buck converter",
        "TPS61040DBVR 5V-to-12V boost converter",
        "BQ24092DGQT 1S Li-ion charger PCB",
        "USB-PD triggered power supply module"
      ]
    },
    {
      title: "Battery Management Systems",
      icon: <BatteryCharging size={24} />,
      projects: [
        "HY2112-based 1S LiFePO4 BMS PCB",
        "BQ79150WPWT 5S BMS for NiMH battery packs",
        "BME280 environmental sensor breakout module"
      ]
    },
    {
      title: "Microcontroller & Interface Boards",
      icon: <Cpu size={24} />,
      projects: [
        "ESP32-S3 development board",
        "STM32F401RCT6 development board",
        "CP2102 USB-to-UART bridge board",
        "micro-SD card breakout board"
      ]
    },
    {
      title: "Test, Measurement & Automotive Electronics",
      icon: <Cpu size={24} />,
      projects: [
        "Custom 2-channel oscilloscope built around an STM32 MCU",
        "IoT-based real-time power quality analyzer (ESP32 + ACS712) with isolated AC/DC layout for THD monitoring",
        "Custom engine monitoring unit",
        "Capacitor-discharge ignition (CDI) module for single-cylinder motorcycles"
      ]
    }
  ];

  return (
    <section className="py-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
            PCB Design Project Portfolio (KiCad)
          </h2>
          <a href="https://github.com/Harshavar8jdm" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            View full designs on GitHub &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group">
              <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100 group-hover:bg-slate-200 transition-colors">
                <div className="text-center text-slate-400">
                  <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
                  <span className="text-sm">Project Image Placeholder</span>
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{cat.title}</h3>
                </div>
                <ul className="list-disc pl-5 text-slate-700 space-y-1.5">
                  {cat.projects.map((proj, idx) => (
                    <li key={idx} className="text-sm">{proj}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
