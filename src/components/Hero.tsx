
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="h-12 w-12 text-eco-green-light mb-6 mx-auto animate-leaf-sway" />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AI for Earth's <span className="text-eco-green-light">Regeneration</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white">
            Harnessing artificial intelligence to restore biodiversity and combat the climate crisis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary text-lg group"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join The Challenge
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Climate Crisis</h3>
              <p className="text-white/80">Urgent action needed to reverse biodiversity loss and ecosystem collapse.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">AI Solutions</h3>
              <p className="text-white/80">Leveraging cutting-edge technology to monitor, analyze, and restore ecosystems.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Global Impact</h3>
              <p className="text-white/80">Creating scalable solutions with measurable effects on biodiversity recovery.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
