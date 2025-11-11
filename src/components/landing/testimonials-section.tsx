import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimationWrapper from './animation-wrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const validations = [
  {
    name: 'Laura P.',
    role: 'Conductora Habitual',
    quote: '“Pagué por un parqueadero costoso durante años sin saber que había una opción mucho mejor y más barata a la vuelta de la esquina. ParkEasy me habría ahorrado tiempo y dinero.”',
    avatarId: 'testimonial-1',
  },
  {
    name: 'Javier M.',
    role: 'Conductor de Camioneta',
    quote: '“Encontrar un puesto para mi camioneta siempre es un dolor de cabeza. Ninguna app especifica si el parqueadero es apto para vehículos grandes. ¡Es una necesidad real!”',
    avatarId: 'testimonial-2',
  },
  {
    name: 'Sofía V.',
    role: 'Asistente a Eventos',
    quote: '“Me encantaría poder reservar un cupo con días de anticipación para ir a mis eventos tranquila, sin el estrés de no saber si encontraré dónde parquear.”',
    avatarId: 'testimonial-3',
  },
  {
    name: 'Carlos R.',
    role: 'Usuario Frecuente',
    quote: '“Saber todas las tarifas de la zona me permite elegir siempre la opción más económica, que al final del día es lo que más me importa para cuidar mi bolsillo.”',
    avatarId: 'testimonial-2',
  },
  {
    name: 'Dario Duarte',
    role: 'Dueño de Parqueadero',
    quote: '“Como dueño de un parqueadero pequeño, nunca he podido competir con las grandes cadenas. Necesitamos un espacio justo donde todos tengamos la misma visibilidad.”',
    avatarId: 'testimonial-1',
  },
  {
    name: 'Ana Gutiérrez',
    role: 'Conductora en la ciudad',
    quote: '“Una app que centralice todo, nos dé visibilidad a los pequeños parqueaderos y facilite la vida a los conductores, sería una solución asombrosa para nuestra ciudad.”',
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
            Validaciones
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Escuchamos a nuestros futuros usuarios para crear la mejor solución.
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {validations.map((validation, index) => {
                const avatar = imagePlaceholders.find(p => p.id === validation.avatarId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between bg-muted/40 border-0 shadow-lg">
                        <CardContent className="pt-6 flex-grow">
                          <blockquote className="text-foreground italic">"{validation.quote}"</blockquote>
                        </CardContent>
                        <div className="flex items-center gap-4 p-6 bg-muted/60 rounded-b-lg mt-auto">
                          {avatar && (
                            <Image
                              src={avatar.imageUrl}
                              alt={`Avatar de ${validation.name}`}
                              width={48}
                              height={48}
                              className="rounded-full"
                              data-ai-hint={avatar.imageHint}
                            />
                          )}
                          <div>
                            <p className="font-bold font-headline text-primary">{validation.name}</p>
                            <p className="text-sm text-muted-foreground">{validation.role}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </AnimationWrapper>
      </div>
    </section>
  );
}
