import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Nature Resort Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to
          <span className="block text-gradient text-nature-200">Nature Lovers Resort</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up animate-delay-200">
          Escape to paradise where luxury meets pristine wilderness. Experience the ultimate retreat in our eco-friendly resort nestled in nature's embrace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
          <button className="btn-primary">
            Book Your Stay
          </button>
          <button className="btn-secondary">
            Explore Resort
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;