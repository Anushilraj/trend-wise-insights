
export type InvestmentType = 'conservative' | 'moderate' | 'aggressive';
export type TimeHorizon = 'short' | 'medium' | 'long';
export type RiskTolerance = 'low' | 'medium' | 'high';

export interface UserPreference {
  investmentType: InvestmentType;
  timeHorizon: TimeHorizon;
  riskTolerance: RiskTolerance;
  sectors: string[];
  initialInvestment: number;
}

export interface StockTrend {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  recommendation: string;
  riskLevel: RiskTolerance;
  timeFrame: TimeHorizon;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  source: string;
  date: string;
  category: string;
  impact: 'positive' | 'negative' | 'neutral';
  relatedMarkets: string[];
  imageUrl?: string;
}
