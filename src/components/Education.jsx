import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Sri Venkateswara College of Engineering",
      degree: "B.Tech, Electronics and Communications Engineering",
      duration: "2023 – 2027",
      score: "CGPA: 8.8"
    },
    {
      institution: "Gnanadhare PU College",
      degree: "Intermediate",
      duration: "2021 – 2023",
      score: "88.8% (532/600)"
    }
  ];

  return (
    <section className="py-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 text-blue-600 bg-blue-50 p-2 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                  <p className="text-lg text-slate-700 mt-1">{edu.degree}</p>
                </div>
              </div>
              <div className="md:text-right text-slate-500 font-medium">
                <p className="text-slate-900 font-semibold mb-1">{edu.duration}</p>
                <p className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold">
                  {edu.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
