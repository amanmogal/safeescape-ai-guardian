
import React from 'react';
import { Bell, MessageSquare, Map, Phone, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bell className="h-10 w-10 text-safeescape-orange" />,
      title: "Instant Alerts, Proactive Warnings",
      description: "Receive immediate, location-based alerts from NOAA Weather Service, USGS Earthquake Service, and OpenFEMA Service. Our Vertex AI predicts risks for early warnings, keeping you ahead of danger."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Hands-Free Guidance, AI Clarity",
      description: "Converse naturally with our Gemini AI chatbot for instant advice on first-aid, safety protocols, and more. Multilingual and voice-enabled for critical moments."
    },
    {
      icon: <Map className="h-10 w-10 text-safeescape-blue" />,
      title: "Optimal Routes, Safer Journeys",
      description: "Get AI-optimized evacuation routes tailored to the disaster. Navigate to the nearest shelters, hospitals, and safe zones, even offline."
    },
    {
      icon: <Phone className="h-10 w-10 text-red-600" />,
      title: "One-Tap Lifeline",
      description: "Activate our one-tap SOS to instantly notify emergency contacts and 112 India, sharing your precise location when it matters most."
    },
    {
      icon: <Users className="h-10 w-10 text-safeescape-green" />,
      title: "Empowering Your Community",
      description: "Report incidents with ease, request help, and coordinate volunteer efforts. Real-time location sharing enhances collective safety."
    }
  ];

  return (
    <section id="features" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-safeescape-blue rounded-full text-sm font-medium mb-4">
            COMPREHENSIVE FEATURES
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Features Designed for Your Safety
          </h2>
          
          <p className="text-lg text-safeescape-gray">
            SafeEscape provides a complete emergency management platform with features 
            carefully crafted to protect you and your loved ones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col h-full"
            >
              <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-5 self-start">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              
              <p className="text-safeescape-gray flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/sahil28032005/SafeEscape-MVP---AI-Powered-Emergency-Alert-App/releases" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Download SafeEscape
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
