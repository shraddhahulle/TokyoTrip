
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

interface ItineraryDay {
  day: number;
  date: string;
  activities: Activity[];
}

export const popularActivities: Activity[] = [
  {
    id: "1",
    name: "Tokyo Tower",
    description: "Visit the iconic Tokyo Tower, offering panoramic views of the city skyline.",
    duration: "2 hours",
    price: "¥1,200",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW8lMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    location: "Minato City",
    category: "Sightseeing",
    rating: 4.5
  },
  {
    id: "2",
    name: "Shibuya Crossing",
    description: "Experience the world's busiest pedestrian crossing in the heart of Tokyo.",
    duration: "1 hour",
    price: "Free",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Shibuya",
    category: "Urban Experience",
    rating: 4.7
  },
  {
    id: "3",
    name: "Senso-ji Temple",
    description: "Visit Tokyo's oldest Buddhist temple, dating back to 645 AD.",
    duration: "3 hours",
    price: "Free",
    image: "https://images.unsplash.com/photo-1583396082380-01f674e2d8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    location: "Asakusa",
    category: "Cultural",
    rating: 4.6
  },
  {
    id: "4",
    name: "Tsukiji Outer Market",
    description: "Explore the vibrant food market offering fresh seafood and local delicacies.",
    duration: "2 hours",
    price: "Varies",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    location: "Chuo City",
    category: "Food & Dining",
    rating: 4.4
  },
  {
    id: "5",
    name: "Meiji Shrine",
    description: "A tranquil Shinto shrine set in a lush forest in the heart of Tokyo.",
    duration: "2 hours",
    price: "Free",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    location: "Shibuya",
    category: "Cultural",
    rating: 4.8
  },
  {
    id: "6",
    name: "teamLab Planets",
    description: "An immersive art experience with interactive digital installations.",
    duration: "3 hours",
    price: "¥3,200",
    image: "https://images.unsplash.com/photo-1657060320326-183d494ef242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    location: "Koto City",
    category: "Art & Culture",
    rating: 4.9
  }
];

export const sampleItinerary: ItineraryDay[] = [
  {
    day: 1,
    date: "Jun 15, 2023",
    activities: [
      popularActivities[0],
      popularActivities[3],
    ]
  },
  {
    day: 2,
    date: "Jun 16, 2023",
    activities: [
      popularActivities[2],
      popularActivities[4],
    ]
  },
  {
    day: 3,
    date: "Jun 17, 2023",
    activities: [
      popularActivities[1],
      popularActivities[5],
    ]
  }
];

export const categories = [
  "All",
  "Sightseeing",
  "Cultural",
  "Food & Dining",
  "Urban Experience",
  "Art & Culture",
  "Nature",
  "Shopping"
];

export const userData = {
  name: "Chhavi",
  upcomingTrip: {
    destination: "Tokyo, Japan",
    dates: "June 15-18, 2023",
    hotel: {
      name: "Park Hyatt Tokyo",
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      rating: 5,
      address: "3-7-1-2 Nishi Shinjuku, Shinjuku-Ku, Tokyo, 163-1055"
    },
    flight: {
      airline: "ANA",
      flightNumber: "NH-872",
      departure: "JFK - June 14, 08:30 AM",
      arrival: "HND - June 15, 10:45 PM",
      duration: "14h 15m"
    }
  }
};
