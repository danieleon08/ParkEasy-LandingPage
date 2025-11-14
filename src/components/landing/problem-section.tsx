import { Clock, TrafficCone, Frown } from 'lucide-react';
import AnimationWrapper from './animation-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const problems = [
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: 'Tiempo Perdido',
    description: 'Pasas hasta 30 minutos al día buscando un lugar seguro para parquear tu vehículo.',
  },
  {
    icon: <TrafficCone className="h-12 w-12 text-primary" />,
    title: 'Falta de información Centralizada',
    description: 'No hay una fuente única de información sobre los parqueaderos disponibles en la ciudad.',
  },
  {
    icon: <Frown className="h-12 w-12 text-primary" />,
    title: 'Estrés e Incertidumbre',
    description: 'La frustración de no saber dónde parquear, cuánto costará o si tu vehículo estará seguro.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="py-20 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl text-primary">
            El Desafío de Parquear en la Ciudad
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Conocemos la frustración. Por eso creamos una solución.
          </p>
        </AnimationWrapper>
        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <AnimationWrapper key={problem.title} delay={`${index * 150}ms`}>
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardHeader>
                  <div className="mx-auto bg-secondary/20 rounded-full p-4 w-fit">
                    {problem.icon}
                  </div>
                  <CardTitle className="mt-4 font-headline text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
