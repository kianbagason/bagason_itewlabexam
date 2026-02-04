// Mock student data instead of fetching from external API
export const fetchStudents = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  return [
    {
      id: 1,
      name: "Sofia Ramirez",
      username: "sofia.ramirez",
      email: "sofia.ramirez@example.com",
      phone: "(555) 123-4567",
      website: "sofia.dev",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Tech Solutions Inc.",
        catchPhrase: "Innovating the future",
        bs: "digital solutions"
      },
      address: {
        street: "123 Main St",
        suite: "Apt 4B",
        city: "Manila",
        zipcode: "1000",
        geo: {
          lat: "14.5995",
          lng: "120.9842"
        }
      }
    },
    {
      id: 2,
      name: "Marcus Chen",
      username: "marcus.chen",
      email: "marcus.chen@example.com",
      phone: "(555) 234-5678",
      website: "marcus.dev",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Creative Studios",
        catchPhrase: "Design meets technology",
        bs: "user experience"
      },
      address: {
        street: "456 Oak Ave",
        suite: "Suite 200",
        city: "Quezon City",
        zipcode: "1100",
        geo: {
          lat: "14.6760",
          lng: "121.0437"
        }
      }
    },
    {
      id: 3,
      name: "Luna Rodriguez",
      username: "luna.rodriguez",
      email: "luna.rodriguez@example.com",
      phone: "(555) 345-6789",
      website: "luna.dev",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Data Analytics Corp",
        catchPhrase: "Turning data into insights",
        bs: "data analytics"
      },
      address: {
        street: "789 Pine Rd",
        suite: "Floor 15",
        city: "Makati",
        zipcode: "1220",
        geo: {
          lat: "14.5547",
          lng: "121.0244"
        }
      }
    },
    {
      id: 4,
      name: "Ethan Park",
      username: "ethan.park",
      email: "ethan.park@example.com",
      phone: "(555) 456-7890",
      website: "ethan.dev",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Cloud Systems Ltd",
        catchPhrase: "Scaling solutions globally",
        bs: "cloud infrastructure"
      },
      address: {
        street: "321 Elm St",
        suite: "Unit 8",
        city: "Pasig",
        zipcode: "1600",
        geo: {
          lat: "14.5764",
          lng: "121.0851"
        }
      }
    },
    {
      id: 5,
      name: "Zara Ahmed",
      username: "zara.ahmed",
      email: "zara.ahmed@example.com",
      phone: "(555) 567-8901",
      website: "zara.dev",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Mobile Apps Co",
        catchPhrase: "Apps that connect people",
        bs: "mobile development"
      },
      address: {
        street: "654 Maple Dr",
        suite: "Apt 12C",
        city: "Taguig",
        zipcode: "1630",
        geo: {
          lat: "14.5176",
          lng: "121.0509"
        }
      }
    },
    {
      id: 6,
      name: "Diego Morales",
      username: "diego.morales",
      email: "diego.morales@example.com",
      phone: "(555) 678-9012",
      website: "diego.dev",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Web Design Studio",
        catchPhrase: "Beautiful digital experiences",
        bs: "web design"
      },
      address: {
        street: "987 Cedar Ln",
        suite: "Suite 5",
        city: "Cebu",
        zipcode: "6000",
        geo: {
          lat: "10.3157",
          lng: "123.8854"
        }
      }
    },
    {
      id: 7,
      name: "Aisha Patel",
      username: "aisha.patel",
      email: "aisha.patel@example.com",
      phone: "(555) 789-0123",
      website: "aisha.dev",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "Security Solutions",
        catchPhrase: "Protecting digital assets",
        bs: "cybersecurity"
      },
      address: {
        street: "147 Birch St",
        suite: "Floor 22",
        city: "Davao",
        zipcode: "8000",
        geo: {
          lat: "7.1907",
          lng: "125.4553"
        }
      }
    },
    {
      id: 8,
      name: "Liam Johnson",
      username: "liam.johnson",
      email: "liam.johnson@example.com",
      phone: "(555) 890-1234",
      website: "liam.dev",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      company: {
        name: "AI Research Lab",
        catchPhrase: "Advancing artificial intelligence",
        bs: "machine learning"
      },
      address: {
        street: "258 Spruce Ave",
        suite: "Lab 3",
        city: "Baguio",
        zipcode: "2600",
        geo: {
          lat: "16.4023",
          lng: "120.5960"
        }
      }
    }
  ]
}
