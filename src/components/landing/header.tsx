"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { LogoIcon } from './logo-icon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#funcionalidades', label: 'Funcionalidades' },
    { href: '#descarga', label: 'Descarga' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const NavLinkContent = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#inicio" className="flex items-center gap-2 font-bold text-lg text-primary">
          <LogoIcon className="h-7 w-7 text-secondary" />
          <span className="font-headline font-bold">ParkEasy</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(link => <NavLinkContent key={link.href} {...link} />)}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#descarga">Descargar App</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link href="#inicio" className="flex items-center gap-2 font-bold text-lg text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      <LogoIcon className="h-7 w-7 text-secondary" />
                      <span className="font-headline font-bold">ParkEasy</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-6 p-4 mt-4">
                    {navLinks.map(link => <NavLinkContent key={link.href} {...link} />)}
                  </nav>
                  <div className="mt-auto p-4">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="#descarga">Descargar App</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
