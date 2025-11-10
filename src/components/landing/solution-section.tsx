import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimationWrapper from './animation-wrapper';

const benefits = [
  { text: 'Busca parqueaderos disponibles en tiempo real.' },
  { text: 'Reserva tu cupo con anticipación y evita sorpresas.' },
  { text: 'Compara tarifas y servicios adicionales al instante.' },
  { text: 'Paga de forma segura y sin contacto desde la app.' },
];

export default function SolutionSection() {
  const solutionImage = PlaceHolderImages.find(p => p.id === 'solution-image');

  return (
    <section id="solucion" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <AnimationWrapper>
            {solutionImage && (
              <Image
                src={solutionImage.imageUrl}
                alt={solutionImage.description}
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
                data-ai-hint={solutionImage.imageHint}
              />
            )}
          </AnimationWrapper>
          <AnimationWrapper delay="200ms">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-primary">
              Nuestra Solución: ParkEasy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              ParkEasy te conecta con una red de parqueaderos en toda la ciudad. Con nuestra app, tienes el control total de tu experiencia de estacionamiento.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="ml-3 text-base text-foreground">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
