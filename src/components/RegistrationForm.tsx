
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  teamName: string;
  track: string;
  skills: string;
  projectDescription: string;
};

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    teamName: '',
    track: '',
    skills: '',
    projectDescription: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, track: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for the EcoSynth Nexus Challenge.",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-eco-green-medium" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-eco-green-dark">Registration Complete!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for registering for the EcoSynth Nexus Challenge. We'll be in touch soon with more details.
          </p>
          <Button 
            className="btn-primary"
            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section id="registration" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Register for the Challenge</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Join the global community of innovators working to restore Earth's biodiversity through AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Challenge Registration</CardTitle>
              <CardDescription>
                Fill out the form below to register for the EcoSynth Nexus Challenge. Teams or individuals are welcome.
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamName">Team Name</Label>
                    <Input
                      id="teamName"
                      name="teamName"
                      placeholder="Your team name"
                      required
                      value={formData.teamName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="track">Primary Challenge Track</Label>
                    <Select onValueChange={handleSelectChange} value={formData.track}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a track" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plant-eye">Track 1: Plant Eye</SelectItem>
                        <SelectItem value="ecomapper">Track 2: EcoMapper</SelectItem>
                        <SelectItem value="ai-forester">Track 3: AI Forester</SelectItem>
                        <SelectItem value="greenforce">Track 4: GreenForce</SelectItem>
                        <SelectItem value="ecosynth-os">Track 5: EcoSynth OS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="skills">Your Skills</Label>
                  <Input
                    id="skills"
                    name="skills"
                    placeholder="e.g., Machine Learning, Conservation Biology, GIS, Frontend Development"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Idea (Optional)</Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Briefly describe your project idea if you have one"
                    rows={5}
                    value={formData.projectDescription}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Register Now'}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <div className="mt-8 bg-eco-green-light/10 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-eco-green-dark">Registration Benefits</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <div className="bg-eco-green-light/20 p-1 rounded-full mr-3">
                  <CheckCircle className="h-4 w-4 text-eco-green-dark" />
                </div>
                Access to exclusive workshops and mentoring sessions
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-eco-green-light/20 p-1 rounded-full mr-3">
                  <CheckCircle className="h-4 w-4 text-eco-green-dark" />
                </div>
                Early access to partner APIs and datasets
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-eco-green-light/20 p-1 rounded-full mr-3">
                  <CheckCircle className="h-4 w-4 text-eco-green-dark" />
                </div>
                Connect with a global community of eco-tech innovators
              </li>
              <li className="flex items-center text-gray-700">
                <div className="bg-eco-green-light/20 p-1 rounded-full mr-3">
                  <CheckCircle className="h-4 w-4 text-eco-green-dark" />
                </div>
                Potential for funding and partnerships beyond the challenge
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
