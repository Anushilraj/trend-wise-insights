
import { NewsItem, StockTrend } from "../types";

export const mockStockTrends: StockTrend[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.72,
    change: 2.35,
    changePercent: 1.33,
    recommendation: "Buy",
    riskLevel: "low",
    timeFrame: "long"
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 408.42,
    change: 3.15,
    changePercent: 0.78,
    recommendation: "Hold",
    riskLevel: "low",
    timeFrame: "medium"
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 162.68,
    change: -1.54,
    changePercent: -0.94,
    recommendation: "Buy",
    riskLevel: "medium",
    timeFrame: "long"
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 185.04,
    change: 0.87,
    changePercent: 0.47,
    recommendation: "Buy",
    riskLevel: "medium",
    timeFrame: "long"
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 103.77,
    change: 5.34,
    changePercent: 5.42,
    recommendation: "Strong Buy",
    riskLevel: "high",
    timeFrame: "medium"
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 247.99,
    change: -5.62,
    changePercent: -2.22,
    recommendation: "Hold",
    riskLevel: "high",
    timeFrame: "long"
  }
];

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Federal Reserve Signals Possible Rate Cuts This Year",
    content: "The Federal Reserve has indicated it may cut interest rates later this year, signaling confidence in the slowdown of inflation while acknowledging economic growth concerns.",
    source: "Financial Times",
    date: "2025-04-04",
    category: "Monetary Policy",
    impact: "positive",
    relatedMarkets: ["Bonds", "Banking", "Real Estate"],
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "2",
    title: "Trade Tensions Escalate Between US and China",
    content: "New tariffs announced by both nations as diplomatic relations deteriorate over technology policy disputes.",
    source: "Reuters",
    date: "2025-04-03",
    category: "Geopolitics",
    impact: "negative",
    relatedMarkets: ["Technology", "Manufacturing", "Commodities"],
    imageUrl: "https://images.unsplash.com/photo-1551214012-84f95e060dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "3",
    title: "European Union Unveils New Green Energy Initiative",
    content: "The EU has approved a €300 billion package to accelerate renewable energy infrastructure across member states.",
    source: "Bloomberg",
    date: "2025-04-02",
    category: "Energy Policy",
    impact: "positive",
    relatedMarkets: ["Renewable Energy", "Utilities", "Electric Vehicles"],
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "4",
    title: "Global Semiconductor Shortage Expected to Ease",
    content: "Industry analysts predict the chip shortage that has plagued technology and automotive markets will improve by Q3 2025.",
    source: "Wall Street Journal",
    date: "2025-04-01",
    category: "Supply Chain",
    impact: "positive",
    relatedMarkets: ["Semiconductors", "Automotive", "Consumer Electronics"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "5",
    title: "Oil Prices Surge Amid Middle East Conflict",
    content: "Crude oil futures jumped 8% following escalating tensions in major oil-producing regions.",
    source: "CNBC",
    date: "2025-03-31",
    category: "Geopolitics",
    impact: "negative",
    relatedMarkets: ["Energy", "Transportation", "Airlines"],
    imageUrl: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  }
];
