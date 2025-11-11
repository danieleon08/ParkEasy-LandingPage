import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ProblemSection from '@/components/landing/problem-section';
import SolutionSection from '@/components/landing/solution-section';
import FeaturesSection from '@/components/landing/features-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import DownloadSection from '@/components/landing/download-section';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
