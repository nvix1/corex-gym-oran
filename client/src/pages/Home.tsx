import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Zap, Users, Award, Dumbbell, MessageCircle, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Corex Gym Homepage - Redesigned
 * Design: Modern, Professional Gym Website
 * Dark theme with red accents, clean layout, no repetition
 * Focus: WhatsApp CTA, facilities, membership, and accurate location
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

  const whatsappNumber = "213661311319";
  const whatsappMessage = "Bonjour! Je suis intéressé par une adhésion à Corex Gym Canastel.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-md border-b border-red-600/30" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-logo_3f7daca6.png" alt="Corex Gym" className="h-12 w-auto" />
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#facilities" className="hover:text-red-600 transition-colors">FACILITIES</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">PRICING</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">CONTACT</a>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            JOIN NOW
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-hero-dark-DQfmcwZo8Q579FekDqw6fB.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Large Logo */}
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-logo_3f7daca6.png" alt="Corex Gym Logo" className="h-56 w-auto mx-auto mb-12 logo-glow drop-shadow-2xl animate-fade-in-down" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            UNLEASH YOUR <span className="text-red-600">POWER</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Premium Fitness
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300">
              <MessageCircle size={20} />
              Join via WhatsApp
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR FACILITIES</h2>
            <div className="h-1 bg-gradient-to-r from-red-600 via-red-600 to-transparent w-32"></div>
            <p className="text-gray-400 mt-4 text-lg">Spread across 1500m² of premium training space</p>
          </div>

          {/* Floor 1 */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-red-600">FLOOR 1</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-facility-cardio-eEBd8yWpQMfWfD4a3zYz94.webp"
                alt="Cardio Zone"
                className="rounded-lg h-72 object-cover hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300"
              />
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Zap className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Full Cardio Area</h4>
                    <p className="text-gray-400">State-of-the-art treadmills, ellipticals, and rowing machines</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Boxing Zone</h4>
                    <p className="text-gray-400">Professional rings and heavy bags for combat training</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Dumbbell className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">CrossFit Space</h4>
                    <p className="text-gray-400">Olympic platforms, barbells, and functional equipment</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Healthy Food Bar</h4>
                    <p className="text-gray-400">Premium nutrition and post-workout recovery options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floor 2 */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-red-600">FLOOR 2 - BODYBUILDING ZONE</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 order-2 md:order-1">
                <div className="flex gap-4">
                  <Dumbbell className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">20 Leg Machines</h4>
                    <p className="text-gray-400">Complete leg training arsenal for muscle development</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">12 Chest Machines</h4>
                    <p className="text-gray-400">Advanced equipment for upper body isolation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Advanced Equipment</h4>
                    <p className="text-gray-400">Premium dumbbells, barbells, and specialized machines</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-1">Posing Room</h4>
                    <p className="text-gray-400">Professional stage with mirrors for competition prep</p>
                  </div>
                </div>
              </div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-facility-weights-Rdt89e99fhfvsryCJbiipy.webp"
                alt="Bodybuilding Zone"
                className="rounded-lg h-72 object-cover hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 order-1 md:order-2"
              />
            </div>
          </div>

          {/* Specialized Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-dark">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-facility-boxing-5KjBVhujKYw6JUWjnaChdk.webp"
                alt="Women Zone"
                className="rounded-lg mb-4 h-48 object-cover"
              />
              <h4 className="text-xl font-bold text-red-600 mb-2">Women-Only Zone</h4>
              <p className="text-gray-400">Dedicated space with Zumba, aerobics, and specialized training programs</p>
            </div>
            <div className="card-dark">
              <div className="bg-gradient-to-br from-red-600 to-red-900 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Award size={64} className="text-white/50" />
              </div>
              <h4 className="text-xl font-bold text-red-600 mb-2">Glutes Corner</h4>
              <p className="text-gray-400">Specialized equipment and training programs focused on lower body strength</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-gray-950">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">PREMIUM AMENITIES</h2>
            <div className="h-1 bg-gradient-to-r from-red-600 via-red-600 to-transparent w-32"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔐", title: "Face ID Entry", desc: "Secure access control" },
              { icon: "❄️", title: "Central AC", desc: "Comfortable temperature" },
              { icon: "💨", title: "Premium Ventilation", desc: "Advanced air systems" },
              { icon: "🚿", title: "Showers & Lockers", desc: "Clean facilities" },
              { icon: "🥗", title: "Nutrition Store", desc: "Premium supplements" },
              { icon: "👨‍🏫", title: "Expert Coaching", desc: "Certified trainers" },
              { icon: "🎯", title: "Personal Training", desc: "Customized programs" },
              { icon: "🏆", title: "Community Events", desc: "Competitions & socials" },
            ].map((amenity, idx) => (
              <div key={idx} className="card-dark text-center">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h4 className="font-bold mb-1">{amenity.title}</h4>
                <p className="text-sm text-gray-400">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-black">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">MEMBERSHIP</h2>
            <div className="h-1 bg-gradient-to-r from-red-600 via-red-600 to-transparent w-32"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-dark border-2 border-red-600 p-12 text-center">
              <div className="text-6xl font-bold text-red-600 mb-2">8000 DA</div>
              <div className="text-gray-400 text-lg mb-8">Per Month</div>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <ChevronRight className="text-red-600" size={20} />
                  <span>Unlimited Access to All Facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="text-red-600" size={20} />
                  <span>All Equipment & Zones</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="text-red-600" size={20} />
                  <span>Access to Expert Trainers</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="text-red-600" size={20} />
                  <span>Locker & Shower Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="text-red-600" size={20} />
                  <span>Community Events</span>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">GET IN TOUCH</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hours</h4>
                    <p className="text-gray-400">5:00 AM - 12:00 AM</p>
                    <p className="text-gray-400">Every Day</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-gray-400">Canastel, Oran</p>
                    <p className="text-gray-400">Algeria</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors font-medium">
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-400">+213 661 311 319</p>
                  </div>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-8 inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Message on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold mb-4">FIND US</h3>
              <div className="bg-gray-900 rounded-lg h-96 overflow-hidden border border-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5089642195!2d-0.5699!3d35.7450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8e8e8e8e8e8e9%3A0x0!2sCanastel%2C%20Oran%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1234567890"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Located in the premium Canastel neighborhood, 15 minutes from Oran city center. Easy access with ample parking.
              </p>
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
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663358506347/aLpGrSUoMhYTjKnNWPhxZ9/corex-logo_3f7daca6.png" alt="Corex" className="h-8 w-auto mb-4" />
              <p className="text-gray-400 text-sm">Premium fitness facility in Canastel, Oran</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#facilities" className="hover:text-red-600 transition-colors">Facilities</a></li>
                <li><a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a></li>
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
            <p>&copy; 2026 Corex Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
