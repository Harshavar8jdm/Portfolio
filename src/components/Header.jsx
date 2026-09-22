import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-sm pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
            {/* Placeholder for Profile Picture */}
            <span className="text-slate-400 text-sm px-4 text-center">Profile Picture Placeholder</span>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            A. Harsha Ganesh
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-blue-600 font-medium">
            Hardware & PCB Design Engineer | Embedded Systems
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-slate-600 text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className="text-slate-400" />
              <span>Tirupati, Andhra Pradesh, India 517502</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={16} className="text-slate-400" />
              <span>+91-9844553752</span>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium shadow-sm">
              <Download size={18} />
              <span>Download Resume</span>
            </button>
            <a href="mailto:harshaganesh300@gmail.com" className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-slate-700 font-medium">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/harsha-ganesh-ee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-slate-700 font-medium">
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Harshavar8jdm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors text-slate-700 font-medium">
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
