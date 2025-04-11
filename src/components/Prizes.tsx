
import React from 'react';
import { Award, DollarSign, Briefcase, Handshake, GraduationCap } from 'lucide-react';

const Prizes = () => {
  return (
    <section id="prizes" className="section-padding bg-eco-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Prizes & Opportunities</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Winners will receive funding, partnerships, and opportunities to further develop their solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale">
            <div className="bg-eco-gradient p-8 text-white">
              <Award className="h-16 w-16 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Grand Prize</h3>
              <p className="text-lg opacity-90">For the most innovative and impactful solution</p>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="h-6 w-6 text-eco-green-dark mr-3" />
                <div>
                  <h4 className="text-xl font-semibold">$5,000 Grant</h4>
                  <p className="text-gray-600">Cash prize to further develop your solution</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-eco-green-dark mr-3" />
                <div>
                  <h4 className="text-xl font-semibold">Drone Seed Dispersal Kit</h4>
                  <p className="text-gray-600">Cutting-edge technology for reforestation efforts</p>
                </div>
              </div>
              <div className="flex items-center">
                <Handshake className="h-6 w-6 text-eco-green-dark mr-3" />
                <div>
                  <h4 className="text-xl font-semibold">Implementation Partnership</h4>
                  <p className="text-gray-600">Work with conservation NGOs to deploy your solution</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale">
            <div className="bg-eco-teal p-8 text-white">
              <Award className="h-16 w-16 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Track Winners</h3>
              <p className="text-lg opacity-90">One winner for each challenge track</p>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="h-6 w-6 text-eco-green-dark mr-3" />
                <div>
                  <h4 className="text-xl font-semibold">$1,000 Grant</h4>
                  <p className="text-gray-600">Development funding for each track winner</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-eco-green-dark mr-3" />
                <div>
                  <h4 className="text-xl font-semibold">Internship Opportunities</h4>
                  <p className="text-gray-600">With leading conservation tech organizations</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-eco-green-dark mr-3" />
                <div>
                  <h4 className="text-xl font-semibold">Mentorship Program</h4>
                  <p className="text-gray-600">6-month guidance from industry experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-eco-green-dark">Additional Opportunities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-eco-green-light/10 p-4 rounded-full inline-flex mx-auto mb-4">
                <Handshake className="h-8 w-8 text-eco-green-dark" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">NGO Partnerships</h4>
              <p className="text-gray-700">Opportunity to collaborate with conservation organizations to implement your solution in the field.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-eco-green-light/10 p-4 rounded-full inline-flex mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-eco-green-dark" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Research Collaborations</h4>
              <p className="text-gray-700">Connect with academic institutions for joint research projects and publications.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-eco-green-light/10 p-4 rounded-full inline-flex mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-eco-green-dark" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Demo at Global Summit</h4>
              <p className="text-gray-700">Selected projects will be featured at the annual EcoTech Global Summit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
