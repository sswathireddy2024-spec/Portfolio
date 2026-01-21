
import React from 'react';
import { RESUME } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        {/* Navigation - Centered and Spaced Out */}
        <nav className="flex items-center space-x-8 sm:space-x-12 md:space-x-16">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] sm:text-xs font-bold text-slate-400 hover:text-indigo-400 transition-all uppercase tracking-[0.2em] whitespace-nowrap hover:scale-110"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
