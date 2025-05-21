
import React from 'react';

const Technology = () => {
  const technologies = [
    {
      name: "Google Gemini AI",
      logo: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini.max-1000x1000.png",
      description: "Intelligent assistance and natural language understanding"
    },
    {
      name: "Vertex AI",
      logo: "https://lh3.googleusercontent.com/5LSO8ydH9SrEaQl-S0BR3Zl8cpUt0Gdh_Y5GzLDgV6h7NZ1y_RZOhOAWmGAVdNRQgcjnSuJcVDlZ9WFuJcUONw0yUw=w128-h128-e365-rj-sc0x00ffffff",
      description: "Advanced predictions for early warning systems"
    },
    {
      name: "Google Maps",
      logo: "https://developers.google.com/static/maps/images/google-maps-platform-1200x675.png",
      description: "Real-time mapping and navigation"
    },
    {
      name: "Firebase",
      logo: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
      description: "Real-time data synchronization and alerts"
    },
    {
      name: "Cloud Run",
      logo: "https://miro.medium.com/v2/resize:fit:600/1*z1nH-IeGUdU6wDcRDAE5jQ.png",
      description: "Scalable deployment for reliable access"
    },
    {
      name: "Speech Services",
      logo: "https://www.gstatic.com/devrel-devsite/prod/v4f875a1b81b7f452d4ad95ddc2e0847267daa183c4980c794500a8a63318384d/cloud/images/favicons/onecloud/apple-icon.png",
      description: "Voice capabilities for hands-free operation"
    }
  ];

  return (
    <section id="technology" className="section bg-safeescape-dark text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium mb-4">
            POWERFUL TECHNOLOGY
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built on Google Cloud's Cutting Edge
          </h2>
          
          <p className="text-lg text-gray-300">
            SafeEscape is powered by the reliability and innovation of Google Cloud. 
            We utilize advanced technologies to ensure unparalleled performance and security, 
            even in the most challenging emergency situations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:bg-gray-700 transition-colors"
            >
              <div className="h-16 w-16 flex items-center justify-center mb-4">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <h3 className="font-semibold mb-2 text-sm">{tech.name}</h3>
              
              <p className="text-xs text-gray-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
