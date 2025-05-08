
import React from 'react';
import Navbar from '@/components/Navbar';
import JapanFlights from '@/components/JapanFlights';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Flights = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-16">
        <div className="bg-tokyo-indigo text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Japan Flights</h1>
                <p className="text-gray-200">Find the best flights to Tokyo</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <JapanFlights />
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

export default Flights;
