import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { Copy, Download, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Summary = () => {
  const { toast } = useToast();

  const handleCopy = (platform: string) => {
    toast({
      title: "Copying to " + platform,
      description: "Your screenshots are being exported...",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Downloading Screenshots",
      description: "Your screenshots are being prepared for download...",
    });
  };

  const userFlowSteps = [
    'Landing on the Viki profile page for user "@thinkgreenhair"',
    'Viewing user watchlist and collections',
    'Checking profile information and join date',
    'Viewing followed shows and recommendations',
    'Accessing profile settings and preferences',
    'Navigating through different language versions of the profile',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold animate-fade-in">Summary</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Review your app screenshots and export them to your preferred platform
          </p>
        </div>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Walkthrough Recording</h2>
          <div className="relative">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <div className="w-full h-full bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                      <img 
                        src="/lovable-uploads/36412367-5715-49e3-afe8-83632cb01dca.png"
                        alt="Edit Profile Screen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <div className="w-full h-full bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                      <img 
                        src="/lovable-uploads/5ba1f6f2-29b6-4dd1-83f3-af507f8df29d.png"
                        alt="Profile Overview English"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </AspectRatio>
                </CarouselItem>
                <CarouselItem>
                  <AspectRatio ratio={16/9}>
                    <div className="w-full h-full bg-white border-2 border-black rounded-lg overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                      <img 
                        src="/lovable-uploads/a28cf632-ef27-469d-9d3e-4b8fbab1f60e.png"
                        alt="Profile Overview Chinese"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </AspectRatio>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-24 w-24" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-24 w-24" />
            </Carousel>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Export Options</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <button
              onClick={handleDownload}
              className="retro-button flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="retro-button flex items-center justify-center gap-2 w-full md:w-auto">
                <Copy className="w-5 h-5" />
                Copy to
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {['Canva', 'Figma', 'Webflow', 'Capcut'].map((platform) => (
                  <DropdownMenuItem
                    key={platform}
                    onClick={() => handleCopy(platform)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{platform}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
          
        <div className="max-w-2xl mx-auto mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">User Flow Steps</h3>
          <div className="space-y-4">
            {userFlowSteps.map((step, index) => (
              <div 
                key={index}
                className="p-4 bg-white rounded-lg shadow-sm border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(255,192,0,1)] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/doc-comparison">
            <button className="retro-button">
              Compare with Current Implementation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;