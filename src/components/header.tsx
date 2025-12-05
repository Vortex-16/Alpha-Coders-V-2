"use client";
import Link from 'next/link';
import { CodeXml, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { MotionDiv } from './motion-div';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Core Team' },
  { href: '/community', label: 'Community' },
  { href: '/#projects', label: 'Projects' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4">
      <header className="relative flex items-center justify-between p-2 rounded-full bg-background/60 backdrop-blur-md border border-border/40 shadow-lg">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">Alpha Coders</span>
        </Link>
        
        <nav className="items-center space-x-1 hidden md:flex bg-secondary/50 rounded-full p-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                pathname === link.href && 'text-primary'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <MotionDiv
                  layoutId="active-nav-link"
                  className="absolute inset-0 bg-background rounded-full z-[-1]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                <div className="flex flex-col pt-12">
                  <Link href="/" className="flex items-center gap-2 mb-8 px-4">
                    <CodeXml className="h-6 w-6 text-primary" />
                    <span className="font-bold">Alpha Coders</span>
                  </Link>
                  <nav className="flex flex-col gap-2 px-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className={cn(
                          'px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                          pathname === link.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
