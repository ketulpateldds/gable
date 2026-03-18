// pricing page interfaces
export interface Plan {
  name: string;
  price: string;
  priceDetail: string;
  description: string;
  featuresHeader: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
  basePrice?: string;
}

// comparison table interface (pricing page)
export interface ComparisonFeature {
  name: string;
  basic: boolean;
  starter: boolean;
  growth: boolean;
  pro: boolean;
}
