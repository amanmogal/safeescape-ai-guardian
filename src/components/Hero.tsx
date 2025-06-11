
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-blue-100 pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-safeescape-dark mb-4">
              SafeEscape: Your Lifeline in Every Emergency
            </h1>
            
            <p className="text-xl md:text-2xl text-safeescape-gray mb-8">
              Real-time Alerts. Intelligent Evacuation. AI-Powered Safety.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://github.com/sahil28032005/SafeEscape-MVP---AI-Powered-Emergency-Alert-App/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Download SafeEscape Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a href="#challenge" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative max-w-[320px] md:max-w-[380px]">
              <div className="absolute inset-0 bg-safeescape-blue rounded-[40px] blur-xl opacity-20 animate-pulse-subtle"></div>
              <div className="relative bg-white p-3 rounded-[36px] shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498" 
                  alt="SafeEscape Emergency App Interface" 
                  className="w-full h-auto rounded-[24px] object-cover"
                />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-safeescape-blue/90 text-white px-6 py-3 rounded-full font-medium text-sm backdrop-blur-sm">
                  AI-Powered Safety
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#challenge" className="flex flex-col items-center text-safeescape-gray hover:text-safeescape-blue transition-colors">
          <span className="text-sm mb-2">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-center justify-center">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
