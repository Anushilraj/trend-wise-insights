
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div id="home" className="pt-24 pb-16 bg-gradient-to-br from-white to-finance-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-finance-navy sm:text-5xl md:text-6xl">
            <span className="block">Make Informed</span>
            <span className="block text-finance-blue">Investment Decisions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-finance-gray sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Analyze market trends, understand geopolitical impacts, and get personalized investment insights based on your preferences.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="rounded-md shadow">
              <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium bg-finance-blue hover:bg-finance-navy" onClick={() => document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Analysis
              </Button>
            </div>
            <div className="ml-3">
              <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-lg shadow-xl p-6 max-w-3xl mx-auto">
          <div className="text-left">
            <h2 className="text-2xl font-bold text-finance-navy mb-4">Why TrendWise Insights?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-finance-blue mb-2">Personalized Analysis</h3>
                <p className="text-finance-gray">Get stock recommendations tailored to your investment style and risk tolerance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-finance-blue mb-2">Geopolitical Context</h3>
                <p className="text-finance-gray">Understand how global events impact markets and your potential investments.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-finance-blue mb-2">Data-Driven Insights</h3>
                <p className="text-finance-gray">Our analysis combines technical indicators with fundamental market factors.</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-finance-gray italic">
              <p>Disclaimer: All investment recommendations are for informational purposes only. Always conduct your own research before making investment decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
