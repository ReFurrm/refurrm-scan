export type UserRole = 'admin' | 'ambassador' | 'volunteer' | 'buyer' | 'family';
export type SubscriptionTier = 'free' | 'pro';


export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  tier?: 'bronze' | 'silver' | 'gold' | 'platinum';
  points?: number;
  subscription?: SubscriptionTier;
}

export interface Item {
  id: string;
  name: string;
  image: string;
  category: 'return' | 'resell' | 'donate';
  status: 'pending' | 'listed' | 'sold' | 'returned' | 'donated';
  sentimentalValue?: string;
  unitId: string;
  ownerContact?: string;
  estimatedValue?: number;
}

export interface Story {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'reunion' | 'rescue' | 'sale';
  date: string;
  impact: string;
}

export interface AmbassadorActivity {
  type: string;
  points: number;
  date: string;
  description: string;
}

export interface Auction {
  id: string;
  title: string;
  facility: string;
  location: string;
  date: string;
  time: string;
  distance: number;
  image: string;
  unitCount: number;
  type: 'online' | 'in-person';
}

export interface RescueRequest {
  id: string;
  submittedBy: string;
  facility: string;
  location: string;
  unitNumber: string;
  story: string;
  status: 'pending' | 'assigned' | 'in-progress' | 'completed';
  assignedTo?: string;
  dateSubmitted: string;
  priority: 'low' | 'medium' | 'high';
}

export interface ScanResult {
  estimatedValue: number;
  confidence: number;
  category: string;
  comparables: Array<{
    source: string;
    price: number;
    url: string;
  }>;
}
