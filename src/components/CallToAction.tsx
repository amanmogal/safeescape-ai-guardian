
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-tr from-safeescape-blue to-blue-600 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prepare for Tomorrow, Today
            </h2>
            
            <p className="text-xl mb-6 text-blue-100">
              Don't wait for disaster to strike. Empower yourself and your community with SafeEscape.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-safeescape-green flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span>Real-time alerts and AI-powered guidance</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-safeescape-green flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span>Smart evacuation routes that adapt to changing conditions</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-safeescape-green flex items-center justify-center text-xs">
                    ✓
                  </div>
                  <span>One-tap SOS and emergency contact notification</span>
                </div>
              </div>
            </div>
            
            <a 
              href="https://github.com/sahil28032005/SafeEscape-MVP---AI-Powered-Emergency-Alert-App/releases" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-safeescape-blue font-medium px-8 py-4 rounded-lg transition-all inline-flex items-center"
            >
              Download SafeEscape Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm">
              <div className="absolute inset-0 bg-white rounded-[40px] blur-xl opacity-20"></div>
              <div className="relative bg-white/20 backdrop-blur-sm p-6 rounded-3xl border border-white/40 shadow-xl">
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                    alt="Safe and prepared community"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Safety in Your Hands
                    </h3>
                    <p className="text-white/80 text-sm">
                      Join thousands of people across India who trust SafeEscape for their emergency preparedness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
