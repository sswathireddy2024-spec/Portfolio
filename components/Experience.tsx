
import React from 'react';
import { RESUME } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-10 mb-20 gap-6">
        <div>
          <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-3">Career Journey</h2>
          <p className="text-4xl font-extrabold text-slate-50 tracking-tight">Professional Background</p>
        </div>
        <div className="mono text-xs font-bold text-slate-500">5+ Years of Specialized Experience</div>
      </div>

      <div className="space-y-24">
        {RESUME.experience.map((exp, idx) => (
          <div key={idx} className="relative">
            <div className="grid lg:grid-cols-[350px_1fr] gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{exp.company}</h3>
                    <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{exp.role}</p>
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded text-xs font-bold mono">
                  {exp.period}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tech.map(t => (
                    <span key={t} className="mono text-[10px] font-bold px-2 py-1 bg-slate-950 border border-slate-800 text-slate-500 rounded uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 card-shadow">
                <ul className="space-y-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4 items-start group">
                      <div className="mt-2.5 w-1.5 h-1.5 shrink-0 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      <p className="text-lg text-slate-400 leading-relaxed font-medium group-hover:text-slate-200 transition-colors">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {idx !== RESUME.experience.length - 1 && (
              <div className="hidden lg:block absolute left-5 top-full h-12 w-px bg-slate-800"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
