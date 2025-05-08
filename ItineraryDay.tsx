
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Edit } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Activity {
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

interface ItineraryDayProps {
  day: number;
  date: string;
  activities: Activity[];
}

const ItineraryDay: React.FC<ItineraryDayProps> = ({ day, date, activities }) => {
  const { toast } = useToast();
  
  const handleModifyActivity = (activityName: string) => {
    toast({
      title: "Modify Activity",
      description: `You can now update details for ${activityName}`,
    });
  };
  
  const handleAddActivities = () => {
    toast({
      title: "Add Activities",
      description: "Browsing available activities to add to your itinerary",
    });
  };

  return (
    <Card className="mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-tokyo-indigo to-tokyo-indigo/80 text-white">
        <CardTitle className="flex items-center justify-between">
          <span>Day {day}</span>
          <span className="text-sm font-normal">{date}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {activities.length > 0 ? (
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={activity.id} className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <div className="h-36 rounded-md overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{activity.name}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" /> {activity.location}
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" /> {activity.duration}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{activity.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm font-medium">{activity.price}</span>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleModifyActivity(activity.name)}
                      >
                        <Edit className="mr-1 h-3 w-3" /> Modify
                      </Button>
                    </div>
                  </div>
                </div>
                {index < activities.length - 1 && (
                  <div className="border-b border-gray-200 my-4 md:hidden"></div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center">
            <p className="text-gray-500">No activities planned for this day.</p>
            <Button 
              className="mt-4 bg-tokyo-red hover:bg-tokyo-red/90"
              onClick={handleAddActivities}
            >
              Add Activities
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ItineraryDay;
