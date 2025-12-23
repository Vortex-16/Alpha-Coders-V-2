import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import Stars from '@/components/stars';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteConfig = {
  name: 'Alpha Coders',
  description: 'A elite community of passionate developers and open-source contributors from India, building the next generation of software.',
  url: 'https://alphacodres.vercel.app', // Placeholder, using what might be the deployment URL
  ogImage: 'https://alphacodres.vercel.app/og-image.png',
  links: {
    github: 'https://github.com/Alpha4Coders',
    discord: 'https://discord.gg/5p4wkAykV',
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Alpha Coders',
    'Developers India',
    'Open Source Community',
    'India Coders',
    'Coding Community',
    'Web Development',
    'Software Engineering',
  ],
  authors: [
    {
      name: 'Alpha Coders Team',
      url: 'https://github.com/Alpha4Coders',
    },
  ],
  creator: 'Alpha Coders',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@Alpha4Coders',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/manifest.json`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <Stars />
          <div className="flex min-h-screen w-full flex-col">
            {/* Header removed in favor of Dock */}
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
