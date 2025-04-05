
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPreference, InvestmentType, TimeHorizon, RiskTolerance } from "@/types";
import { useToast } from "@/hooks/use-toast";

const InvestmentQuestionnaire: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("investment-type");
  const [userPreference, setUserPreference] = useState<UserPreference>({
    investmentType: "moderate",
    timeHorizon: "medium",
    riskTolerance: "medium",
    sectors: [],
    initialInvestment: 5000
  });

  const sectors = [
    { id: "technology", label: "Technology" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance", label: "Finance" },
    { id: "energy", label: "Energy" },
    { id: "consumer", label: "Consumer Goods" },
    { id: "industrial", label: "Industrial" },
    { id: "real-estate", label: "Real Estate" },
    { id: "utilities", label: "Utilities" }
  ];

  const handleTypeChange = (value: InvestmentType) => {
    setUserPreference({ ...userPreference, investmentType: value });
  };

  const handleTimeHorizonChange = (value: TimeHorizon) => {
    setUserPreference({ ...userPreference, timeHorizon: value });
  };

  const handleRiskToleranceChange = (value: RiskTolerance) => {
    setUserPreference({ ...userPreference, riskTolerance: value });
  };

  const handleSectorChange = (sector: string) => {
    const updatedSectors = userPreference.sectors.includes(sector)
      ? userPreference.sectors.filter(s => s !== sector)
      : [...userPreference.sectors, sector];
    
    setUserPreference({ ...userPreference, sectors: updatedSectors });
  };

  const handleInvestmentChange = (value: number[]) => {
    setUserPreference({ ...userPreference, initialInvestment: value[0] });
  };

  const handleSubmit = () => {
    if (userPreference.sectors.length === 0) {
      toast({
        title: "Please select at least one sector",
        description: "Select sectors you're interested in investing",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Preferences saved!",
      description: "Your investment profile has been updated",
    });
    
    // Scroll to trends section
    document.getElementById('trends')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToNextTab = () => {
    if (activeTab === "investment-type") setActiveTab("time-horizon");
    else if (activeTab === "time-horizon") setActiveTab("risk-tolerance");
    else if (activeTab === "risk-tolerance") setActiveTab("sectors");
    else if (activeTab === "sectors") setActiveTab("investment-amount");
  };

  const goToPrevTab = () => {
    if (activeTab === "time-horizon") setActiveTab("investment-type");
    else if (activeTab === "risk-tolerance") setActiveTab("time-horizon");
    else if (activeTab === "sectors") setActiveTab("risk-tolerance");
    else if (activeTab === "investment-amount") setActiveTab("sectors");
  };

  return (
    <div id="questionnaire" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-finance-navy">What's Your Investment Style?</h2>
          <p className="mt-2 text-lg text-finance-gray">Tell us about your preferences to get personalized stock trend insights</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Investment Questionnaire</CardTitle>
            <CardDescription>Complete all sections to get tailored recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="investment-type">Type</TabsTrigger>
                <TabsTrigger value="time-horizon">Timeline</TabsTrigger>
                <TabsTrigger value="risk-tolerance">Risk</TabsTrigger>
                <TabsTrigger value="sectors">Sectors</TabsTrigger>
                <TabsTrigger value="investment-amount">Amount</TabsTrigger>
              </TabsList>

              <TabsContent value="investment-type">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">What type of investor are you?</h3>
                  <RadioGroup value={userPreference.investmentType} onValueChange={handleTypeChange} className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="conservative" id="conservative" className="mt-1" />
                      <div>
                        <Label htmlFor="conservative" className="text-base font-medium">Conservative</Label>
                        <p className="text-sm text-finance-gray">Focus on stability and income, with minimal risk to principal</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="moderate" id="moderate" className="mt-1" />
                      <div>
                        <Label htmlFor="moderate" className="text-base font-medium">Moderate</Label>
                        <p className="text-sm text-finance-gray">Balanced approach between growth and income with moderate risk</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="aggressive" id="aggressive" className="mt-1" />
                      <div>
                        <Label htmlFor="aggressive" className="text-base font-medium">Aggressive</Label>
                        <p className="text-sm text-finance-gray">Focus on growth and capital appreciation, accepting higher risk</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>

              <TabsContent value="time-horizon">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">What is your investment time horizon?</h3>
                  <RadioGroup value={userPreference.timeHorizon} onValueChange={handleTimeHorizonChange} className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="short" id="short-term" className="mt-1" />
                      <div>
                        <Label htmlFor="short-term" className="text-base font-medium">Short-term (0-2 years)</Label>
                        <p className="text-sm text-finance-gray">Investing for near-future goals or liquidity needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="medium" id="medium-term" className="mt-1" />
                      <div>
                        <Label htmlFor="medium-term" className="text-base font-medium">Medium-term (3-5 years)</Label>
                        <p className="text-sm text-finance-gray">Mid-range goals like home buying or education</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="long" id="long-term" className="mt-1" />
                      <div>
                        <Label htmlFor="long-term" className="text-base font-medium">Long-term (6+ years)</Label>
                        <p className="text-sm text-finance-gray">Extended growth period for retirement or wealth building</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>

              <TabsContent value="risk-tolerance">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">What is your risk tolerance level?</h3>
                  <RadioGroup value={userPreference.riskTolerance} onValueChange={handleRiskToleranceChange} className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="low" id="low-risk" className="mt-1" />
                      <div>
                        <Label htmlFor="low-risk" className="text-base font-medium">Low Risk</Label>
                        <p className="text-sm text-finance-gray">Prefer stable investments with minimal fluctuations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="medium" id="medium-risk" className="mt-1" />
                      <div>
                        <Label htmlFor="medium-risk" className="text-base font-medium">Medium Risk</Label>
                        <p className="text-sm text-finance-gray">Can tolerate moderate market fluctuations for better returns</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value="high" id="high-risk" className="mt-1" />
                      <div>
                        <Label htmlFor="high-risk" className="text-base font-medium">High Risk</Label>
                        <p className="text-sm text-finance-gray">Comfortable with significant fluctuations for potentially higher returns</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </TabsContent>

              <TabsContent value="sectors">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Which sectors interest you? (select at least one)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {sectors.map((sector) => (
                      <div key={sector.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={sector.id} 
                          checked={userPreference.sectors.includes(sector.id)}
                          onCheckedChange={() => handleSectorChange(sector.id)}
                        />
                        <Label htmlFor={sector.id}>{sector.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="investment-amount">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">What is your initial investment amount?</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-finance-gray">$1,000</span>
                      <span className="text-base font-medium">${userPreference.initialInvestment.toLocaleString()}</span>
                      <span className="text-sm text-finance-gray">$50,000+</span>
                    </div>
                    <Slider 
                      defaultValue={[5000]} 
                      max={50000} 
                      min={1000} 
                      step={1000}
                      value={[userPreference.initialInvestment]}
                      onValueChange={handleInvestmentChange}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={goToPrevTab}
              disabled={activeTab === "investment-type"}
            >
              Previous
            </Button>
            
            {activeTab !== "investment-amount" ? (
              <Button onClick={goToNextTab}>Next</Button>
            ) : (
              <Button onClick={handleSubmit}>Get Recommendations</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentQuestionnaire;
