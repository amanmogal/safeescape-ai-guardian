
import React from 'react';
import { Shield, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-safeescape-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-safeescape-blue" />
              <span className="text-xl font-bold">SafeEscape</span>
            </div>
            
            <p className="text-gray-400 mb-4">
              Your comprehensive emergency management system, designed to keep you safe when it matters most.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/sahil28032005/SafeEscape-MVP---AI-Powered-Emergency-Alert-App" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Real-Time Alerts</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">AI Emergency Assistant</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Smart Evacuation</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">SOS & Emergency Contacts</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Community Coordination</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Download</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="https://github.com/sahil28032005/SafeEscape-MVP---AI-Powered-Emergency-Alert-App/releases" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Android App
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">iOS App (Coming Soon)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desktop Version</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              SafeEscape © 2025. All Rights Reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
