
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TripPlanner from '@/components/TripPlanner';
import Dashboard from '@/components/Dashboard';
import ActivityCard from '@/components/ActivityCard';
import { popularActivities } from '@/lib/data';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        <Hero />
        <TripPlanner />
        <Dashboard />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Popular Tokyo Experiences</h2>
              <p className="text-gray-600">
                Discover the most loved activities and attractions in Tokyo
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularActivities.slice(0, 3).map((activity) => (
                <ActivityCard
                  key={activity.id}
                  {...activity}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="/activities" 
                className="inline-block px-6 py-3 rounded-md bg-tokyo-red text-white font-medium hover:bg-tokyo-red/90 transition-colors"
              >
                View All Activities
              </a>
            </div>
          </div>
        </section>
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

export default Index;
