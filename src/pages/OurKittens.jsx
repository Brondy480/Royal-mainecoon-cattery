import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Sample kittens array (replace with all 41 kittens)

const kittens = [
  // --- Older kittens (1 - 20) ---
  {
    name: "Leo",
    image: "/kitten1.jpg",
    temperament: "Playful & Affectionate",
    weight: "3.5kg",
    sex: "Male",
    age: "5 months",
    price: "$1,200",
    available: true,
  },
  {
    name: "Luna",
    image: "/kitten2.jpg",
    temperament: "Calm & Gentle",
    weight: "3.1kg",
    sex: "Female",
    age: "6 months",
    price: "$1,350",
    available: false,
  },
  {
    name: "Milo",
    image: "/kitten3.jpg",
    temperament: "Curious & Friendly",
    weight: "3.4kg",
    sex: "Male",
    age: "5 months",
    price: "$1,250",
    available: true,
  },
  {
    name: "Bella",
    image: "/kitten4.jpg",
    temperament: "Soft & Loving",
    weight: "3.0kg",
    sex: "Female",
    age: "5 months",
    price: "$1,450",
    available: true,
  },
  {
    name: "Thor",
    image: "/kitten5.jpg",
    temperament: "Energetic & Protective",
    weight: "3.8kg",
    sex: "Male",
    age: "7 months",
    price: "$1,550",
    available: true,
  },
  {
    name: "Nala",
    image: "/kitten6.jpg",
    temperament: "Gentle & Confident",
    weight: "3.2kg",
    sex: "Female",
    age: "6 months",
    price: "$1,420",
    available: false,
  },
  {
    name: "Simba",
    image: "/kitten7.jpg",
    temperament: "Bold & Adventurous",
    weight: "3.7kg",
    sex: "Male",
    age: "7 months",
    price: "$1,500",
    available: true,
  },
  {
    name: "Chloe",
    image: "/kitten8.jpg",
    temperament: "Sweet & Curious",
    weight: "3.1kg",
    sex: "Female",
    age: "5 months",
    price: "$1,300",
    available: true,
  },
  {
    name: "Max",
    image: "/kitten9.jpg",
    temperament: "Playful & Loyal",
    weight: "3.6kg",
    sex: "Male",
    age: "6 months",
    price: "$1,450",
    available: true,
  },
  {
    name: "Zara",
    image: "/kitten10.jpg",
    temperament: "Calm & Intelligent",
    weight: "3.2kg",
    sex: "Female",
    age: "5 months",
    price: "$1,480",
    available: true,
  },
  {
    name: "Oscar",
    image: "/kitten11.jpg",
    temperament: "Friendly & Social",
    weight: "3.5kg",
    sex: "Male",
    age: "6 months",
    price: "$1,390",
    available: true,
  },
  {
    name: "Daisy",
    image: "/kitten12.jpg",
    temperament: "Gentle & Affectionate",
    weight: "3.0kg",
    sex: "Female",
    age: "4 months",
    price: "$1,420",
    available: false,
  },
  {
    name: "Rocky",
    image: "/kitten13.jpg",
    temperament: "Strong & Energetic",
    weight: "3.9kg",
    sex: "Male",
    age: "7 months",
    price: "$1,600",
    available: true,
  },
  {
    name: "Cleo",
    image: "/kitten14.jpg",
    temperament: "Elegant & Calm",
    weight: "3.3kg",
    sex: "Female",
    age: "5 months",
    price: "$1,470",
    available: true,
  },
  {
    name: "Charlie",
    image: "/kitten15.jpg",
    temperament: "Happy & Playful",
    weight: "3.4kg",
    sex: "Male",
    age: "5 months",
    price: "$1,350",
    available: true,
  },
  {
    name: "Ivy",
    image: "/kitten16.jpg",
    temperament: "Sweet & Gentle",
    weight: "3.1kg",
    sex: "Female",
    age: "4 months",
    price: "$1,490",
    available: true,
  },
  {
    name: "Hunter",
    image: "/kitten17.jpg",
    temperament: "Alert & Confident",
    weight: "3.8kg",
    sex: "Male",
    age: "7 months",
    price: "$1,550",
    available: true,
  },
  {
    name: "Ruby",
    image: "/kitten18.jpg",
    temperament: "Charming & Soft",
    weight: "3.0kg",
    sex: "Female",
    age: "4 months",
    price: "$1,390",
    available: true,
  },
  {
    name: "Zeus",
    image: "/kitten19.jpg",
    temperament: "Strong & Fearless",
    weight: "3.9kg",
    sex: "Male",
    age: "8 months",
    price: "$1,650",
    available: false,
  },
  {
    name: "Stella",
    image: "/kitten20.jpg",
    temperament: "Smart & Calm",
    weight: "3.2kg",
    sex: "Female",
    age: "5 months",
    price: "$1,480",
    available: true,
  },

  // --- New Young Kittens (21 - 41) ---
  {
    name: "Pumpkin",
    image: "/kitten21.jpg",
    temperament: "Gentle & Curious",
    weight: "1.2kg",
    sex: "Male",
    age: "10 weeks",
    price: "$900",
    available: true,
  },
  {
    name: "Willow",
    image: "/kitten22.jpg",
    temperament: "Soft & Playful",
    weight: "1.1kg",
    sex: "Female",
    age: "9 weeks",
    price: "$950",
    available: true,
  },
  {
    name: "Nova",
    image: "/kitten23.jpg",
    temperament: "Calm & Observant",
    weight: "1.3kg",
    sex: "Female",
    age: "11 weeks",
    price: "$980",
    available: true,
  },
  {
    name: "Arlo",
    image: "/kitten24.jpg",
    temperament: "Energetic & Fun",
    weight: "1.4kg",
    sex: "Male",
    age: "12 weeks",
    price: "$1,000",
    available: true,
  },
  {
    name: "Snow",
    image: "/kitten25.jpg",
    temperament: "Quiet & Sweet",
    weight: "1.1kg",
    sex: "Female",
    age: "9 weeks",
    price: "$920",
    available: true,
  },
  {
    name: "Misty",
    image: "/kitten26.jpg",
    temperament: "Shy & Loving",
    weight: "1.0kg",
    sex: "Female",
    age: "8 weeks",
    price: "$900",
    available: true,
  },
  {
    name: "Bear",
    image: "/kitten27.jpg",
    temperament: "Cuddly & Friendly",
    weight: "1.5kg",
    sex: "Male",
    age: "12 weeks",
    price: "$1,020",
    available: true,
  },
  {
    name: "Pearl",
    image: "/kitten28.jpg",
    temperament: "Elegant & Calm",
    weight: "1.2kg",
    sex: "Female",
    age: "10 weeks",
    price: "$960",
    available: true,
  },
  {
    name: "Jasper",
    image: "/kitten29.jpg",
    temperament: "Adventurous & Fun",
    weight: "1.4kg",
    sex: "Male",
    age: "12 weeks",
    price: "$1,000",
    available: true,
  },
  {
    name: "Mocha",
    image: "/kitten30.jpg",
    temperament: "Warm & Affectionate",
    weight: "1.3kg",
    sex: "Female",
    age: "11 weeks",
    price: "$1,020",
    available: true,
  },
  {
    name: "Echo",
    image: "/kitten31.jpg",
    temperament: "Calm & Sweet",
    weight: "1.2kg",
    sex: "Male",
    age: "10 weeks",
    price: "$950",
    available: true,
  },
  {
    name: "Hazel",
    image: "/kitten32.jpg",
    temperament: "Smart & Friendly",
    weight: "1.3kg",
    sex: "Female",
    age: "10 weeks",
    price: "$980",
    available: true,
  },
  {
    name: "Marble",
    image: "/kitten33.jpg",
    temperament: "Playful & Curious",
    weight: "1.1kg",
    sex: "Male",
    age: "9 weeks",
    price: "$930",
    available: true,
  },
  {
    name: "Olive",
    image: "/kitten34.jpg",
    temperament: "Soft & Gentle",
    weight: "1.2kg",
    sex: "Female",
    age: "10 weeks",
    price: "$960",
    available: true,
  },
  {
    name: "Shadow",
    image: "/kitten35.jpg",
    temperament: "Quiet & Observant",
    weight: "1.3kg",
    sex: "Male",
    age: "11 weeks",
    price: "$970",
    available: true,
  },
  {
    name: "Amber",
    image: "/kitten36.jpg",
    temperament: "Sweet & Calm",
    weight: "1.0kg",
    sex: "Female",
    age: "8 weeks",
    price: "$900",
    available: true,
  },
  {
    name: "Ash",
    image: "/kitten37.jpg",
    temperament: "Curious & Playful",
    weight: "1.2kg",
    sex: "Male",
    age: "10 weeks",
    price: "$950",
    available: true,
  },
  {
    name: "Elsa",
    image: "/kitten38.jpg",
    temperament: "Soft & Friendly",
    weight: "1.1kg",
    sex: "Female",
    age: "9 weeks",
    price: "$920",
    available: true,
  },
  {
    name: "River",
    image: "/kitten39.jpg",
    temperament: "Calm & Playful",
    weight: "1.3kg",
    sex: "Male",
    age: "11 weeks",
    price: "$980",
    available: true,
  },
  {
    name: "Maple",
    image: "/kitten40.jpg",
    temperament: "Gentle & Cuddly",
    weight: "1.1kg",
    sex: "Female",
    age: "9 weeks",
    price: "$940",
    available: true,
  },
  {
    name: "Blossom",
    image: "/kitten41.jpg",
    temperament: "Sweet & Elegant",
    weight: "1.2kg",
    sex: "Female",
    age: "10 weeks",
    price: "$960",
    available: true,
  },
];


