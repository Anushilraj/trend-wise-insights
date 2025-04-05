
import React from "react";
import { TrendingUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-finance-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">TrendWise Insights</span>
            </div>
            <p className="mt-4 text-gray-300">
              Empowering investors with data-driven market analysis and geopolitical insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#questionnaire" className="text-gray-300 hover:text-white">Investment Profile</a></li>
              <li><a href="#trends" className="text-gray-300 hover:text-white">Market Trends</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white">Geopolitical News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Learning Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Market Glossary</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Investment Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Disclaimer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">© 2025 TrendWise Insights. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Important Disclaimer:</strong> Stock information and analysis provided on this site is for informational purposes only. 
                It should not be considered as financial advice. Always conduct your own research or consult with a financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
