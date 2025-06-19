import { TreePine, Waves, Dumbbell, Utensils, Car, Wifi } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <TreePine className="w-12 h-12 text-nature-600" />,
      title: "Nature Trails",
      description: "Explore 15 miles of pristine hiking trails through old-growth forests and scenic overlooks."
    },
    {
      icon: <Waves className="w-12 h-12 text-nature-600" />,
      title: "Spa & Wellness",
      description: "Rejuvenate with our full-service spa featuring natural treatments and meditation gardens."
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-nature-600" />,
      title: "Fitness Center",
      description: "State-of-the-art fitness facility with yoga studio and outdoor exercise areas."
    },
    {
      icon: <Utensils className="w-12 h-12 text-nature-600" />,
      title: "Gourmet Dining",
      description: "Farm-to-table cuisine featuring local ingredients and stunning nature views."
    },
    {
      icon: <Car className="w-12 h-12 text-nature-600" />,
      title: "Adventure Tours",
      description: "Guided wildlife tours, kayaking, fishing, and seasonal outdoor activities."
    },
    {
      icon: <Wifi className="w-12 h-12 text-nature-600" />,
      title: "Modern Comfort",
      description: "High-speed WiFi, concierge services, and all modern amenities you need."
    }
  ];

  return (
    <section id="amenities" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            World-Class
            <span className="text-gradient"> Amenities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in luxury while staying connected to nature. Our comprehensive amenities 
            ensure every aspect of your stay exceeds expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Activities Banner */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Resort Activities"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Endless Adventures Await</h3>
              <p className="text-lg mb-6 max-w-2xl">
                From sunrise yoga to stargazing tours, every day brings new opportunities to connect with nature and create lasting memories.
              </p>
              <button className="btn-primary">
                View Activities Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;