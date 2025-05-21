
import React from 'react';
import { AlertCircle } from 'lucide-react';

const Challenge = () => {
  const challenges = [
    {
      icon: <AlertCircle className="h-8 w-8 text-red-500" />,
      title: "Unpredictable Events",
      description: "Natural disasters and emergencies strike without warning, leaving people vulnerable and unprepared."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-orange-500" />,
      title: "Information Overload",
      description: "During crises, overwhelming and often conflicting information makes it difficult to make critical decisions."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-yellow-500" />,
      title: "Coordination Gaps",
      description: "Traditional emergency systems lack real-time coordination between individuals, communities, and responders."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-red-600" />,
      title: "Limited Resources",
      description: "Access to vital emergency resources and information is often restricted when needed most."
    }
  ];

  return (
    <section id="challenge" className="section bg-safeescape-lightgray">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            When Disaster Strikes, Every Second Counts
          </h2>
          
          <p className="text-lg text-safeescape-gray">
            From sudden floods to seismic tremors, staying safe and informed during a crisis is paramount. 
            Traditional methods often fall short, leaving communities vulnerable when they need protection most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-safeescape-gray">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;
