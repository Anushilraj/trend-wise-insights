
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ChartBar, ChartLine, FilterX } from "lucide-react";
import { StockTrend, RiskTolerance, TimeHorizon } from "@/types";
import { mockStockTrends } from "@/data/mockData";

interface StockTrendsProps {
  trends?: StockTrend[];
}

const StockTrends: React.FC<StockTrendsProps> = ({ trends = mockStockTrends }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [riskFilter, setRiskFilter] = useState<RiskTolerance | "all">("all");
  const [timeFilter, setTimeFilter] = useState<TimeHorizon | "all">("all");

  const filteredTrends = trends.filter(stock => {
    if (riskFilter !== "all" && stock.riskLevel !== riskFilter) return false;
    if (timeFilter !== "all" && stock.timeFrame !== timeFilter) return false;
    return true;
  });

  const clearFilters = () => {
    setRiskFilter("all");
    setTimeFilter("all");
  };

  const getRecommendationColor = (recommendation: string) => {
    if (recommendation.includes("Buy")) return "text-green-600";
    if (recommendation.includes("Sell")) return "text-red-600";
    return "text-yellow-600";
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? 
      <TrendingUp className="h-4 w-4 text-green-600" /> : 
      <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  const getRiskBadgeColor = (risk: RiskTolerance) => {
    if (risk === "low") return "bg-green-100 text-green-800";
    if (risk === "medium") return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const getTimeFrameBadgeColor = (timeFrame: TimeHorizon) => {
    if (timeFrame === "short") return "bg-blue-100 text-blue-800";
    if (timeFrame === "medium") return "bg-purple-100 text-purple-800";
    return "bg-indigo-100 text-indigo-800";
  };

  return (
    <div id="trends" className="py-16 bg-finance-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-finance-navy">Stock Market Trends</h2>
          <p className="mt-2 text-lg text-finance-gray">Current market analysis and recommendations based on your profile</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <TabsList className="mb-4 md:mb-0">
              <TabsTrigger value="all">All Stocks</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-wrap gap-2 items-center">
              <div>
                <select 
                  className="text-sm rounded-md border border-gray-300 focus:ring-finance-blue focus:border-finance-blue p-2"
                  value={riskFilter}
                  onChange={(e) => setRiskFilter(e.target.value as RiskTolerance | "all")}
                >
                  <option value="all">All Risk Levels</option>
                  <option value="low">Low Risk</option>
                  <option value="medium">Medium Risk</option>
                  <option value="high">High Risk</option>
                </select>
              </div>
              
              <div>
                <select 
                  className="text-sm rounded-md border border-gray-300 focus:ring-finance-blue focus:border-finance-blue p-2"
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value as TimeHorizon | "all")}
                >
                  <option value="all">All Time Frames</option>
                  <option value="short">Short-term</option>
                  <option value="medium">Medium-term</option>
                  <option value="long">Long-term</option>
                </select>
              </div>
              
              {(riskFilter !== "all" || timeFilter !== "all") && (
                <button 
                  onClick={clearFilters}
                  className="inline-flex items-center text-sm text-finance-gray hover:text-finance-blue"
                >
                  <FilterX className="h-4 w-4 mr-1" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrends.length > 0 ? (
                filteredTrends.map((stock) => (
                  <Card key={stock.symbol} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-white pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{stock.symbol}</CardTitle>
                          <CardDescription>{stock.name}</CardDescription>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-lg font-semibold">${stock.price.toFixed(2)}</span>
                          <div className="flex items-center">
                            {getChangeIcon(stock.change)}
                            <span className={`ml-1 text-sm ${getChangeColor(stock.change)}`}>
                              {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex flex-col space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-finance-gray">Recommendation:</span>
                          <span className={`font-medium ${getRecommendationColor(stock.recommendation)}`}>
                            {stock.recommendation}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-finance-gray">Risk Level:</span>
                          <Badge variant="outline" className={getRiskBadgeColor(stock.riskLevel)}>
                            {stock.riskLevel.charAt(0).toUpperCase() + stock.riskLevel.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-finance-gray">Time Frame:</span>
                          <Badge variant="outline" className={getTimeFrameBadgeColor(stock.timeFrame)}>
                            {stock.timeFrame.charAt(0).toUpperCase() + stock.timeFrame.slice(1)}-Term
                          </Badge>
                        </div>
                        <div className="flex justify-between mt-2">
                          <button className="flex items-center text-sm text-finance-blue hover:text-finance-navy">
                            <ChartLine className="h-4 w-4 mr-1" />
                            View Chart
                          </button>
                          <button className="flex items-center text-sm text-finance-blue hover:text-finance-navy">
                            <ChartBar className="h-4 w-4 mr-1" />
                            Financials
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-10">
                  <p className="text-lg text-finance-gray">No stocks match your current filters.</p>
                  <button 
                    onClick={clearFilters} 
                    className="mt-2 text-finance-blue hover:text-finance-navy inline-flex items-center"
                  >
                    <FilterX className="h-4 w-4 mr-1" />
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="recommended" className="mt-0">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-finance-navy mb-4">Personalized Recommendations</h3>
              <p className="text-finance-gray mb-4">Complete the investment questionnaire to see tailored stock recommendations.</p>
              <button 
                className="px-4 py-2 bg-finance-blue text-white rounded-md hover:bg-finance-navy transition-colors"
                onClick={() => document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Go to Questionnaire
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="watchlist" className="mt-0">
            <div className="bg-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-finance-navy mb-4">Your Watchlist</h3>
              <p className="text-finance-gray">Save stocks to your watchlist to track their performance.</p>
              <p className="text-finance-gray mt-2">Feature coming soon!</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-finance-navy mb-4">Understanding Our Recommendations</h3>
          <p className="text-finance-gray mb-4">
            Our stock trend analysis is based on a combination of technical indicators, fundamental analysis, and market sentiment. 
            Recommendations are categorized by risk level and optimal investment time frame.
          </p>
          <div className="text-sm text-finance-gray italic">
            <p>Disclaimer: All stock information and recommendations are for informational purposes only and should not be considered as financial advice. 
            Always conduct your own research or consult with a financial advisor before making investment decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockTrends;
