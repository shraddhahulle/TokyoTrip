
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, ArrowRight, Info, Moon, Sun } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FlightInfo {
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  availableSeats: number;
  amenities?: string[];
  aircraftType?: string;
  layovers?: string[];
  id: string; // Add unique ID
}

const japanFlights: FlightInfo[] = [
  {
    id: "flight-jl001",
    airline: "Japan Airlines",
    flightNumber: "JL-001",
    departure: "JFK - 10:30 AM",
    arrival: "NRT - 2:45 PM (+1)",
    duration: "14h 15m",
    price: "$950",
    availableSeats: 24,
    amenities: ["Wi-Fi", "Personal TV", "USB charging", "Premium meals"],
    aircraftType: "Boeing 777-300ER"
  },
  {
    id: "flight-nh009",
    airline: "ANA",
    flightNumber: "NH-009",
    departure: "LAX - 1:20 PM",
    arrival: "HND - 5:30 PM (+1)",
    duration: "12h 10m",
    price: "$870",
    availableSeats: 18,
    amenities: ["Wi-Fi", "Personal TV", "Power outlets", "Japanese cuisine"],
    aircraftType: "Boeing 787-9 Dreamliner"
  },
  {
    id: "flight-ua837",
    airline: "United Airlines",
    flightNumber: "UA-837",
    departure: "SFO - 11:05 AM",
    arrival: "NRT - 3:25 PM (+1)",
    duration: "12h 20m",
    price: "$920",
    availableSeats: 9,
    amenities: ["Wi-Fi", "Entertainment system", "Power outlets"],
    aircraftType: "Boeing 777-200"
  },
  {
    id: "flight-sq012",
    airline: "Singapore Airlines",
    flightNumber: "SQ-012",
    departure: "JFK - 9:15 AM",
    arrival: "HND - 1:45 PM (+1)",
    duration: "14h 30m",
    price: "$1050",
    availableSeats: 15,
    amenities: ["Premium Wi-Fi", "18\" TV screens", "Gourmet dining", "Luxury amenities"],
    aircraftType: "Airbus A350-900",
    layovers: ["Singapore - 2h layover"]
  }
];

const JapanFlights = () => {
  const { toast } = useToast();
  const [selectedFlight, setSelectedFlight] = useState<FlightInfo | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookingFlight, setBookingFlight] = useState<string | null>(null);
  const [isDayFlight, setIsDayFlight] = useState(true);
  const [flightTime, setFlightTime] = useState<"day" | "night" | "all">("all");
  
  const handleBookFlight = (flight: FlightInfo) => {
    setBookingFlight(flight.id);
    
    toast({
      title: "Flight booking initiated",
      description: `You've selected ${flight.airline} flight ${flight.flightNumber}. Redirecting to checkout...`,
    });
    
    // Simulate booking process
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: `Your booking for ${flight.airline} flight ${flight.flightNumber} is confirmed. Check your email for details.`,
      });
      setBookingFlight(null);
    }, 2000);
  };

  const handleFlightDetails = (flight: FlightInfo) => {
    setSelectedFlight(flight);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Filter flights based on day/night preference
  const filteredFlights = flightTime === "all" 
    ? japanFlights 
    : japanFlights.filter(flight => {
        const isDepartureMorning = flight.departure.includes("AM");
        return flightTime === "day" ? isDepartureMorning : !isDepartureMorning;
      });

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Flights to Japan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a selection of non-stop flights to Tokyo's Narita (NRT) and Haneda (HND) airports.
            All flights include complimentary meals and entertainment.
          </p>
          
          <div className="flex justify-center items-center mt-6 gap-4">
            <span className="text-gray-600">Flight time preference:</span>
            <ToggleGroup type="single" value={flightTime} onValueChange={(value) => value && setFlightTime(value as "day" | "night" | "all")}>
              <ToggleGroupItem value="day" aria-label="Day flights">
                <Sun className="h-4 w-4 mr-1" />
                Day
              </ToggleGroupItem>
              <ToggleGroupItem value="all" aria-label="All flights">
                All
              </ToggleGroupItem>
              <ToggleGroupItem value="night" aria-label="Night flights">
                <Moon className="h-4 w-4 mr-1" />
                Night
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFlights.map((flight) => (
            <Card key={flight.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-tokyo-indigo to-tokyo-indigo/80 text-white flex flex-row justify-between items-center">
                <div>
                  <CardTitle className="flex items-center">
                    <Plane className="mr-2 h-5 w-5" /> {flight.airline}
                  </CardTitle>
                  <CardDescription className="text-gray-100">
                    {flight.flightNumber}
                  </CardDescription>
                </div>
                <span className="text-xl font-bold">{flight.price}</span>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-medium">{flight.departure}</p>
                  </div>
                  <div className="text-center hidden sm:block">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{flight.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-medium">{flight.arrival}</p>
                  </div>
                </div>
                <div className="text-center sm:hidden mb-2">
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{flight.duration}</p>
                </div>
                <div className="mt-2 bg-yellow-50 p-2 rounded-md text-amber-800 text-sm flex items-center">
                  <Info className="h-4 w-4 mr-1" />
                  {flight.availableSeats} seats remaining at this price
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => handleFlightDetails(flight)}
                >
                  View Details
                </Button>
                <Button 
                  className="bg-tokyo-red hover:bg-tokyo-red/90"
                  onClick={() => handleBookFlight(flight)}
                  disabled={bookingFlight !== null}
                  isLoading={bookingFlight === flight.id}
                >
                  {bookingFlight === flight.id ? "Processing..." : "Book Now"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Flight Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Flight Details</DialogTitle>
              <DialogDescription>
                Comprehensive information about your selected flight
              </DialogDescription>
            </DialogHeader>
            
            {selectedFlight && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h3 className="font-bold text-lg">{selectedFlight.airline}</h3>
                    <p className="text-gray-500">{selectedFlight.flightNumber}</p>
                  </div>
                  <span className="font-bold text-tokyo-red text-lg">{selectedFlight.price}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Departure</p>
                    <p className="font-medium">{selectedFlight.departure}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Arrival</p>
                    <p className="font-medium">{selectedFlight.arrival}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">{selectedFlight.duration}</p>
                </div>
                
                {selectedFlight.layovers && selectedFlight.layovers.length > 0 && (
                  <div>
                    <p className="text-gray-500">Layovers</p>
                    <ul className="list-disc list-inside">
                      {selectedFlight.layovers.map((layover, idx) => (
                        <li key={idx} className="font-medium">{layover}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <p className="text-gray-500">Aircraft</p>
                  <p className="font-medium">{selectedFlight.aircraftType || "Information not available"}</p>
                </div>
                
                <div>
                  <p className="text-gray-500">Amenities</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedFlight.amenities ? (
                      selectedFlight.amenities.map((amenity, idx) => (
                        <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {amenity}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">Information not available</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2">
              <Button variant="outline" onClick={closeDialog}>Close</Button>
              {selectedFlight && (
                <Button 
                  className="bg-tokyo-red hover:bg-tokyo-red/90"
                  onClick={() => {
                    closeDialog();
                    handleBookFlight(selectedFlight);
                  }}
                  disabled={bookingFlight !== null}
                >
                  Book This Flight <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default JapanFlights;
