import React from 'react';
import { Wifi, Car, Coffee, Waves } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      name: "Forest Villa",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "$299",
      period: "per night",
      description: "Luxurious villa surrounded by ancient trees with private deck and forest views.",
      amenities: ["Private Deck", "Forest View", "King Bed", "Fireplace"],
      features: [<Wifi />, <Car />, <Coffee />, <Waves />]
    },
    {
      name: "Mountain Suite",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "$399",
      period: "per night",
      description: "Elevated suite with panoramic mountain views and private hot tub.",
      amenities: ["Mountain View", "Private Hot Tub", "Balcony", "Premium Amenities"],
      features: [<Wifi />, <Car />, <Coffee />, <Waves />]
    },
    {
      name: "Lakeside Cabin",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      price: "$449",
      period: "per night",
      description: "Intimate cabin directly on the lake with private dock and canoe access.",
      amenities: ["Lake Access", "Private Dock", "Canoe Included", "Sunset Views"],
      features: [<Wifi />, <Car />, <Coffee />, <Waves />]
    }
  ];

  return (
    <section id="rooms" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Luxurious
            <span className="text-gradient"> Accommodations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each of our carefully designed accommodations offers a unique perspective on nature's beauty, 
            combining luxury amenities with sustainable design for an unforgettable stay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-nature-600 font-semibold">{room.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{room.period}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {room.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Amenities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-nature-600 rounded-full mr-2"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-nature-600">
                        {React.cloneElement(feature, { size: 20 })}
                      </div>
                    ))}
                  </div>
                  <button className="bg-nature-600 hover:bg-nature-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;