
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { toast } = useToast();

  const handleSignIn = () => {
    setIsLoginOpen(true);
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing information",
        description: "Please fill in both email and password",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoggingIn(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoginOpen(false);
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in to your account.",
      });
      
      // Clear form
      setEmail('');
      setPassword('');
    }, 1500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-tokyo-indigo font-bold text-xl">Tokyo<span className="text-tokyo-red">Trip</span></span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tokyo-red transition-colors">
              Home
            </Link>
            <Link to="/activities" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tokyo-red transition-colors">
              Activities
            </Link>
            <Link to="/itinerary" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tokyo-red transition-colors">
              Itinerary
            </Link>
            <Link to="/flights" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tokyo-red transition-colors">
              Flights
            </Link>
            <Button 
              variant="default" 
              className="bg-tokyo-red hover:bg-tokyo-red/90"
              onClick={handleSignIn}
            >
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-tokyo-red focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tokyo-red hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/activities"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tokyo-red hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Activities
            </Link>
            <Link
              to="/itinerary"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tokyo-red hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Itinerary
            </Link>
            <Link
              to="/flights"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tokyo-red hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Flights
            </Link>
            <div className="px-3 py-2">
              <Button 
                variant="default" 
                className="w-full bg-tokyo-red hover:bg-tokyo-red/90"
                onClick={() => {
                  handleSignIn();
                  setIsOpen(false);
                }}
              >
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign In</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your Tokyo trip details
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitLogin}>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="h-auto p-0 text-sm" type="button">
                    Forgot password?
                  </Button>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            <DialogFooter className="mt-6">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setIsLoginOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-tokyo-red hover:bg-tokyo-red/90"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Signing in..." : "Sign In"}
              </Button>
            </DialogFooter>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Button variant="link" className="h-auto p-0">
                Sign up
              </Button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
