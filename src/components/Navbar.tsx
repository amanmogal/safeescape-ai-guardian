
import React from 'react';
import { Button } from '../components/ui/button';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-8 w-8 text-safeescape-blue" />
          <span className="text-xl font-bold text-safeescape-dark">SafeEscape</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-safeescape-gray hover:text-safeescape-blue transition-colors">
            Features
          </a>
          <a href="#technology" className="text-safeescape-gray hover:text-safeescape-blue transition-colors">
            Technology
          </a>
          <a href="#about" className="text-safeescape-gray hover:text-safeescape-blue transition-colors">
            About
          </a>
        </div>
        
        <div>
          <a 
            href="https://github.com/sahil28032005/SafeEscape-MVP---AI-Powered-Emergency-Alert-App/releases" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-safeescape-blue hover:bg-blue-600 text-white">
              Download Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
