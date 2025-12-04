import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function HowToAdopt() {
  return (
    <div className="flex flex-col w-full font-royal text-royalDark bg-white">

      {/* Hero Section */}
      <section className="w-full py-24 px-6 md:px-20 text-center bg-[#FFF8E7]">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#D4AF37]">
          How to Adopt a Mainecoon Kitten
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Adopting a Mainecoon kitten from Royal Mainecoon Cattery is simple, transparent, and caring. 
          Follow our step-by-step guide to bring home your royal companion safely and confidently.
        </p>
      </section>

      {/* Step-by-Step Adoption Process */}
      <section className="max-w-6xl w-full px-6 md:px-20 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1F1F1F] text-center">
          Step-by-Step Adoption Process
        </h2>
        <ol className="list-decimal list-inside space-y-6 text-lg md:text-xl">
          <li>
            <strong>Browse Kittens:</strong> Visit our "Our Kittens" page to explore our available Mainecoons.
          </li>
          <li>
            <strong>Inquiry:</strong> Click the WhatsApp button on your preferred kitten’s card to contact our team.
          </li>
          <li>
            <strong>Consultation:</strong> Discuss your kitten’s health, temperament, vaccination records, and price with our cattery specialists.
          </li>
          <li>
            <strong>Reservation:</strong> Secure your kitten with a deposit, and we’ll schedule a pickup or delivery that works for you.
          </li>
          <li>
            <strong>Adoption Day:</strong> Receive your kitten with all medical records, accessories, and care instructions.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We provide lifetime guidance on nutrition, training, and health to ensure your kitten thrives.
          </li>
        </ol>
      </section>

      {/* Benefits of Adopting from Royal Mainecoon Cattery */}
      <section className="w-full bg-[#FFF8E7] py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#D4AF37]">Why Adopt From Us?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg md:text-xl max-w-3xl mx-auto">
          <li>Healthy kittens raised in a clean, nurturing environment.</li>
          <li>Well-socialized, affectionate, and playful companions.</li>
          <li>Champion bloodlines ensuring strong genetics and beautiful features.</li>
          <li>Lifelong support for nutrition, training, and health guidance.</li>
          <li>Transparent and trustworthy adoption process.</li>
        </ul>
      </section>

      {/* Adoption Requirements */}
      <section className="max-w-6xl w-full px-6 md:px-20 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1F1F1F] text-center">Adoption Requirements</h2>
        <p className="text-lg md:text-xl mb-4 text-center">
          To ensure each kitten goes to a loving and responsible home, we ask adopters to meet the following requirements:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg md:text-xl max-w-3xl mx-auto">
          <li>Provide a safe, indoor environment for your kitten.</li>
          <li>Commit to proper nutrition, grooming, and veterinary care.</li>
          <li>Be ready for the responsibilities of owning a Mainecoon.</li>
          <li>Respect the cattery’s guidelines for adoption and follow-up.</li>
        </ul>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full bg-[#FFF8E7] py-16 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#D4AF37] text-center">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl">
          <p>
            <strong>Q: Can I reserve a kitten before it’s born?</strong><br />
            A: We accept reservations on upcoming litters to ensure you get your preferred kitten.
          </p>
          <p>
            <strong>Q: What vaccinations and medical checks do kittens receive?</strong><br />
            A: All kittens are vet-checked, vaccinated, and dewormed before adoption.
          </p>
          <p>
            <strong>Q: Do you provide delivery?</strong><br />
            A: Yes, we offer safe pickup or delivery depending on your location.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="w-full py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1F1F1F]">
          Ready to Adopt Your Royal Mainecoon?
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
