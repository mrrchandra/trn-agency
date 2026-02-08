
import React from 'react';
import { Youtube, TrendingUp, Cpu, Video, Palette } from 'lucide-react';
import { Service, Stat } from './types';

export const LINKTREE_URL = 'https://linktr.ee/trnglobalagency';

export const SERVICES: Service[] = [
  {
    id: 'yt-monetization',
    title: 'YouTube Monetization',
    description: 'Guaranteed support in reaching 1,000 subscribers and 4,000 watch hours to kickstart your earnings.',
    icon: <Youtube className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'tiktok-fb-growth',
    title: 'TikTok & FB Growth',
    description: 'Expert monetization setup and eligibility strategy for high-engagement social platforms.',
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'yt-automation',
    title: 'YouTube Automation',
    description: 'Hands-off channel management including niche research, scriptwriting, and professional editing.',
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'video-editing',
    title: 'Professional Editing',
    description: 'High-quality storytelling for both short-form Reels/TikToks and long-form cinematic content.',
    icon: <Video className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'digital-branding',
    title: 'Digital Branding',
    description: 'Premium custom logos, banners, and a complete visual identity that makes your brand stand out.',
    icon: <Palette className="w-8 h-8 text-blue-500" />,
  },
];

export const STATS: Stat[] = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Support', value: '24/7' },
];
