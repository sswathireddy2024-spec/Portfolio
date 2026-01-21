
import React from 'react';
import { RESUME } from '../constants';

export const EducationSection: React.FC = () => {
  return (
    <div className="py-6">
      <div className="border-l-4 border-indigo-500 pl-4 mb-8">
        <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Academic Foundation</h2>
        <p className="text-3xl font-extrabold text-slate-100 tracking-tight">Education</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 w-full">
        {RESUME.education.map((edu, idx) => (
          <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all card-shadow w-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex-1">
                <div className="inline-block px-2 py-0.5 bg-indigo-900/30 text-indigo-300 text-[9px] font-bold rounded-full uppercase tracking-widest border border-indigo-500/20 mb-3">
                  Academic Record
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-50 mb-1 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-lg font-semibold text-indigo-400 mb-1">
                  {edu.school}
                </p>
                <div className="flex items-center text-slate-400 text-sm font-medium">
                  <svg className="w-4 h-4 mr-1.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </div>
              </div>
              
              <div className="flex flex-col items-start md:items-end shrink-0 md:pl-8 md:border-l border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Completion</span>
                <span className="mono text-xl font-bold text-slate-200">{edu.date}</span>
                <div className="mt-2 flex items-center space-x-1.5 text-green-500/80">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
