
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleExploreClick = () => {
    toast({
      title: "Exploring Activities",
      description: "Discovering Tokyo's best attractions and experiences.",
    });
  };

  const handleItineraryClick = () => {
    toast({
      title: "Viewing Sample Itinerary",
      description: "Check out our recommended Tokyo experience.",
    });
  };

  return (
    <div className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
          alt="Tokyo Skyline" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Discover <span className="text-tokyo-cherry">Tokyo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore Japan's vibrant capital with our personalized trip planner. 
            From ancient temples to futuristic skyscrapers, create unforgettable memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-tokyo-red hover:bg-tokyo-red/90 text-white"
              onClick={handleExploreClick}
            >
              <Link to="/activities">
                Explore Activities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={handleItineraryClick}
            >
              <Link to="/itinerary">
                View Sample Itinerary
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-tokyo-cherry hover:bg-tokyo-cherry/90 text-white"
            >
              <Link to="/flights">
                <Plane className="mr-2 h-4 w-4" /> Find Flights
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center">
            <p className="text-white text-sm mr-4 jp-text">東京へようこそ</p>
            <p className="text-white text-sm">Welcome to Tokyo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
