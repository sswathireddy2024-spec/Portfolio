
import React from 'react';
import { RESUME } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 lg:pt-32 pb-16">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 -z-10 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute top-20 right-1/4 -z-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>

      <div className="flex flex-col space-y-12">
        {/* Main Header Section - Full Expansive Width */}
        <div className="w-full">
          <h1 className="text-2xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
            {RESUME.name}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500 text-4xl lg:text-5xl mt-4">
              {RESUME.title}
            </span>
          </h1>

          <div className="w-full border-t border-slate-900 pt-10">
            <p className="text-lg lg:text-2xl text-slate-300 leading-tight font-medium w-full">
              {RESUME.summary}
            </p>
          </div>
        </div>

        {/* Lower Content Section - Statistics Only */}
        <div className="pt-8">
          <div className="flex flex-wrap items-center gap-10 md:gap-20 text-slate-500 mono text-sm font-bold uppercase tracking-widest">
            <div className="flex flex-col">
              <span className="text-slate-100 text-4xl md:text-5xl font-black mb-1">5+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-12 bg-slate-800 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-indigo-500 text-4xl md:text-5xl font-black mb-1">AWS</span>
              <span>Solutions Architect</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
