import { PenTool, Activity, HardDrive, Terminal, Plane } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: "PCB Design & EDA",
      icon: <PenTool size={20} />,
      items: ["KiCad", "EasyEDA", "Schematic Capture", "Multilayer Layout", "Gerber Generation", "Signal Integrity", "Power-Electronics", "Mixed-Signal Layout"]
    },
    {
      category: "Hardware Bring-Up & Debugging",
      icon: <Activity size={20} />,
      items: ["Multimeter/Oscilloscope", "Fault Tracing", "Board-Level Testing", "Power-Rail Checks", "Firmware Debugging"]
    },
    {
      category: "Microcontrollers & Digital Systems",
      icon: <HardDrive size={20} />,
      items: ["STM32", "ESP32", "ATmega328P", "RP2040 (Pico)", "Arduino", "Zynq/FPGA (Zybo Z7-20)", "Bare-Metal C", "RTOS"]
    },
    {
      category: "Programming & Frameworks",
      icon: <Terminal size={20} />,
      items: ["C", "Python", "PyQt5", "Selenium", "Streamlit", "Java", "MATLAB/Simulink", "Verilog"]
    },
    {
      category: "Systems & Flight Hardware",
      icon: <Plane size={20} />,
      items: ["Pixhawk 6C", "M8N GPS", "ELRS Telemetry"]
    }
  ];

  return (
    <section className="py-10 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/90 backdrop-blur p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-900">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md border border-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
