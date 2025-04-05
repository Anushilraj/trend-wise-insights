
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-finance-blue" />
            <span className="ml-2 text-xl font-bold text-finance-navy">TrendWise Insights</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-finance-gray hover:text-finance-blue px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#questionnaire" className="text-finance-gray hover:text-finance-blue px-3 py-2 rounded-md text-sm font-medium">
              Investment Profile
            </a>
            <a href="#trends" className="text-finance-gray hover:text-finance-blue px-3 py-2 rounded-md text-sm font-medium">
              Market Trends
            </a>
            <a href="#news" className="text-finance-gray hover:text-finance-blue px-3 py-2 rounded-md text-sm font-medium">
              Geopolitical News
            </a>
            <Button variant="outline" className="ml-4 border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
