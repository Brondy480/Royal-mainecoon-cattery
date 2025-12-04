import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full font-royal text-royalDark bg-white">

      {/* Header Section */}
      <section className="w-full px-6 md:px-20 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#D4AF37]">
          About Royal Mainecoon Cattery
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Welcome to Royal Mainecoon Cattery, home of majestic Mainecoon kittens raised with love, care, and excellence.
        </p>
        <p className="text-lg md:text-xl">
          Our goal is to provide healthy, well-socialized kittens from champion bloodlines while building lifelong relationships with every family.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl w-full px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        <img 
          src="/Adopters.jpg" 
          alt="Cattery Interior" 
          className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover h-96 md:h-[400px]" 
        />
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F]">Our Story</h2>
          <p className="text-lg md:text-xl">
            Royal Mainecoon Cattery was founded with a passion for raising healthy, happy, and majestic Mainecoon kittens. 
            Over the years, we have dedicated ourselves to breeding kittens that combine both beauty and gentle temperament.
          </p>
          <p className="text-lg md:text-xl">
            From the moment a kitten is born, they receive individual attention, love, and early socialization to prepare them for a lifetime of companionship.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-[#FFF8E7] py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#D4AF37]">Our Mission & Vision</h2>
        <p className="text-lg md:text-xl mb-4">
          <strong>Mission:</strong> To breed healthy Mainecoon kittens that are both physically strong and emotionally balanced, creating perfect companions for loving families.
        </p>
        <p className="text-lg md:text-xl">
          <strong>Vision:</strong> To be recognized as a top Mainecoon cattery known for exceptional care, ethical breeding, and lifelong support for our clients and kittens.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl w-full px-6 md:px-20 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#1F1F1F]">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {["/team1.jpg", "/team2.jpg"].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <img 
                src={member} 
                alt={'Sarah thompson'} 
                className="w-48 h-48 rounded-full object-cover shadow-lg" 
              />
              <h3 className="text-2xl font-bold">Team Member {idx + 1}</h3>
              <p className="text-lg">Cattery Care Specialist</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cattery Environment */}
      <section className="max-w-6xl w-full px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F1F1F]">Our Cattery Environment</h2>
          <p className="text-lg md:text-xl">
            Our cattery is clean, spacious, and designed to provide a safe and stimulating environment for kittens. 
            Every corner is equipped to ensure physical activity, mental stimulation, and socialization.
          </p>
          <p className="text-lg md:text-xl">
            Proper hygiene, nutrition, and regular veterinary check-ups are our priority to keep every kitten healthy and thriving.
          </p>
        </div>
        <img 
          src="/catteryInterior.jpg" 
          alt="Cattery Environment" 
          className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover h-96 md:h-[400px]" 
        />
      </section>

      {/* Client Care Philosophy */}
      <section className="w-full bg-[#FFF8E7] py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#D4AF37]">Client Care Philosophy</h2>
        <p className="text-lg md:text-xl mb-4">
          At Royal Mainecoon Cattery, we value lifelong relationships with our clients. 
          We provide guidance on nutrition, health, and training for every kitten.
        </p>
        <p className="text-lg md:text-xl">
          Your satisfaction and the well-being of your kitten are our top priorities, from adoption day and beyond.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="w-full py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1F1F1F]">
          Ready to Bring Home Your Royal Companion?
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
