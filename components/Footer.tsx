import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <img src="/logo.png" alt="OmegaIon" className="h-8 w-auto mx-auto mb-4 object-contain" />
        
        <div className="mb-6">
          <a href="mailto:contact@omegaion.com" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors font-mono">
            contact@omegaion.com
          </a>
        </div>

        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Omegaion Intelligence. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;