import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Alpha Coders | India\'s Premier Open Source Community',
  description: 'Join Alpha Coders, a community of 200+ passionate developers from India building the future of open source. Connect, learn, and grow together.',
  alternates: {
    canonical: 'https://alphacodres.vercel.app',
  },
};

export default function Home() {
  return <HomeClient />;
}
