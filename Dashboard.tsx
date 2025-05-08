
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { userData } from '@/lib/data';
import { Calendar, MapPin, ArrowRight, Plane, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { name, upcomingTrip } = userData;
  const { toast } = useToast();

  const handleModifyTrip = () => {
    toast({
      title: "Modify Trip",
      description: "Opening trip modification options...",
    });
  };

  const handleExploreActivities = () => {
    toast({
      title: "Exploring Activities",
      description: "Discovering Tokyo's best attractions and experiences.",
    });
  };

  const handleViewFlights = () => {
    toast({
      title: "Viewing Flight Details",
      description: "Checking your flight information and options.",
    });
  };

  const handlePlanTrip = () => {
    toast({
      title: "Plan Your Trip",
      description: "Let's start planning your Tokyo adventure!",
    });
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Hello{name ? `, ${name}` : ''}! <span className="jp-text text-tokyo-red">こんにちは</span>
            </h2>
            <p className="text-gray-600">Your Tokyo adventure awaits</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              asChild 
              className="bg-tokyo-red hover:bg-tokyo-red/90"
              onClick={handleExploreActivities}
            >
              <Link to="/activities">
                Explore More Activities
              </Link>
            </Button>
          </div>
        </div>

        {upcomingTrip ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trip Overview */}
            <Card className="col-span-1 md:col-span-3 shadow-md border-tokyo-cherry/20">
              <CardHeader className="bg-gradient-to-r from-tokyo-indigo to-tokyo-indigo/80 text-white">
                <CardTitle className="flex items-center justify-between">
                  Upcoming Trip to {upcomingTrip.destination.split(',')[0]}
                  <span className="text-sm font-normal bg-white/20 px-3 py-1 rounded-full">
                    {upcomingTrip.dates}
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-100 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {upcomingTrip.destination}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Flight Details */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-3">Flight Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Airline:</span>
                        <span>{upcomingTrip.flight.airline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Flight:</span>
                        <span>{upcomingTrip.flight.flightNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Departure:</span>
                        <span>{upcomingTrip.flight.departure}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Arrival:</span>
                        <span>{upcomingTrip.flight.arrival}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span>{upcomingTrip.flight.duration}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={handleViewFlights}
                      asChild
                    >
                      <Link to="/flights">
                        <Plane className="mr-2 h-4 w-4" /> View Flight Options
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Accommodation */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={upcomingTrip.hotel.image} 
                        alt={upcomingTrip.hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{upcomingTrip.hotel.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`h-4 w-4 ${i < upcomingTrip.hotel.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{upcomingTrip.hotel.address}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                      >
                        <Edit className="mr-2 h-4 w-4" /> Change Hotel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={handleModifyTrip}
                >
                  Modify Trip
                </Button>
                <Button 
                  asChild 
                  className="bg-tokyo-red hover:bg-tokyo-red/90"
                >
                  <Link to="/itinerary">
                    View Itinerary <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>No Upcoming Trips</CardTitle>
              <CardDescription>
                You don't have any trips planned yet. Start planning your Tokyo adventure!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center py-8">
                <Calendar className="h-16 w-16 text-gray-300" />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                className="w-full bg-tokyo-red hover:bg-tokyo-red/90"
                onClick={handlePlanTrip}
              >
                <Link to="/">
                  Plan Your Trip
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
