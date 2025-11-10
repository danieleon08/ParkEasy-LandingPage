import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimationWrapper from './animation-wrapper';

const AppStoreIcon = () => (
  <svg className="w-6 h-6 mr-2 fill-current" viewBox="0 0 32 32">
    <path d="M20.623,13.257c0.01-0.01,0.02-0.01,0.02-0.02c0.01-0.02,0-0.04-0.02-0.06c-0.12-0.1-0.26-0.16-0.4-0.16 c-0.15,0-0.31,0.06-0.42,0.18c-1.2,1.2-1.92,2.83-1.88,4.55c0.04,1.6,0.83,3.12,1.96,4.14c0.11,0.1,0.26,0.16,0.4,0.16 c0.15,0,0.3-0.06,0.41-0.17c0.01-0.01,0.02-0.02,0.02-0.03c0.01-0.02,0-0.04-0.02-0.06c-0.1-0.1-0.23-0.15-0.36-0.15 c-0.13,0-0.26,0.05-0.35,0.14c-0.92,0.85-1.5,1.99-1.53,3.2c0.32-0.01,0.63-0.06,0.95-0.16c1.13-0.34,2.23-1.02,3.1-1.99 c0.73-0.81,1.23-1.8,1.4-2.86C22.613,15.827,21.843,14.337,20.623,13.257z M18.173,7.427c-0.78-0.95-1.38-2.12-1.63-3.32 c-0.03-0.15-0.15-0.27-0.3-0.29c-0.01,0-0.02,0-0.03,0c-0.15,0-0.28,0.1-0.33,0.25c-0.74,2.02-2.1,4.24-3.92,5.5 c-0.13,0.09-0.19,0.25-0.16,0.41c0.03,0.16,0.17,0.27,0.33,0.27c0.03,0,0.06,0,0.09-0.01c1.88-0.5,3.62-1.74,4.56-3.41 C17.003,6.817,17.433,6.297,18.173,7.427z" />
  </svg>
);

const GooglePlayIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 20.4V3.6C3 3.268 3.268 3 3.6 3H3.74L15.28 12L3.74 21H3.6C3.268 21 3 20.732 3 20.4zM4.532 4.5L13.623 12L4.532 19.5V4.5zM16.591 14.25L19.429 12L16.591 9.75L15.84 10.313L17.58 12L15.84 13.687L16.591 14.25z" />
    </svg>
);


export default function DownloadSection() {
  const phoneImage = PlaceHolderImages.find(p => p.id === 'download-app-phone');

  return (
    <section id="descarga" className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimationWrapper>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
                Descarga la App y Transforma tu Manera de Parquear
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Disponible para iOS y Android. Empieza a disfrutar de la ciudad sin preocupaciones.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-200">
                  <AppStoreIcon />
                  App Store
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-200">
                  <GooglePlayIcon />
                  Google Play
                </Button>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper delay="200ms" className="flex justify-center">
            {phoneImage && (
              <Image
                src={phoneImage.imageUrl}
                alt={phoneImage.description}
                width={400}
                height={800}
                className="max-w-[250px] lg:max-w-xs"
                data-ai-hint={phoneImage.imageHint}
              />
            )}
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
