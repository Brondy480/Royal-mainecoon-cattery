import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-md px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo and site name */}
      <h1 className="flex items-center space-x-3 text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "Cinzel, serif", color: "#FFD700" }}>
        <img 
          src="/logo.jpg" 
          alt="Royal Mainecoon Logo" 
          className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full" 
        />
        <span>Royal Mainecoon Cattery</span>
      </h1>

      {/* Navigation Links */}
      <div className="space-x-6 text-gray-900 font-medium text-lg md:text-xl">
        <Link to="/" className="hover:underline hover:text-yellow-500 transition-colors">Home</Link>
        <Link to="/about" className="hover:underline hover:text-yellow-500 transition-colors">About Us</Link>
        <Link to="/kittens" className="hover:underline hover:text-yellow-500 transition-colors">Our Kittens</Link>
        <Link to="/adopt" className="hover:underline hover:text-yellow-500 transition-colors">How to Adopt</Link>
        <Link to="/contact" className="hover:underline hover:text-yellow-500 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
