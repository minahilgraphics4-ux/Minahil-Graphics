/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
}

export interface Tool {
  name: string;
  color: string;
  icon?: string;
}

export interface BrandingItem {
  id: string;
  title: string;
  tagline: string;
  logoType: string;
  colorTheme: {
    primary: string;
    secondary: string;
    bg: string;
    text: string;
  };
  details: string;
  deliverables: string[];
}

export interface LogoItem {
  id: string;
  name: string;
  description: string;
  category: string;
  logoStyle: 'geometric' | 'minimalist' | 'organic' | 'elegant' | 'dynamic';
  primaryColor: string;
  accentColor: string;
}

export interface SocialItem {
  id: string;
  title: string;
  category: string;
  discount?: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  tag: string;
  imageAlt: string;
  bulletPoints?: string[];
}

export interface FlyerItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  category: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  date?: string;
  phone?: string;
}

export interface PackagingItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  productType: string;
  bgColor: string;
  accentColor: string;
  nutritionFacts?: string[];
}

export interface ThumbnailItem {
  id: string;
  title: string;
  badge: string;
  views: string;
  duration: string;
  glowColor: string;
  style: 'gaming' | 'business' | 'freelancing';
  author: string;
}

export interface PrintItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  category: string;
  accentColor: string;
  bgColor: string;
}

export interface CaseStudy {
  project: string;
  industry: string;
  scope: string[];
  problem: string;
  solution: string;
  result: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}
