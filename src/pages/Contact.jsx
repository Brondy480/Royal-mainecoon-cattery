import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center text-center px-6 md:px-20 py-20 bg-royalCream font-royal text-royalDark">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6"
          style={{ color: "#D4AF37" }}
        >
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10">
          We’re here to answer all your questions about adopting and caring for
          your Mainecoon kitten. Reach out to us anytime — we’re happy to help!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/15038099855"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg"
            style={{ background: "linear-gradient(90deg, #D4AF37, #B8860B)" }}
          >
            <FaWhatsapp size={26} /> WhatsApp
          </a>

          <a
            href="mailto:royalmainecoon@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-lg bg-gray-800 hover:bg-gray-900 transition"
          >
            <FaEnvelope size={24} /> Email
          </a>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FaPhone size={30} className="mx-auto mb-3 text-royalDark" />
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-lg">+1 (503) 809-9855</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FaEnvelope size={30} className="mx-auto mb-3 text-royalDark" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-lg">royalmainecoon@example.com</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FaMapMarkerAlt size={30} className="mx-auto mb-3 text-royalDark" />
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p className="text-lg">Portland, Oregon</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl px-6 md:px-20 py-16">
        <h2
          className="text-4xl font-extrabold text-center mb-10"
          style={{ color: "#D4AF37" }}
        >
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-10 rounded-3xl shadow-xl">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-royalDark"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-royalDark"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-royalDark"
          />

          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-royalDark"
          />

          <textarea
            placeholder="Your Message"
            className="border col-span-1 md:col-span-2 border-gray-300 rounded-xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-royalDark"
          />

          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-royalDark py-4 rounded-xl text-white font-bold text-lg hover:bg-black transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-5xl px-6 md:px-20 pb-20">
        <h2
          className="text-4xl font-extrabold text-center mb-8"
          style={{ color: "#D4AF37" }}
        >
          Our Location
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Portland Oregon Map"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.318526068093!2d-122.67620798443993!3d45.52306497910157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a44aa3e3f1%3A0x1f7f4d93b8f311e2!2sPortland%20Downtown%2C%20OR!5e0!3m2!1sen!2sus!4v1700000000000"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