const adopters = [
  "/adopter1.jpg",
  "/adopter2.jpg",
  "/adopter3.jpg",
  "/adopter4.jpg",
  "/adopter5.jpg",
  "/adopter6.jpg",
  "/adopter7.jpg",
  "/adopter8.jpg",
];


export default function OurKittens() {
  const [filters, setFilters] = useState({ sex: "All", availability: "All", age: "All" });
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const kittensPerPage = 9;

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  // Filtered kittens
  const filtered = kittens.filter((k) => {
    const sexMatch = filters.sex === "All" || k.sex === filters.sex;
    const availMatch =
      filters.availability === "All" ||
      (filters.availability === "Available" && k.available) ||
      (filters.availability === "Reserved" && !k.available);
    const ageMatch =
      filters.age === "All" ||
      (filters.age === "Young" && k.age.includes("weeks")) ||
      (filters.age === "Older" && k.age.includes("months"));
    const searchMatch = k.name.toLowerCase().includes(search.toLowerCase());
    return sexMatch && availMatch && ageMatch && searchMatch;
  });

  // Sort by price
  if (sortPrice === "asc") filtered.sort((a, b) => a.price - b.price);
  if (sortPrice === "desc") filtered.sort((a, b) => b.price - a.price);

  // Pagination
  const indexOfLast = currentPage * kittensPerPage;
  const indexOfFirst = indexOfLast - kittensPerPage;
  const currentKittens = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / kittensPerPage);

  return (
    <div className="w-full font-royal text-royalDark bg-white flex flex-col">

      {/* HERO */}
      <section className="w-full py-20 px-6 md:px-20 text-center bg-[#FFF8E7]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#D4AF37]">Meet Our Kittens</h1>
        <p className="text-lg md:text-xl max-w-3xl mt-6 mx-auto">
          Raised with love, health, and care — each kitten is unique and ready for a royal home.
        </p>
      </section>

      {/* FILTERS & SEARCH */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-20 py-8 flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          className="px-4 py-2 rounded-lg border border-gray-300"
        />
        <select name="sex" value={filters.sex} onChange={handleFilterChange} className="px-4 py-2 rounded-lg border border-gray-300">
          <option value="All">All Sexes</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="availability" value={filters.availability} onChange={handleFilterChange} className="px-4 py-2 rounded-lg border border-gray-300">
          <option value="All">All Availability</option>
          <option value="Available">Available</option>
          <option value="Reserved">Reserved</option>
        </select>
        <select name="age" value={filters.age} onChange={handleFilterChange} className="px-4 py-2 rounded-lg border border-gray-300">
          <option value="All">All Ages</option>
          <option value="Young">Young (weeks)</option>
          <option value="Older">Older (months)</option>
        </select>
        <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-300">
          <option value="none">Sort by Price</option>
          <option value="asc">Price Low → High</option>
          <option value="desc">Price High → Low</option>
        </select>
      </section>

      {/* KITTENS GRID */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {currentKittens.length ? currentKittens.map((k, i) => (
            <div key={i} className="rounded-3xl shadow-xl bg-white p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <img src={k.image} className="rounded-2xl w-full h-80 object-cover mb-4" alt={k.name} />
              <h2 className="text-3xl font-bold mb-1">{k.name}</h2>
              <p className="text-lg">{k.temperament}</p>
              <p className="mt-1">Weight: {k.weight}</p>
              <p className="mt-1">Age: {k.age}</p>
              <p className="mt-1 font-semibold">Sex: {k.sex}</p>
              <p className="mt-2 text-xl font-bold">${k.price}</p>
              {k.available ? (
                <a
                  href="https://wa.me/15038099855"
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold shadow-md hover:scale-110 transition-all"
                  style={{ background: "linear-gradient(90deg, #FFD700, #FFC107)" }}
                >
                  <FaWhatsapp /> Inquire
                </a>
              ) : (
                <span className="mt-4 px-5 py-3 rounded-full bg-gray-400 text-white font-bold">Reserved</span>
              )}
            </div>
          )) : (
            <p className="text-center col-span-full text-lg text-gray-500">No kittens match your criteria.</p>
          )}
        </div>
      </section>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <section className="flex justify-center gap-4 py-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-full font-bold border ${
                currentPage === i + 1 ? "bg-[#FFD700] text-white" : "bg-white text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </section>
      )}
       {/* HAPPY ADOPTERS GALLERY */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-20 py-20">
        <h2 className="text-5xl font-extrabold text-center text-[#1F1F1F] mb-12">Happy Adopters</h2>
        <p className="text-center text-lg mb-10">
          Meet some of our wonderful families who have welcomed our royal Mainecoons into their homes!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {adopters.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={img} alt={`Adopter ${idx + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
