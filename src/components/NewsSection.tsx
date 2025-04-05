
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, TrendingDown, Newspaper } from "lucide-react";
import { NewsItem } from "@/types";
import { mockNews } from "@/data/mockData";

interface NewsSectionProps {
  news?: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news = mockNews }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedNews, setExpandedNews] = useState<string | null>(null);

  const newsCategories = ["all", "Monetary Policy", "Geopolitics", "Energy Policy", "Supply Chain"];
  
  const filteredNews = news.filter(item => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const getImpactBadge = (impact: 'positive' | 'negative' | 'neutral') => {
    if (impact === 'positive') return (
      <Badge className="bg-green-100 text-green-800 flex items-center">
        <TrendingUp className="h-3 w-3 mr-1" /> Positive
      </Badge>
    );
    if (impact === 'negative') return (
      <Badge className="bg-red-100 text-red-800 flex items-center">
        <TrendingDown className="h-3 w-3 mr-1" /> Negative
      </Badge>
    );
    return <Badge className="bg-gray-100 text-gray-800">Neutral</Badge>;
  };

  const toggleExpandNews = (id: string) => {
    if (expandedNews === id) {
      setExpandedNews(null);
    } else {
      setExpandedNews(id);
    }
  };

  return (
    <div id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-finance-navy">Geopolitical News & Market Impact</h2>
          <p className="mt-2 text-lg text-finance-gray">Stay informed about global events that can influence market trends</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {newsCategories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category === "all" ? "All News" : category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  {item.imageUrl && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {item.category}
                          </Badge>
                          {getImpactBadge(item.impact)}
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Globe className="h-3 w-3 mr-1" /> {item.source} | {item.date}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={expandedNews === item.id ? "" : "line-clamp-3"}>
                      {item.content}
                    </p>
                    {item.content.length > 150 && (
                      <button 
                        onClick={() => toggleExpandNews(item.id)} 
                        className="mt-2 text-finance-blue hover:text-finance-navy text-sm"
                      >
                        {expandedNews === item.id ? "Read less" : "Read more"}
                      </button>
                    )}
                  </CardContent>
                  <CardFooter className="pt-2 flex-col items-start">
                    <div className="w-full">
                      <h4 className="text-sm font-medium text-finance-gray mb-2">Related Markets:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.relatedMarkets.map((market) => (
                          <Badge key={market} variant="outline" className="bg-gray-50">
                            {market}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 w-full flex justify-between">
                      <Button variant="outline" className="text-finance-blue border-finance-blue hover:bg-finance-blue hover:text-white">
                        <Newspaper className="h-4 w-4 mr-2" /> Full Article
                      </Button>
                      <Button variant="ghost" className="text-finance-gray hover:text-finance-blue">
                        <TrendingUp className="h-4 w-4 mr-2" /> Impact Analysis
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 bg-finance-lightGray p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-finance-navy mb-4">How to Use News for Investment Decisions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium text-finance-blue mb-2">Identify Patterns</h4>
              <p className="text-finance-gray">Look for recurring themes in geopolitical events that historically impact specific markets.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-finance-blue mb-2">Consider Long-term Effects</h4>
              <p className="text-finance-gray">Short-term market reactions often differ from long-term implications of global events.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-finance-blue mb-2">Diversify Accordingly</h4>
              <p className="text-finance-gray">Use geopolitical insights to strategically diversify your portfolio across different regions and sectors.</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-finance-gray italic">
            <p>Disclaimer: News analysis and potential market impacts are provided for informational purposes only. 
            Always conduct thorough research before making investment decisions based on geopolitical events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
