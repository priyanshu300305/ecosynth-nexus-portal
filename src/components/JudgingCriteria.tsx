
import React from 'react';
import { 
  Lightbulb, TrendingUp, Zap, Users, LineChart 
} from 'lucide-react';

const JudgingCriteria = () => {
  const criteria = [
    {
      title: 'Innovation',
      description: 'Originality of approach and creative application of AI to solve biodiversity challenges.',
      icon: <Lightbulb className="h-12 w-12 text-eco-green-medium" />,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Scalability',
      description: 'Potential to scale the solution to different ecosystems and regions around the world.',
      icon: <TrendingUp className="h-12 w-12 text-eco-green-medium" />,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Impact',
      description: 'Measurable conservation impact and potential for real-world biodiversity benefits.',
      icon: <LineChart className="h-12 w-12 text-eco-green-medium" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Tech Depth',
      description: 'Technical sophistication, implementation quality, and technological innovation.',
      icon: <Zap className="h-12 w-12 text-eco-green-medium" />,
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Community Engagement',
      description: 'Mechanisms for involving local communities and incorporating indigenous knowledge.',
      icon: <Users className="h-12 w-12 text-eco-green-medium" />,
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <section id="judging" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Judging Criteria</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            All submissions will be evaluated against these five key criteria by our panel of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 border ${criterion.color} hover-scale`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {criterion.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-eco-green-dark">{criterion.title}</h3>
                <p className="text-gray-700">{criterion.description}</p>
                
                <div className="w-full bg-gray-200 h-2 rounded-full mt-6">
                  <div className="bg-eco-green-medium h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">25% of total score</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-eco-green-dark">Judging Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-eco-green-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-eco-green-dark">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Initial Screening</h4>
              <p className="text-gray-700">All submissions reviewed by technical committee for eligibility and completeness.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-eco-green-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-eco-green-dark">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Expert Evaluation</h4>
              <p className="text-gray-700">Expert panel scores each project against the five criteria, with detailed feedback.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-eco-green-light/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-eco-green-dark">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">Final Demo Day</h4>
              <p className="text-gray-700">Finalists present live demos to judges, partners, and the community to determine winners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
