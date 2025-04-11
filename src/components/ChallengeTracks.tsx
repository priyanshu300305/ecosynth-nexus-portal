import React, { useState } from 'react';
import { 
  Eye, MapPin, TreePine, Users, Database, 
  ChevronDown, ChevronUp, ExternalLink 
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type ChallengeTrack = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bonusTasks: string[];
  resources: { name: string; url: string }[];
};

const ChallengeTracks = () => {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  const tracks: ChallengeTrack[] = [
    {
      id: 'plant-eye',
      title: 'Track 1: Plant Eye',
      description: 'Develop real-time species detection systems capable of identifying flora and fauna across diverse ecosystems. Focus on lightweight models that can run on edge devices with limited connectivity.',
      icon: <Eye className="h-10 w-10 text-eco-green-medium" />,
      bonusTasks: [
        'Implement offline detection capability',
        'Optimize for low-power devices',
        'Integrate with eBird or iNaturalist APIs',
        'Build transfer learning capabilities for new ecosystems'
      ],
      resources: [
        { name: 'PlantNet API', url: 'https://my.plantnet.org/' },
        { name: 'TensorFlow Lite', url: 'https://www.tensorflow.org/lite' },
        { name: 'iNaturalist Dataset', url: 'https://github.com/visipedia/inat_comp' }
      ]
    },
    {
      id: 'ecomapper',
      title: 'Track 2: EcoMapper',
      description: 'Create dynamic biodiversity dashboards that visualize ecological data across time and space. Enable stakeholders to track changes in biodiversity metrics and understand environmental trends.',
      icon: <MapPin className="h-10 w-10 text-eco-green-medium" />,
      bonusTasks: [
        'Implement predictive models for future scenarios',
        'Visualize climate change impacts on biodiversity',
        'Create alerts for sudden ecosystem changes',
        'Integrate multiple data sources for holistic views'
      ],
      resources: [
        { name: 'Google Earth Engine', url: 'https://earthengine.google.com/' },
        { name: 'Mapbox GL', url: 'https://docs.mapbox.com/mapbox-gl-js/' },
        { name: 'GBIF API', url: 'https://www.gbif.org/developer/summary' }
      ]
    },
    {
      id: 'ai-forester',
      title: 'Track 3: AI Forester',
      description: 'Build a reforestation recommendation engine that identifies optimal species, planting strategies, and maintenance protocols based on local conditions and climate projections.',
      icon: <TreePine className="h-10 w-10 text-eco-green-medium" />,
      bonusTasks: [
        'Incorporate indigenous knowledge and practices',
        'Model fire resistance and climate adaptability',
        'Optimize for biodiversity co-benefits',
        'Create maintenance schedules with minimal water usage'
      ],
      resources: [
        { name: 'FAO Reforestation Guidelines', url: 'https://www.fao.org/forestry/' },
        { name: 'WorldClim Data', url: 'https://www.worldclim.org/' },
        { name: 'Tree Species Database', url: 'https://www.globaltrees.org/' }
      ]
    },
    {
      id: 'greenforce',
      title: 'Track 4: GreenForce',
      description: 'Develop a citizen science platform with an incentive layer that encourages public participation in biodiversity monitoring, data collection, and conservation actions.',
      icon: <Users className="h-10 w-10 text-eco-green-medium" />,
      bonusTasks: [
        'Implement gamification elements to increase engagement',
        'Create verification mechanisms for data quality',
        'Build reputation systems for contributors',
        'Design educational components to enhance scientific literacy'
      ],
      resources: [
        { name: 'Zooniverse', url: 'https://www.zooniverse.org/' },
        { name: 'CitSci.org', url: 'https://www.citsci.org/' },
        { name: 'Open Data Kit', url: 'https://opendatakit.org/' }
      ]
    },
    {
      id: 'ecosynth-os',
      title: 'Track 5: EcoSynth OS',
      description: 'Build scalable and ethical infrastructure for biodiversity AI, focusing on data standards, model sharing, and privacy-preserving federated learning across organizations.',
      icon: <Database className="h-10 w-10 text-eco-green-medium" />,
      bonusTasks: [
        'Implement differential privacy for sensitive ecological data',
        'Create API standards for interoperable ecological tools',
        'Design data governance frameworks that respect indigenous data sovereignty',
        'Build transfer learning capabilities across ecosystems'
      ],
      resources: [
        { name: 'Darwin Core Standard', url: 'https://dwc.tdwg.org/' },
        { name: 'TensorFlow Federated', url: 'https://www.tensorflow.org/federated' },
        { name: 'FAIR Data Principles', url: 'https://www.go-fair.org/fair-principles/' }
      ]
    }
  ];

  const handleTrackClick = (trackId: string) => {
    setActiveTrack(activeTrack === trackId ? null : trackId);
  };

  return (
    <section id="tracks" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Challenge Tracks</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Choose one of our five innovative tracks designed to tackle different aspects of the biodiversity crisis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tracks.slice(0, 3).map((track) => (
            <div 
              key={track.id}
              className="eco-card hover-scale cursor-pointer"
              onClick={() => handleTrackClick(track.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-eco-green-light/10 p-4 rounded-full mb-4">
                  {track.icon}
                </div>
                <h3 className="mb-3 text-xl">{track.title.split(':')[1]}</h3>
                <p className="text-gray-700 mb-4">{track.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-eco-green-medium hover:text-eco-green-dark hover:bg-eco-green-light/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTrackClick(track.id);
                  }}
                >
                  {activeTrack === track.id ? (
                    <>Less Details <ChevronUp className="ml-1 h-4 w-4" /></>
                  ) : (
                    <>More Details <ChevronDown className="ml-1 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tracks.slice(3, 5).map((track) => (
            <div 
              key={track.id}
              className="eco-card hover-scale cursor-pointer"
              onClick={() => handleTrackClick(track.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-eco-green-light/10 p-4 rounded-full mb-4">
                  {track.icon}
                </div>
                <h3 className="mb-3 text-xl">{track.title.split(':')[1]}</h3>
                <p className="text-gray-700 mb-4">{track.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-eco-green-medium hover:text-eco-green-dark hover:bg-eco-green-light/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTrackClick(track.id);
                  }}
                >
                  {activeTrack === track.id ? (
                    <>Less Details <ChevronUp className="ml-1 h-4 w-4" /></>
                  ) : (
                    <>More Details <ChevronDown className="ml-1 h-4 w-4" /></>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {tracks.map((track) => (
              <AccordionItem key={track.id} value={track.id}>
                <AccordionTrigger className="text-xl font-semibold text-eco-green-dark hover:no-underline">
                  {track.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <h4 className="font-bold mb-3 text-eco-green-dark">Bonus Tasks:</h4>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {track.bonusTasks.map((task, index) => (
                        <li key={index} className="text-gray-700">{task}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold mb-3 text-eco-green-dark">Helpful Resources:</h4>
                    <ul className="space-y-2">
                      {track.resources.map((resource, index) => (
                        <li key={index}>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-eco-blue hover:underline flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {resource.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ChallengeTracks;
