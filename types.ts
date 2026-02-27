import { LucideIcon } from 'lucide-react';

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface EnvElement {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}
