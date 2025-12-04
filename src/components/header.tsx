import { CodeXml } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex items-center">
          <CodeXml className="h-6 w-6 mr-2 text-accent" />
          <span className="font-bold text-lg">Alpha Coders</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
