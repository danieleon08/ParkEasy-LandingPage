import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimationWrapper from './animation-wrapper';

const testimonials = [
  {
    name: 'Ana María G.',
    role: 'Conductora en Bogotá',
    quote: '“Siempre tengo problemas para parquear mi camioneta. Nunca sé si el parqueadero tiene espacio para vehículos grandes.”',
    avatarId: 'testimonial-1',
  },
  {
    name: 'Carlos R.',
    role: 'Usuario frecuente',
    quote: '“Conocer los precios de los parqueaderos me permite elegir el más económico, que es lo que más me importa.”',
    avatarId: 'testimonial-2',
  },
  {
    name: 'Sofia V.',
    role: 'Estudiante',
    quote: '“Me gustaría poder reservar un parqueadero con anticipación y llegar tranquilo a mis eventos.”',
    avatarId: 'testimonial-3',
  },
  {
    name: 'Dario Duarte',
    role: 'Dueño de Parqueadero',
    quote: '“Como dueño de parqueadero, quiero tener la misma visibilidad que los grandes. Necesitamos una competencia justa.”',
    avatarId: 'testimonial-3',
  },
  {
    name: 'Luis Gutierrez',
    role: 'Conductor',
    quote: '“Una app que centralice la información, dé visibilidad a todos y facilite estacionar sería una gran solución para la ciudad.”',
    avatarId: 'testimonial-3',
  }
];

export default function TestimonialsSection() {
  const imagePlaceholders = PlaceHolderImages;

  return (
    <section id="testimonios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-primary">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            La confianza de nuestra comunidad es nuestro mayor logro.
          </p>
        </AnimationWrapper>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const avatar = imagePlaceholders.find(p => p.id === testimonial.avatarId);
            return (
              <AnimationWrapper key={testimonial.name} delay={`${index * 150}ms`}>
                <Card className="h-full flex flex-col justify-between bg-muted/40 border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex text-accent mb-2">
                      <Star /><Star /><Star /><Star /><StarHalf />
                    </div>
                    <blockquote className="text-foreground italic">"{testimonial.quote}"</blockquote>
                  </CardContent>
                  <div className="flex items-center gap-4 p-6 bg-muted/60 rounded-b-lg">
                    {avatar && (
                      <Image
                        src={avatar.imageUrl}
                        alt={`Avatar de ${testimonial.name}`}
                        width={48}
                        height={48}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                      />
                    )}
                    <div>
                      <p className="font-bold font-headline text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
