
import React from 'react';
import { AlertTriangle, Leaf, BarChart, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-eco-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">About EcoSynth Nexus</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Empowering innovators to develop AI solutions that address the urgent challenges of biodiversity loss and ecosystem collapse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="mb-6 text-eco-green-dark">The Biodiversity Crisis</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-eco-green-medium/10 p-3 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-eco-green-dark" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Accelerating Extinction Rates</h4>
                  <p className="text-gray-700">
                    Species are disappearing 1,000 times faster than natural background rates, with up to 1 million species at risk of extinction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-eco-green-medium/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-eco-green-dark" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ecosystem Collapse</h4>
                  <p className="text-gray-700">
                    75% of land environments and 66% of marine environments have been significantly altered by human actions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-eco-green-medium/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-eco-green-dark" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Climate Feedback Loops</h4>
                  <p className="text-gray-700">
                    Biodiversity loss accelerates climate change, creating dangerous feedback loops that further threaten Earth's life-support systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Wildlife in natural habitat" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <h4 className="text-white text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-white/90">
                  To catalyze breakthrough technologies that enable the monitoring, analysis, and restoration of biodiversity at unprecedented scales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-eco-green-dark text-white p-8 md:p-12 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Leaf className="h-12 w-12 mx-auto mb-4 text-eco-green-light animate-leaf-sway" />
              <h4 className="text-xl font-bold mb-2 text-eco-green-light">Identify</h4>
              <p>Develop AI systems that can identify, monitor, and track biodiversity in real-time across diverse ecosystems.</p>
            </div>
            
            <div>
              <Leaf className="h-12 w-12 mx-auto mb-4 text-eco-green-light animate-leaf-sway" />
              <h4 className="text-xl font-bold mb-2 text-eco-green-light">Analyze</h4>
              <p>Create tools that analyze ecological data to provide actionable insights for conservation and restoration efforts.</p>
            </div>
            
            <div>
              <Leaf className="h-12 w-12 mx-auto mb-4 text-eco-green-light animate-leaf-sway" />
              <h4 className="text-xl font-bold mb-2 text-eco-green-light">Restore</h4>
              <p>Build systems that accelerate ecosystem restoration through data-driven recommendations and autonomous interventions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
