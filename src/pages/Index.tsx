
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <Services />
        <Testimonials />
        <section id="projects">
          <Pricing />
        </section>
        <section id="contact">
          {/* Contact section placeholder */}
          <div className="w-full py-12 md:py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to start your next project? Let's discuss how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3 rounded-md font-medium">
                  Start Project
                </button>
                <button className="border border-border text-foreground hover:bg-accent px-8 py-3 rounded-md font-medium">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
