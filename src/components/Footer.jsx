import { Leaf, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-nature-400" />
              <span className="text-xl font-bold">Nature Lovers Resort</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the perfect harmony between luxury and nature at our eco-friendly resort. 
              Creating unforgettable experiences while preserving the beauty of our natural world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 transition-colors duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Rooms', 'Amenities', 'Dining', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-nature-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Spa & Wellness',
                'Adventure Tours',
                'Fine Dining',
                'Event Planning',
                'Airport Transfer',
                'Concierge Service'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-nature-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-nature-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Nature Valley Road</p>
                  <p>Wilderness National Park</p>
                  <p>MT 59718, United States</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nature-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (800) 555-NATURE</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nature-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>reservations@natureloversresort.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-300">Subscribe to our newsletter for special offers and updates</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-nature-600 focus:border-transparent"
              />
              <button className="bg-nature-600 hover:bg-nature-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Nature Lovers Resort. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-nature-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-nature-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;