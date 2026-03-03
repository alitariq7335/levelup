
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StrategyRequest {
  businessName: string;
  industry: string;
  targetMarket: 'local' | 'international' | 'both';
  goals: string;
}

export interface StrategyResponse {
  overview: string;
  steps: {
    title: string;
    description: string;
  }[];
  keyMetric: string;
}
