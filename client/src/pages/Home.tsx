import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Zap, Users, Award, Dumbbell, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Corex Gym Homepage
 * Design: Cinematic Athletic Minimalism
 * Dark theme with red accents, bold typography, asymmetric layouts
 * Focus: WhatsApp CTA, facility showcase, membership conversion
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "213123456789"; // Algeria country code + number
  const whatsappMessage = "Bonjour! Je suis intéressé par une adhésion à Corex Gym Canastel.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md border-b border-red-600/30" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-red-600" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
            COREX
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#facilities" className="hover:text-red-600 transition-colors">FACILITIES</a>
            <a href="#membership" className="hover:text-red-600 transition-colors">MEMBERSHIP</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">CONTACT</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            JOIN NOW
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-hero-dark-DQfmcwZo8Q579FekDqw6fB.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Logo with Glow */}
          <div className="mb-8 flex justify-center">
            <div className="text-7xl font-bold text-red-600 logo-glow" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em", textShadow: "0 0 30px rgba(220, 38, 38, 0.8)" }}>
              COREX
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            UNLEASH YOUR <span className="text-red-600">POWER</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
            1500m² Premium Fitness Facility in Canastel, Oran
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Join via WhatsApp
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
              Learn More
            </a>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">1500m²</div>
              <div className="text-sm text-gray-400">Premium Space</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">5:00-00:00</div>
              <div className="text-sm text-gray-400">Open Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">8000 DA</div>
              <div className="text-sm text-gray-400">Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Offer Section */}
      <section id="membership" className="py-20 bg-gray-950 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              MEMBERSHIP OFFER
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pricing Card */}
            <div className="card-dark border-2 border-red-600 p-8 text-center hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300">
              <div className="text-6xl font-bold text-red-600 mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                8000 DA
              </div>
              <div className="text-gray-400 text-lg mb-6">Per Month</div>
              <div className="space-y-3 text-left mb-8">
                <div className="flex items-center gap-3">
                  <Zap className="text-red-600" size={20} />
                  <span>Unlimited Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-red-600" size={20} />
                  <span>All Facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-red-600" size={20} />
                  <span>Premium Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Dumbbell className="text-red-600" size={20} />
                  <span>Expert Coaching</span>
                </div>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Start Your Journey
              </a>
            </div>

            {/* Benefits Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Why Choose Corex?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Experience premium fitness in one of Oran's most advanced facilities. Our 1500m² space features cutting-edge equipment, expert trainers, and a vibrant community dedicated to achieving their fitness goals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Advanced Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Face ID Entry System</li>
                  <li>✓ Central Air Conditioning</li>
                  <li>✓ Premium Ventilation</li>
                  <li>✓ Multi-Floor Layout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            OUR FACILITIES
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xs mx-auto mb-12"></div>

          {/* Floor 1 */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-red-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
              FLOOR 1 - CARDIO & STRENGTH
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-facility-cardio-eEBd8yWpQMfWfD4a3zYz94.webp"
                alt="Cardio Zone"
                className="rounded-lg h-80 object-cover hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300"
              />
              <div className="space-y-4">
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">Full Cardio Area</h4>
                  <p className="text-gray-300">State-of-the-art treadmills, ellipticals, and rowing machines for optimal cardiovascular training.</p>
                </div>
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">Boxing Zone</h4>
                  <p className="text-gray-300">Professional boxing rings and heavy bags for intense combat training and conditioning.</p>
                </div>
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">CrossFit Space</h4>
                  <p className="text-gray-300">Dedicated CrossFit area with Olympic platforms, barbells, and functional training equipment.</p>
                </div>
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">Healthy Food Bar</h4>
                  <p className="text-gray-300">Premium nutrition store and cafeteria with healthy meal options for post-workout recovery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floor 2 */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-red-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
              FLOOR 2 - BODYBUILDING ZONE
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 order-2 md:order-1">
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">20 Leg Machines</h4>
                  <p className="text-gray-300">Complete leg training arsenal including leg press, hack squat, leg curl, and leg extension machines.</p>
                </div>
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">12 Chest Machines</h4>
                  <p className="text-gray-300">Advanced chest equipment for comprehensive upper body development and muscle isolation.</p>
                </div>
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">Advanced Equipment</h4>
                  <p className="text-gray-300">Premium dumbbells, barbells, and specialized machines for serious bodybuilders.</p>
                </div>
                <div className="card-dark">
                  <h4 className="text-xl font-bold text-red-600 mb-2">Posing Room</h4>
                  <p className="text-gray-300">Professional posing stage with mirrors and lighting for competition preparation.</p>
                </div>
              </div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-facility-weights-Rdt89e99fhfvsryCJbiipy.webp"
                alt="Bodybuilding Zone"
                className="rounded-lg h-80 object-cover hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 order-1 md:order-2"
              />
            </div>
          </div>

          {/* Special Zones */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-dark">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-facility-boxing-5KjBVhujKYw6JUWjnaChdk.webp"
                alt="Boxing Zone"
                className="rounded-lg mb-4 h-48 object-cover"
              />
              <h4 className="text-xl font-bold text-red-600 mb-2">Women-Only Zone</h4>
              <p className="text-gray-300">Dedicated space for female members featuring Zumba, aerobics, and specialized training programs.</p>
            </div>
            <div className="card-dark">
              <div className="bg-gradient-to-br from-red-600 to-red-900 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Dumbbell size={64} className="text-white/50" />
              </div>
              <h4 className="text-xl font-bold text-red-600 mb-2">Kids Gymnastics</h4>
              <p className="text-gray-300">Professional gymnastics classes for children with certified instructors and safe equipment.</p>
            </div>
            <div className="card-dark">
              <div className="bg-gradient-to-br from-red-600 to-red-900 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Award size={64} className="text-white/50" />
              </div>
              <h4 className="text-xl font-bold text-red-600 mb-2">Glutes Corner</h4>
              <p className="text-gray-300">Specialized equipment and training programs focused on glute development and lower body strength.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            PREMIUM AMENITIES
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xs mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Face ID Entry System</h4>
                  <p className="text-gray-400">Secure, modern access control for all members</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Central Air Conditioning</h4>
                  <p className="text-gray-400">Comfortable temperature year-round</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Premium Ventilation</h4>
                  <p className="text-gray-400">Advanced air extraction systems</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Locker Rooms</h4>
                  <p className="text-gray-400">Secure storage for personal belongings</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Professional Showers</h4>
                  <p className="text-gray-400">Clean, modern shower facilities</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Nutrition Store</h4>
                  <p className="text-gray-400">Premium supplements and healthy products</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Expert Coaching</h4>
                  <p className="text-gray-400">Certified trainers for personalized guidance</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-red-600 flex-shrink-0">✓</div>
                <div>
                  <h4 className="font-bold text-lg">Community Events</h4>
                  <p className="text-gray-400">Regular competitions and social activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-community-c9UgLrBmwmGzrYgWhWCXt2.webp"
            alt="Community"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            JOIN OUR COMMUNITY
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xs mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Corex Gym is more than just a fitness facility—it's a community of dedicated athletes, fitness enthusiasts, and people committed to their health. Whether you're a beginner or a competitive bodybuilder, you'll find your place here.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="card-dark">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <p className="text-gray-400">Active Members</p>
              </div>
              <div className="card-dark">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <p className="text-gray-400">Expert Trainers</p>
              </div>
              <div className="card-dark">
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <MessageCircle size={20} />
              Join the Community Today
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-20 bg-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-red-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <Clock className="inline mr-3" size={32} />
                OPENING HOURS
              </h3>
              <div className="card-dark">
                <div className="text-2xl font-bold text-white mb-2">5:00 AM - 12:00 AM</div>
                <p className="text-gray-400 mb-4">Open Every Day</p>
                <p className="text-gray-300">
                  We're open from early morning to midnight, giving you the flexibility to train whenever it suits your schedule. Whether you're an early bird or a night owl, Corex Gym is ready for you.
                </p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-red-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <MapPin className="inline mr-3" size={32} />
                LOCATION
              </h3>
              <div className="card-dark">
                <div className="text-xl font-bold text-white mb-2">Canastel, Oran</div>
                <p className="text-gray-400 mb-4">Algeria</p>
                <div className="bg-gray-900 rounded-lg h-64 mb-4 flex items-center justify-center overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5089642195!2d-0.6527!3d35.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8e8e8e8e8e8e9%3A0x0!2sCanastel%2C%20Oran%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1234567890"
                  ></iframe>
                </div>
                <p className="text-gray-300 text-sm">
                  Easily accessible location in Canastel with ample parking and public transportation options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            GET IN TOUCH
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent max-w-xs mx-auto mb-12"></div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card-dark text-center">
                <Phone className="text-red-600 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold mb-2">Phone</h4>
                <p className="text-gray-300">+213 (0) 123 456 789</p>
              </div>
              <div className="card-dark text-center">
                <MessageCircle className="text-red-600 mx-auto mb-4" size={40} />
                <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">
                  Chat with us
                </a>
              </div>
            </div>

            <div className="card-dark border-2 border-red-600 text-center p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
              <p className="text-gray-300 mb-6">
                Join Corex Gym today and start your fitness journey. Our team is ready to help you achieve your goals.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                <MessageCircle size={20} />
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-600/50 transition-all duration-300 transform hover:scale-110 z-40 animate-pulse"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-red-600 font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>COREX GYM</h4>
              <p className="text-gray-400 text-sm">Premium fitness facility in Canastel, Oran</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#facilities" className="hover:text-red-600 transition-colors">Facilities</a></li>
                <li><a href="#membership" className="hover:text-red-600 transition-colors">Membership</a></li>
                <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-sm text-gray-400">5:00 AM - 12:00 AM</p>
              <p className="text-sm text-gray-400">Every Day</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-sm text-gray-400">Canastel, Oran</p>
              <p className="text-sm text-gray-400">Algeria</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Corex Gym. All rights reserved. | Premium Fitness in Oran</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
