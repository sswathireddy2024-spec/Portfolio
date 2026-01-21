
import React from 'react';
import { RESUME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-32 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xl">
            <p className="text-slate-400 font-medium leading-relaxed text-lg">
              Specializing in large-scale Java ecosystems and cloud-native solutions that drive enterprise value through performance and reliability.
            </p>
          </div>
          
          <div className="w-full lg:w-auto space-y-8">
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Engineering Excellence</span>
              <div className="text-slate-500 text-sm italic">
                Focusing on distributed architecture and scalable backend systems.
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Swathi Reddy. All systems operational.
          </div>
          <div className="flex items-center space-x-2 text-slate-700 mono text-[10px] font-bold uppercase tracking-widest">
            <span>Security First</span>
            <span>•</span>
            <span>Scalable Design</span>
            <span>•</span>
            <span>Cloud Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
