
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface ActivityCardProps {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  location: string;
  category: string;
  rating: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  name,
  description,
  duration,
  price,
  image,
  location,
  category,
  rating
}) => {
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToItinerary = () => {
    setIsAdding(true);
    
    toast({
      title: "Adding to itinerary",
      description: `Adding ${name} to your Tokyo adventure...`,
    });
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      
      toast({
        title: "Added to itinerary",
        description: `${name} has been added to your itinerary. You can view it in your schedule.`,
      });
      
      // Reset the added state after some time to allow adding again
      setTimeout(() => {
        setIsAdded(false);
      }, 5000);
    }, 1000);
  };

  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-1">
          <CardTitle className="text-lg">{name}</CardTitle>
          <span className="text-sm font-medium text-white bg-tokyo-red px-2 py-0.5 rounded-full">
            {price}
          </span>
        </div>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 line-clamp-3 mb-2">
          {description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {duration}
          </div>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
            {category}
          </span>
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`h-3 w-3 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs ml-2 text-gray-600">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-tokyo-indigo hover:bg-tokyo-indigo/90'}`}
          onClick={handleAddToItinerary}
          disabled={isAdding || isAdded}
        >
          {isAdding ? (
            "Adding..."
          ) : isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Added to Itinerary
            </>
          ) : (
            "Add to Itinerary"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivityCard;
