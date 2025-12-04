import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B1B0D] font-royal">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & Description */}
        <div className="space-y-4 flex flex-col items-start">
          {/* Logo */}
          <img 
            src="/logo.jpg" 
            alt="Royal Mainecoon Logo" 
            className="h-12 w-12 object-contain rounded-full"
          />
          <h2 className="text-3xl font-extrabold" style={{ color: "#FFD700" }}>
            Royal Mainecoon
          </h2>
          <p className="text-[#FFF8E7]">
            Home of majestic Mainecoon kittens. Raised with love and care, from champion bloodlines.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://wa.me/15038099855" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaWhatsapp />
            </a>
            <a href="mailto:royalmainecoon@example.com" className="hover:text-white transition-colors">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#FFD700" }}>Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-[#FFF8E7] hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-[#FFF8E7] hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/kittens" className="text-[#FFF8E7] hover:text-white transition-colors">Our Kittens</Link>
            </li>
            <li>
              <Link to="/adopt" className="text-[#FFF8E7] hover:text-white transition-colors">How to Adopt</Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#FFF8E7] hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#FFD700" }}>Contact</h3>
          <p className="text-[#FFF8E7] mb-2">
            WhatsApp: <a href="https://wa.me/15038099855" className="hover:text-white transition-colors">+1 503-809-9855</a>
          </p>
          <p className="text-[#FFF8E7] mb-2">
            Email: <a href="mailto:royalmainecoon@example.com" className="hover:text-white transition-colors">royalmainecoon@example.com</a>
          </p>
          <p className="text-[#FFF8E7]">
            Address: 123 Mainecoon Ave, Your City, Country
          </p>
        </div>

      </div>

      <div className="bg-black text-[#FFF8E7] text-center py-4">
        &copy; {new Date().getFullYear()} Royal Mainecoon Cattery. All rights reserved.
      </div>
    </footer>
  );
}
 