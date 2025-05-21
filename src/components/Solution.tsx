
import React from 'react';
import { Shield } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-safeescape-blue to-blue-400 rounded-[32px] blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-b from-white to-blue-50 rounded-3xl p-8 border border-blue-100 shadow-xl">
                <div className="flex flex-col items-center">
                  <div className="bg-safeescape-blue/10 p-4 rounded-full mb-6">
                    <Shield className="h-16 w-16 text-safeescape-blue" />
                  </div>
                  
                  <div className="w-full max-w-md mx-auto">
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4 border border-blue-50">
                      <div className="flex items-center space-x-4">
                        <div className="h-3 w-3 rounded-full bg-safeescape-orange"></div>
                        <div className="text-sm font-medium">Real-time alerts</div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4 border border-blue-50">
                      <div className="flex items-center space-x-4">
                        <div className="h-3 w-3 rounded-full bg-safeescape-green"></div>
                        <div className="text-sm font-medium">AI-powered guidance</div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm mb-4 border border-blue-50">
                      <div className="flex items-center space-x-4">
                        <div className="h-3 w-3 rounded-full bg-safeescape-blue"></div>
                        <div className="text-sm font-medium">Smart evacuation routes</div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50">
                      <div className="flex items-center space-x-4">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <div className="text-sm font-medium">Community coordination</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="text-sm text-safeescape-gray">Powered by</div>
                    <div className="font-semibold text-safeescape-dark">Google Cloud Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-1 w-10 bg-safeescape-blue rounded-full"></div>
              <span className="text-safeescape-blue font-medium">THE SOLUTION</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Comprehensive Emergency Partner
            </h2>
            
            <p className="text-lg text-safeescape-gray mb-6">
              SafeEscape bridges the gap between chaos and control. We provide real-time 
              intelligence and proactive guidance to protect you and your loved ones during 
              emergencies, using cutting-edge AI technology.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 rounded-full bg-safeescape-blue/10 flex items-center justify-center text-safeescape-blue mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Before Disasters</h3>
                  <p className="text-safeescape-gray">Prepare with personalized safety plans, risk assessments, and emergency contacts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 rounded-full bg-safeescape-orange/10 flex items-center justify-center text-safeescape-orange mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">During Emergencies</h3>
                  <p className="text-safeescape-gray">Receive real-time alerts, AI guidance, and optimized evacuation routes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-6 w-6 rounded-full bg-safeescape-green/10 flex items-center justify-center text-safeescape-green mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-1">After Crisis</h3>
                  <p className="text-safeescape-gray">Access recovery resources, connect with support networks, and review safety reports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
