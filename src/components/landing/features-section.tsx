import { Map, CalendarCheck, Star, Users, Bolt, Building2 } from 'lucide-react';
import AnimationWrapper from './animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Map className="h-8 w-8 text-accent" />,
    title: 'Búsqueda en Tiempo Real',
    description: 'Encuentra cupos disponibles cerca de ti o de tu destino con nuestro mapa interactivo y actualizado.',
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-accent" />,
    title: 'Reservas Anticipadas',
    description: 'Asegura tu puesto antes de salir de casa. Ideal para eventos, citas importantes o zonas de alta demanda.',
  },
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: 'Calificaciones y Reseñas',
    description: 'Toma decisiones informadas con las opiniones y fotos de otros usuarios de la comunidad ParkEasy.',
  },
  {
    icon: <Bolt className="h-8 w-8 text-accent" />,
    title: 'Servicios Adicionales',
    description: 'Filtra parqueaderos con servicios como carga para vehículos eléctricos, valet parking o lavado de autos.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Para Conductores',
    description: 'Una experiencia diseñada para hacer tu vida más fácil, ahorrándote tiempo, dinero y estrés.',
  },
  {
    icon: <Building2 className="h-8 w-8 text-accent" />,
    title: 'Para Parqueaderos',
    description: 'Digitaliza tu negocio, aumenta tu visibilidad y optimiza la ocupación de tus espacios. ¡Contáctanos!',
  },
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-primary">
            Funcionalidades Principales
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Todo lo que necesitas para una experiencia de parqueo sin complicaciones.
          </p>
        </AnimationWrapper>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimationWrapper key={feature.title} delay={`${(index % 3) * 150}ms`}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {feature.icon}
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
