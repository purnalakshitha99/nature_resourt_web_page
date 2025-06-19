import { Clock, MapPin, Award } from 'lucide-react';

const Dining = () => {
  const restaurants = [
    {
      name: "The Canopy",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      cuisine: "Farm-to-Table Fine Dining",
      hours: "6:00 PM - 10:00 PM",
      location: "Main Lodge",
      description: "Elevated dining experience featuring locally-sourced ingredients and panoramic forest views.",
      specialty: "Seasonal tasting menus"
    },
    {
      name: "Riverside Grill",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      cuisine: "Casual Outdoor Dining",
      hours: "11:00 AM - 9:00 PM",
      location: "By the Lake",
      description: "Relaxed atmosphere with grilled specialties and fresh seafood overlooking the pristine lake.",
      specialty: "Wood-fired grill favorites"
    },
    {
      name: "Mountain Peak Café",
      image: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      cuisine: "Coffee & Light Bites",
      hours: "6:00 AM - 6:00 PM",
      location: "Spa Building",
      description: "Artisan coffee, fresh pastries, and healthy options in a cozy mountain lodge setting.",
      specialty: "Organic coffee & wellness smoothies"
    }
  ];

  return (
    <section id="dining" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Culinary
            <span className="text-gradient"> Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Savor exceptional cuisine crafted from the finest local ingredients. Our diverse dining options 
            offer something special for every palate and occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-earth-600 mr-1" />
                    <span className="text-sm font-semibold text-gray-800">Award Winner</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-earth-600 font-semibold mb-3">
                  {restaurant.cuisine}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {restaurant.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-nature-600" />
                    {restaurant.hours}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-nature-600" />
                    {restaurant.location}
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-gray-800">Chef's Specialty:</p>
                  <p className="text-sm text-gray-600">{restaurant.specialty}</p>
                </div>

                <button className="w-full bg-nature-600 hover:bg-nature-700 text-white py-2 rounded-lg transition-colors duration-300">
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Experiences */}
        <div className="bg-gradient-to-r from-nature-600 to-earth-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Special Dining Experiences</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Sunrise Breakfast</h4>
              <p className="opacity-90">Private breakfast on your deck as the sun rises over the mountains</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Starlight Dinner</h4>
              <p className="opacity-90">Romantic dinner under the stars with personal chef service</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Foraging Tours</h4>
              <p className="opacity-90">Learn about local plants and prepare a meal with our expert guide</p>
            </div>
          </div>
          <button className="mt-8 bg-white text-nature-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Book Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dining;