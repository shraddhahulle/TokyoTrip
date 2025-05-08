
import React from 'react';
import Navbar from '@/components/Navbar';
import ItineraryDay from '@/components/ItineraryDay';
import { sampleItinerary, userData } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Share, Plane } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';

const Itinerary = () => {
  const { toast } = useToast();
  
  const handleShare = () => {
    toast({
      title: "Share link copied!",
      description: "You can now share your Tokyo itinerary with friends.",
    });
  };

  const handleAddToCalendar = () => {
    toast({
      title: "Adding to Calendar",
      description: "Your itinerary is being added to your calendar.",
    });
  };

  const handleAddAnotherDay = () => {
    toast({
      title: "Adding Another Day",
      description: "Extending your itinerary with another day in Tokyo.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-tokyo-indigo text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your Tokyo Itinerary</h1>
                <p className="text-gray-200">{userData.upcomingTrip.dates}</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={handleAddToCalendar}
                >
                  <Calendar className="mr-2 h-4 w-4" /> Add to Calendar
                </Button>
                <Button 
                  className="bg-white text-tokyo-indigo hover:bg-white/90" 
                  onClick={handleShare}
                >
                  <Share className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Day by Day Schedule</h2>
              
              {sampleItinerary.map((day) => (
                <ItineraryDay
                  key={day.day}
                  day={day.day}
                  date={day.date}
                  activities={day.activities}
                />
              ))}
              
              <div className="mt-6 text-center">
                <Button 
                  className="bg-tokyo-red hover:bg-tokyo-red/90"
                  onClick={handleAddAnotherDay}
                >
                  Add Another Day
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Trip Summary</CardTitle>
                  <CardDescription>Overview of your Tokyo adventure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Destination</h3>
                      <p className="text-gray-600">{userData.upcomingTrip.destination}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Dates</h3>
                      <p className="text-gray-600">{userData.upcomingTrip.dates}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Accommodation</h3>
                      <p className="text-gray-600">{userData.upcomingTrip.hotel.name}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Activities</h3>
                      <p className="text-gray-600">{sampleItinerary.reduce((count, day) => count + day.activities.length, 0)} planned</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Flight</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Airline:</span>
                        <span>{userData.upcomingTrip.flight.airline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Flight:</span>
                        <span>{userData.upcomingTrip.flight.flightNumber}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2 w-full"
                        asChild
                      >
                        <Link to="/flights">
                          <Plane className="mr-2 h-4 w-4" /> View Flight Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Weather Forecast</CardTitle>
                  <CardDescription>What to expect during your stay</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className="text-gray-400 text-sm">Weather data will be available closer to your trip dates.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Suggested Activities</CardTitle>
                  <CardDescription>Based on your interests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Shibuya Crossing"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Shibuya Crossing</h3>
                      <p className="text-sm text-gray-500">World's busiest pedestrian crossing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1490761668535-35497c10b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                        alt="Harajuku"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Harajuku</h3>
                      <p className="text-sm text-gray-500">Fashion district & Takeshita Street</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button asChild variant="link" className="p-0 h-auto text-sm">
                      <Link to="/activities">
                        View more activities <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-tokyo-indigo text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TokyoTrip</h3>
              <p className="text-gray-300">
                Your personal guide to exploring Tokyo's wonders. Plan your perfect adventure with us.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/activities" className="text-gray-300 hover:text-white">Activities</Link></li>
                <li><Link to="/itinerary" className="text-gray-300 hover:text-white">Itinerary</Link></li>
                <li><Link to="/flights" className="text-gray-300 hover:text-white">Flights</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                Have questions? Contact our support team 24/7.
              </p>
              <p className="text-gray-300 mt-2">
                support@tokyotrip.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
            <p>© 2023 TokyoTrip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Itinerary;
