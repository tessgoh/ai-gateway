import GNB from '../components/GNB';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import AIInsights from '../components/AIInsights';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with GNB */}
      <div className="relative w-full">
        {/* Content */}
        <div className="relative">
          <GNB />
          <Hero />
        </div>
      </div>

      {/* Problems Section */}
      <Problems />

      {/* Solution Section */}
      <Solution />

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      <Benefits />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Banner Section */}
      <CTABanner />

      {/* AI Insights Section */}
      <AIInsights />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
