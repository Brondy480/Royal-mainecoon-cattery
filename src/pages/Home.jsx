import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import homemainecoon from "../../public/homemainecoon1.jpg";
import kitten1 from "../../public/kitten1.jpg";
import kitten2 from "../../public/kitten2.jpg";
import kitten3 from "../../public/kitten3.jpg";
import catteryInterior from "../../public/catteryInterior.jpg";
import award1 from "../../public/award1.jpg";
import award2 from "../../public/award2.jpg";
import client1 from "../../public/client1.jpg";
import client2 from "../../public/client2.jpg";
import client3 from "../../public/client3.jpg";

// Import adopter gallery images
import adopter1 from "../../public/adopter1.jpg";
import adopter2 from "../../public/adopter2.jpg";
import adopter3 from "../../public/adopter3.jpg";

import adopter5 from "../../public/adopter5.jpg";
import adopter6 from "../../public/adopter6.jpg";
import adopter7 from "../../public/adopter7.jpg";
import adopter8 from "../../public/adopter8.jpg";

export default function Home() {
  const navigate = useNavigate();

  const galleryImages = [
    adopter1, adopter2, adopter3,
    adopter5, adopter6, adopter7, adopter8
  ];

  return (
    <div className="flex flex-col w-full font-royal">

      {/* Hero Section */}
      <section
        className="w-full h-screen relative -mt-4 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${homemainecoon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 mt-20 md:px-0">
          <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg text-[#FFD700]">
            Royal Mainecoon Cattery
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-100 drop-shadow-md">
            Majestic Mainecoon kittens — Raised with love & care
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://wa.me/15038099855"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform duration-500 animate-bounce"
              style={{ background: "linear-gradient(90deg, #FFD700, #FFC107)" }}
            >
              <FaWhatsapp size={24} /> Contact Us on WhatsApp
            </a>

            <button
              onClick={() => navigate("/kittens")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-gray-900 shadow-lg hover:scale-105 transition-transform duration-500"
              style={{ backgroundColor: "#FFF8E7" }}
            >
              View Available Kittens
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl w-full mx-auto mt-24 px-6 md:px-0">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-[#1F1F1F]">
          Why Choose Our Kittens?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Healthy & Loved", desc: "Raised in a loving environment with full medical checks." },
            { title: "Purebred Mainecoons", desc: "Champion bloodlines with majestic features & temperament." },
            { title: "Lifetime Support", desc: "Nutrition and care guidance even after adoption." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 bg-[#FFF8E7]">
              <h3 className="text-3xl font-bold mb-3 text-[#FFD700]">{item.title}</h3>
              <p className="text-gray-900 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl w-full mx-auto mt-24 px-6 md:px-0 flex flex-col md:flex-row items-center gap-12">
        <img src={catteryInterior} alt="Cattery" className="w-full md:w-1/2 rounded-3xl shadow-2xl object-cover h-96 md:h-[400px]" />
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-[#1F1F1F]">About Our Cattery</h2>
          <p className="text-gray-900 text-lg">
            We raise healthy, majestic Mainecoon kittens with love and dedication in a clean and spacious environment.
          </p>
          <p className="text-gray-900 text-lg">
            Every kitten receives attention, health checks, and early socialization for a smooth transition to your home.
          </p>
        </div>
      </section>

      {/* Available Kittens */}
      <section className="max-w-6xl w-full mx-auto mt-24 px-6 md:px-0">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-[#1F1F1F]">Our Available Kittens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[kitten1, kitten2, kitten3].map((kitten, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate("/kittens")}
            >
              <img src={kitten} alt={`Kitten ${idx + 1}`} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white text-lg font-semibold text-center">
                View Details
              </div>
            </div>
          ))}
        </div>
      </section>

  

      {/* Testimonials */}
      <section className="max-w-6xl w-full mx-auto mt-24 px-6 md:px-0">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-[#1F1F1F]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Anna W.", comment: "Healthy, playful kitten! We love him.", img: client1 },
            { name: "Mark R.", comment: "Amazing temperament and guidance!", img: client2 },
            { name: "Lily K.", comment: "Beautiful kittens and professionalism!", img: client3 }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 bg-[#FFD700] text-gray-900 text-center flex flex-col items-center gap-4">
              <img src={item.img} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"/>
              <p className="text-lg italic">"{item.comment}"</p>
              <h4 className="text-xl font-bold">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

    {/* Awards + Adoption Stats */}
<section className="max-w-6xl w-full mx-auto mt-24 px-6 md:px-0 text-center">
  {/* Section Title */}
  <h2 className="text-5xl font-extrabold mb-12 text-[#1F1F1F]">
    Our Certifications, Awards & Achievements
  </h2>

  {/* Awards */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
    {[award1, award2].map((award, idx) => (
      <img
        key={idx}
        src={award}
        className="w-48 h-48 object-contain shadow-lg rounded-xl"
      />
    ))}
  </div>

  {/* Adoption Statistics */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
    {/* Stat 1 */}
    <div className="p-6 rounded-3xl shadow-xl bg-white">
      <h3 className="text-4xl font-extrabold text-[#D4AF37] mb-2">1000+</h3>
      <p className="text-lg font-semibold text-[#1F1F1F]">Successful Adoptions</p>
    </div>

    {/* Stat 2 */}
    <div className="p-6 rounded-3xl shadow-xl bg-white">
      <h3 className="text-4xl font-extrabold text-[#D4AF37] mb-2">8+ Years</h3>
      <p className="text-lg font-semibold text-[#1F1F1F]">Breeding Experience</p>
    </div>

    {/* Stat 3 */}
    <div className="p-6 rounded-3xl shadow-xl bg-white">
      <h3 className="text-4xl font-extrabold text-[#D4AF37] mb-2">4.9/5</h3>
      <p className="text-lg font-semibold text-[#1F1F1F]">Client Satisfaction Rating</p>
    </div>
  </div>
</section>


          {/* Gallery Section */}
      <section className="max-w-6xl w-full mx-auto mt-24 px-6 md:px-0">
        <h2 className="text-5xl font-extrabold mb-12 text-center text-[#1F1F1F]">
          Happy Adopters & Successful Deliveries
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt={`Adopter ${i + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full mt-24 py-24 text-center bg-[#FFF8E7]">
        <h2 className="text-5xl font-extrabold mb-8 text-[#1F1F1F]">
          Ready to meet your Royal Companion?
        </h2>
        <a
          href="https://wa.me/15038099855"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 py-5 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-transform duration-300"
          style={{ background: "linear-gradient(90deg, #FFD700, #FFC107)" }}
        >
          <FaWhatsapp size={26} /> Contact Us Now
        </a>
      </section>

    </div>
  );
}
