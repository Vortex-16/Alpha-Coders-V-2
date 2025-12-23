import { Metadata } from 'next';
import TeamClient from './TeamClient';

export const metadata: Metadata = {
  title: 'Core Team | The Minds Behind Alpha Coders',
  description: 'Meet the leaders and core members of Alpha Coders. Learn about our mission to empower developers across India and our commitment to open-source excellence.',
  alternates: {
    canonical: 'https://alphacodres.vercel.app/team',
  },
};

export default function TeamPage() {
  return <TeamClient />;
}