import { Award, Leaf, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-nature-600" />,
      title: "Eco-Friendly",
      description: "100% sustainable practices with solar power and zero-waste commitment"
    },
    {
      icon: <Award className="w-8 h-8 text-nature-600" />,
      title: "Award Winning",
      description: "Recognized globally for excellence in hospitality and environmental stewardship"
    },
    {
      icon: <Heart className="w-8 h-8 text-nature-600" />,
      title: "Wellness Focused",
      description: "Holistic approach to relaxation with spa treatments and mindfulness programs"
    },
    {
      icon: <Shield className="w-8 h-8 text-nature-600" />,
      title: "Premium Service",
      description: "24/7 concierge service ensuring every moment of your stay is perfect"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Where Luxury Meets
              <span className="text-gradient block">Untamed Nature</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nestled in 500 acres of pristine wilderness, Nature Lovers Resort offers an unparalleled escape from the ordinary. Our commitment to sustainable luxury ensures that every guest experiences the perfect harmony between comfort and conservation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From sunrise yoga sessions overlooking misty valleys to candlelit dinners under starlit skies, every moment here is designed to reconnect you with nature's profound beauty and your inner peace.
            </p>
            <button className="btn-primary">
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Resort Overview"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-nature-600">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;