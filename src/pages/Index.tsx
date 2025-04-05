
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InvestmentQuestionnaire from '@/components/InvestmentQuestionnaire';
import StockTrends from '@/components/StockTrends';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <InvestmentQuestionnaire />
        <StockTrends />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
