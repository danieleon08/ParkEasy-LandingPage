import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimationWrapper from './animation-wrapper';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="inicio" className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <AnimationWrapper>
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Encuentra parqueaderos <br /> fácilmente con <span className="text-secondary">ParkEasy</span>
          </h1>
        </AnimationWrapper>
        <AnimationWrapper delay="200ms">
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            La solución inteligente para la movilidad urbana en Bogotá. Di adiós al estrés de buscar dónde parquear.
          </p>
        </AnimationWrapper>
        <AnimationWrapper delay="400ms">
          <div className="mt-10">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 px-10">
              <Link href="#descarga">Descarga la App</Link>
            </Button>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
