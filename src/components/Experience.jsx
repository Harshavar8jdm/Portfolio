import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "IIT Palakkad",
      role: "Digital Systems & Real-Time Simulation Intern",
      duration: "May 2026 – June 2026",
      location: "Palakkad, India",
      bullets: [
        "Implemented a real-time mathematical model of a PMDC motor on the programmable-logic (PL) side of a Zybo Z7-20 (Zynq) FPGA board at a 1 µs sampling rate, streaming processed samples to a PC over Gigabit Ethernet and visualizing the motor's transient and steady-state response in a Python (Matplotlib/Tkinter) front-end."
      ]
    },
    {
      company: "Hypstuma PVT LTD",
      role: "Drone Design Intern",
      duration: "July 2025 – August 2025",
      location: "Chennai, India",
      bullets: [
        "Optimized power distribution and signal integrity for multi-rotor UAV platforms using Pixhawk 6C flight controllers and 40A BLHeli 32 ESCs, ensuring stable communication with M8N GPS modules.",
        "Performed PID tuning to reduce oscillation by 15% and validated 2.4GHz ELRS telemetry links for sub-50ms latency – iterative hardware bring-up, calibration, and fault diagnosis on live flight hardware."
      ]
    },
    {
      company: "IIT Tirupati Navishkar I-Hub Foundation",
      role: "GPR Simulation Intern",
      duration: "June 2025 – July 2025",
      location: "Tirupati, India",
      bullets: [
        "Automated parameter variations (depth, size, material) to generate a dataset of 23,000 parametric ground-penetrating radar simulations for machine learning applications, built around a custom PyQt5 tool."
      ]
    }
  ];

  return (
    <section className="py-10 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
          Experience
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-2 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900">{exp.role}</h3>
                    <div className="text-blue-600 font-semibold">{exp.company}</div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-slate-500 mb-4 gap-2">
                  <span className="font-medium bg-slate-100 px-2 py-1 rounded text-slate-700">{exp.duration}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc pl-5 text-slate-700 space-y-2 text-justify">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
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
