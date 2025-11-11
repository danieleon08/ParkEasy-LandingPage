import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoIcon } from './logo-icon';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer id="contacto" className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="#inicio" className="flex items-center gap-2 font-bold text-lg text-primary w-fit">
              <LogoIcon className="h-7 w-7 text-secondary" />
              <span className="font-headline font-bold">ParkEasy</span>
            </Link>
            <p className="max-w-sm">Mejorando la movilidad urbana en Bogotá y pronto en toda Colombia.</p>
          </div>
          <div className="md:mx-auto">
            <h4 className="font-headline font-semibold text-primary">Contacto</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="mailto:contacto@parkeasy.co" className="hover:text-primary transition-colors">contacto@parkeasy.co</a></li>
              <li><p>Bogotá, Colombia</p></li>
            </ul>
          </div>
          <div className="md:ml-auto">
            <h4 className="font-headline font-semibold text-primary">Síguenos</h4>
            <div className="flex gap-2 mt-4">
              {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a href={link.href} aria-label={link.name}>{link.icon}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ParkEasy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
