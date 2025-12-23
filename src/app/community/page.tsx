import { Metadata } from 'next';
import CommunityClient from './CommunityClient';

export const metadata: Metadata = {
  title: 'Community | Meet India\'s Brightest Developers',
  description: 'Explore the Alpha Coders community. Meet our 200+ members, discover upcoming events, and find out how you can contribute to open source projects in India.',
  alternates: {
    canonical: 'https://alphacodres.vercel.app/community',
  },
};

export default function CommunityPage() {
  return <CommunityClient />;
}
