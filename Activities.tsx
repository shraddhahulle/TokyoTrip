
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ActivityCard from '@/components/ActivityCard';
import { popularActivities, categories } from '@/lib/data';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = popularActivities.filter(activity => {
    const matchesCategory = selectedCategory === "All" || activity.category === selectedCategory;
    const matchesSearch = 
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-tokyo-indigo text-white py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold mb-2">Tokyo Activities</h1>
            <p className="text-gray-200">Discover and plan the perfect Tokyo experience</p>
            
            <div className="mt-6 relative max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search activities..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-tokyo-red hover:bg-tokyo-red/90" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} {...activity} />
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <h3 className="text-xl font-medium mb-2">No activities found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or category filters
                </p>
              </div>
            )}
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
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/activities" className="text-gray-300 hover:text-white">Activities</a></li>
                <li><a href="/itinerary" className="text-gray-300 hover:text-white">Itinerary</a></li>
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

export default Activities;
