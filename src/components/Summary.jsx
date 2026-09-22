export default function Summary() {
  return (
    <section className="py-10 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full inline-block"></span>
          Professional Summary
        </h2>
        <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400"></div>
          <p className="text-slate-700 leading-relaxed text-lg relative z-10 pl-2">
            Final-year Electronics and Communications Engineering undergraduate (CGPA 8.8) with hands-on experience designing, building, and bench-testing <strong>17+ custom PCBs in KiCad</strong> – power-electronics converters, battery management systems, and microcontroller boards. Comfortable <strong>reading schematics, bringing up boards, and troubleshooting</strong> circuit-level failures with a multimeter/oscilloscope. Internships at <strong>IIT Palakkad, Hypstuma, and IIT Tirupati</strong> added exposure to real-time embedded systems and structured hardware testing and debugging. Proficient in <strong>C, Python, Java, and Verilog</strong>. Seeking a Graduate Engineer Trainee role applying hardware debugging and PCB design fundamentals to PCBA testing, failure analysis, and quality processes.
          </p>
        </div>
      </div>
    </section>
  );
}
