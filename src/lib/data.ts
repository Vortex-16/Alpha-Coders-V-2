import type { TeamMember, CommunityMember, Project } from '@/types';

export const coreTeam: TeamMember[] = [
  { id: 1, name: 'Archis', username: 'Dealer-09', avatar: 'avatar_dealer-09', role: 'Owner' },
  { id: 2, name: 'Rajbeer Saha', username: 'PixelPioneer404', avatar: 'avatar_pixelpioneer404', role: 'Owner' },
  { id: 3, name: 'Rouvik Maji', username: 'Rouvik', avatar: 'avatar_rouvik', role: 'Owner' },
  { id: 4, name: 'Vikash Gupta', username: 'Vortex-16', avatar: 'avatar_vortex-16', role: 'Owner' },
];

export const communityMembers: CommunityMember[] = [
    { id: 5, name: 'Aditya Mishra', username: '2b-adrix', avatar: 'avatar_2b-adrix' },
    { id: 6, name: 'AYAN ALI KHAN', username: 'AyanAlikhan11', avatar: 'avatar_ayanalikhan11' },
    { id: 7, name: 'Ayush Chowdhury', username: 'AyushChowdhuryCSE', avatar: 'avatar_ayushchowdhurycse' },
    { id: 8, name: 'Avinish Kumar Tripathi', username: 'dakiyaanoosi', avatar: 'avatar_dakiyaanoosi' },
    { id: 9, name: 'Ankan Nandi', username: 'DebugZero0', avatar: 'avatar_debugzero0' },
    { id: 10, name: 'Jeet-Pathak', username: 'Jeet-Pathak', avatar: 'avatar_jeet-pathak' },
    { id: 11, name: 'luckym-crypto', username: 'luckym-crypto', avatar: 'avatar_luckym-crypto' },
    { id: 12, name: 'Code_with_Priyabrata', username: 'PriyabrataSur', avatar: 'avatar_priyabratasur' },
    { id: 13, name: 'priyanshu2004-hub', username: 'priyanshu2004-hub', avatar: 'avatar_priyanshu2004-hub' },
    { id: 14, name: 'Debjit Halder', username: 'reZero404', avatar: 'avatar_rezero404' },
    { id: 15, name: 'rupampramanik05', username: 'rupampramanik05', avatar: 'avatar_rupampramanik05' },
    { id: 16, name: 'shobha03101981-prog', username: 'shobha03101981-prog', avatar: 'avatar_shobha03101981-prog' },
    { id: 17, name: 'Sritamsarkar-2028', username: 'Sritamsarkar-2028', avatar: 'avatar_sritamsarkar-2028' },
    { id: 18, name: 'Srinjoyee_Dey', username: 'SrinjoyeeDey', avatar: 'avatar_srinjoyeedey' },
    { id: 19, name: 'sunny kumar', username: 'sunny-source', avatar: 'avatar_sunny-source' },
    { id: 20, name: 'SuperiorDevelop', username: 'SuperiorDevelop', avatar: 'avatar_superiordevelop' },
    { id: 21, name: 'Rajdeep Das', username: 'yourajdeep', avatar: 'avatar_yourajdeep' },
    { id: 22, name: 'zin-web', username: 'zin-web', avatar: 'avatar_zin-web' },
];

export const projects: Project[] = [
  {
    id: 1,
    name: 'QuantumLeap',
    description: 'A cutting-edge machine learning framework for predictive analytics.',
    url: 'https://github.com/Alpha4Coders/QuantumLeap',
    technologies: ['Python', 'TensorFlow', 'scikit-learn'],
  },
  {
    id: 2,
    name: 'Nebula-UI',
    description: 'A sleek, modern component library for building beautiful user interfaces.',
    url: 'https://github.com/Alpha4Coders/Nebula-UI',
    technologies: ['React', 'TypeScript', 'Storybook'],
  },
  {
    id: 3,
    name: 'Chrono-DB',
    description: 'A high-performance time-series database optimized for IoT data.',
    url: 'https://github.com/Alpha4Coders/Chrono-DB',
    technologies: ['Go', 'PostgreSQL', 'Docker'],
  },
  {
    id: 4,
    name: 'Code-Collab',
    description: 'A real-time collaborative coding platform with integrated video chat.',
    url: 'https://github.com/Alpha4Coders/Code-Collab',
    technologies: ['Next.js', 'WebRTC', 'Firebase'],
  },
  {
    id: 5,
    name: 'Game-Engine-X',
    description: 'A lightweight 2D game engine built with web technologies.',
    url: 'https://github.com/Alpha4Coders/Game-Engine-X',
    technologies: ['TypeScript', 'Canvas API'],
  },
  {
    id: 6,
    name: 'Secure-Auth',
    description: 'A plug-and-play authentication service with multi-factor support.',
    url: 'https://github.com/Alpha4Coders/Secure-Auth',
    technologies: ['Go', 'OAuth2', 'JWT'],
  },
   {
    id: 7,
    name: 'Data-Visualizer',
    description: 'Interactive data visualization tool for complex datasets.',
    url: 'https://github.com/Alpha4Coders/Data-Visualizer',
    technologies: ['React', 'D3.js', 'Python'],
  },
  {
    id: 8,
    name: 'Static-Site-Gen',
    description: 'A blazing fast static site generator for personal blogs and portfolios.',
    url: 'https://github.com/Alpha4Coders/Static-Site-Gen',
    technologies: ['Next.js', 'Markdown', 'Tailwind CSS'],
  },
];
