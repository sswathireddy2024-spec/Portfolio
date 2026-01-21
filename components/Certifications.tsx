
import React from 'react';
import { RESUME } from '../constants';

export const CertificationsSection: React.FC = () => {
  return (
    <div className="py-6">
      <div className="border-l-4 border-indigo-500 pl-4 mb-8">
        <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Technical Authority</h2>
        <p className="text-3xl font-extrabold text-slate-100 tracking-tight">Professional Certifications</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 w-full">
        {RESUME.certifications.map((cert, idx) => (
          <div key={idx} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-6 group hover:bg-slate-900 transition-all duration-300 card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none"></div>
            
            <div className="w-14 h-14 bg-indigo-600/10 group-hover:bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 border border-indigo-500/20 transition-all duration-300">
              <svg className="w-7 h-7 text-indigo-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="mono text-[9px] text-indigo-500 font-bold uppercase tracking-widest block mb-1">Certified Professional</span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 leading-tight group-hover:text-indigo-400 transition-colors">{cert}</h3>
              <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-2 py-0.5 bg-slate-950/50 rounded-md border border-slate-800 text-[8px] font-bold text-slate-500 uppercase tracking-widest">Amazon Web Services</span>
                <span className="px-2 py-0.5 bg-indigo-500/10 rounded-md border border-indigo-500/20 text-[8px] font-bold text-indigo-400 uppercase tracking-widest">AWS Solutions Architect</span>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-700 group-hover:border-indigo-500 group-hover:text-indigo-500 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
