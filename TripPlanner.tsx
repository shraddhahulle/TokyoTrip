
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TripPlanner = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState("");
  const [interests, setInterests] = useState("");
  const [isPlanning, setIsPlanning] = useState(false);
  const [isSearchingFlights, setIsSearchingFlights] = useState(false);

  const handlePlanTrip = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate || !travelers) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsPlanning(true);
    toast({
      title: "Trip planning initiated!",
      description: "We're creating your personalized Tokyo experience.",
    });
    
    // After 1.5 seconds, navigate to the itinerary page
    setTimeout(() => {
      navigate('/itinerary');
      setIsPlanning(false);
    }, 1500);
  };
  
  const handleFlightSearch = () => {
    if (!startDate || !endDate) {
      toast({
        title: "Missing dates",
        description: "Please select your travel dates first",
        variant: "destructive",
      });
      return;
    }
    
    setIsSearchingFlights(true);
    toast({
      title: "Searching for flights",
      description: "Finding the best flight options for your dates",
    });
    
    // After 1.5 seconds, navigate to the flights page
    setTimeout(() => {
      navigate('/flights');
      setIsSearchingFlights(false);
    }, 1500);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Plan Your Tokyo Adventure</h2>
          <p className="text-gray-600">
            Customize your perfect trip to Tokyo with our easy-to-use planner. Select your dates, 
            interests, and preferences to get started.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
            <CardDescription>
              Enter your travel details to start planning your Tokyo trip
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlanTrip}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input 
                      id="start-date"
                      type="date"
                      className="pl-10"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input 
                      id="end-date" 
                      type="date"
                      className="pl-10"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger id="travelers">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 - Solo Traveler</SelectItem>
                      <SelectItem value="2">2 - Couple</SelectItem>
                      <SelectItem value="3-4">3-4 - Small Group</SelectItem>
                      <SelectItem value="5+">5+ - Large Group</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interests">Main Interests</Label>
                  <Select value={interests} onValueChange={setInterests}>
                    <SelectTrigger id="interests">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sightseeing">Sightseeing</SelectItem>
                      <SelectItem value="food">Food & Culinary</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="culture">Culture & History</SelectItem>
                      <SelectItem value="nature">Nature & Parks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-6">
                <Label htmlFor="destination">Destination</Label>
                <Input id="destination" value="Tokyo, Japan" disabled className="bg-gray-50" />
                <p className="text-sm text-gray-500 mt-1">Exploring the vibrant capital of Japan</p>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="w-full sm:w-auto flex-1 bg-tokyo-red hover:bg-tokyo-red/90"
              onClick={handlePlanTrip}
              disabled={isPlanning}
            >
              {isPlanning ? "Planning..." : "Start Planning"}
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto flex-1"
              onClick={handleFlightSearch}
              disabled={isSearchingFlights}
            >
              <Plane className="mr-2 h-4 w-4" /> {isSearchingFlights ? "Searching..." : "Search Flights"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TripPlanner;
