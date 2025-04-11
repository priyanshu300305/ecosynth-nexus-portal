
import React from 'react';
import { ExternalLink } from 'lucide-react';

type Tool = {
  name: string;
  description: string;
  logo: string;
  url: string;
  category: 'AI' | 'GIS' | 'Data' | 'Cloud';
};

const Tools = () => {
  const tools: Tool[] = [
    {
      name: 'PyTorch',
      description: 'Open source machine learning framework for computer vision and NLP',
      logo: 'https://pytorch.org/assets/images/pytorch-logo.png',
      url: 'https://pytorch.org/',
      category: 'AI'
    },
    {
      name: 'TensorFlow',
      description: 'End-to-end open source platform for machine learning',
      logo: 'https://www.tensorflow.org/images/tf_logo_social.png',
      url: 'https://www.tensorflow.org/',
      category: 'AI'
    },
    {
      name: 'OpenCV',
      description: 'Open source computer vision and machine learning library',
      logo: 'https://opencv.org/wp-content/uploads/2022/05/logo.png',
      url: 'https://opencv.org/',
      category: 'AI'
    },
    {
      name: 'Google Earth Engine',
      description: 'Platform for scientific analysis and visualization of geospatial datasets',
      logo: 'https://earthengine.google.com/static/images/earth-engine-logo.png',
      url: 'https://earthengine.google.com/',
      category: 'GIS'
    },
    {
      name: 'SentinelHub',
      description: 'Easy access to satellite imagery and derived products',
      logo: 'https://www.sentinel-hub.com/img/sentinel-hub-logo.svg',
      url: 'https://www.sentinel-hub.com/',
      category: 'GIS'
    },
    {
      name: 'MODIS',
      description: 'Moderate Resolution Imaging Spectroradiometer data',
      logo: 'https://modis.gsfc.nasa.gov/images/modis_logo_72dpi_trans.png',
      url: 'https://modis.gsfc.nasa.gov/',
      category: 'Data'
    },
    {
      name: 'GBIF',
      description: 'Free and open access to biodiversity data',
      logo: 'https://www.gbif.org/img/logo.svg',
      url: 'https://www.gbif.org/',
      category: 'Data'
    },
    {
      name: 'AWS',
      description: 'Cloud computing services for AI and geospatial applications',
      logo: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png',
      url: 'https://aws.amazon.com/',
      category: 'Cloud'
    }
  ];

  const categories = ['AI', 'GIS', 'Data', 'Cloud'];

  return (
    <section id="tools" className="section-padding bg-eco-beige/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Tools & APIs</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Leverage these powerful tools and APIs to build your EcoSynth Nexus solutions.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-8 text-center text-eco-green-dark">{category} Tools</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools
                .filter((tool) => tool.category === category)
                .map((tool) => (
                  <a 
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eco-card hover-scale flex flex-col justify-between h-full"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 flex items-center justify-center mb-4">
                        <img 
                          src={tool.logo} 
                          alt={`${tool.name} logo`}
                          className="max-h-16 max-w-full"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-eco-green-dark">{tool.name}</h4>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="text-eco-blue flex items-center justify-center">
                        <span>Documentation</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
