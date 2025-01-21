import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

const Summary = () => {
  const { toast } = useToast();

  const handleCopy = (platform: string) => {
    toast({
      title: "Copying to " + platform,
      description: "Your screenshots are being exported...",
    });
  };

  const exportPlatforms = [
    { name: 'Canva', icon: Copy },
    { name: 'Figma', icon: Copy },
    { name: 'Webflow', icon: Copy },
    { name: 'Capcut', icon: Copy },
  ];

  const userFlowSteps = [
    'Landing on the product page for "Pokémon Super Electric Breaker Booster Box SV8 (JP)"',
    'Viewing product images',
    'Reading product description',
    'Checking price and payment options',
    'Adding the product to the cart',
    'Viewing "You may also like" section',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Summary</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Review your app screenshots and export them to your preferred platform
          </p>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Selected Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="retro-card">
              <h3 className="text-xl font-bold mb-2">App Details</h3>
              <p className="text-gray-600">App Store ID: 123456789</p>
            </Card>
            <Card className="retro-card">
              <h3 className="text-xl font-bold mb-2">Context</h3>
              <p className="text-gray-600">Device: iPhone 14</p>
              <p className="text-gray-600">Language: English</p>
            </Card>
            <Card className="retro-card">
              <h3 className="text-xl font-bold mb-2">Workflow</h3>
              <p className="text-gray-600">Sign up for free trial</p>
            </Card>
            <Card className="retro-card">
              <h3 className="text-xl font-bold mb-2">Authentication</h3>
              <p className="text-gray-600">Username: ******</p>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Walkthrough Recording</h2>
          <div className="relative">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Screen Recording</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Screenshot 1</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Screenshot 2</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-24 w-24" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-24 w-24" />
            </Carousel>
          </div>
          
          <div className="max-w-2xl mx-auto mt-8">
            <h3 className="text-xl font-bold mb-4 text-center">User Flow Steps</h3>
            <div className="space-y-4">
              {userFlowSteps.map((step, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-accent transition-colors"
                >
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Export Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {exportPlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleCopy(platform.name)}
                className="retro-button flex items-center justify-center gap-2"
              >
                <platform.icon className="w-5 h-5" />
                {platform.name}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Summary;