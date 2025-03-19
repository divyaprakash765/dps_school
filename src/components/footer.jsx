import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* CONTACT US */}
        <div>
          <h3 className="text-2xl font-bold mb-3">CONTACT US ↓</h3>
          <p className="font-semibold">DELHI PUBLIC SCHOOL, </p>
          <p>Narhan Estate,Smastipur, Bihar - 831016</p>
          <p><strong>Email:</strong> <a href="mailto:davnitjsr@yahoo.co.in" className="underline">davnitjsr@yahoo.co.in</a></p>
          <p><strong>Phone:</strong> 0657-3562164</p>
          <p><strong>Website:</strong> <a href="http://davnitjsr.org" className="underline">davnitjsr.org</a></p>
          
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-black p-2 rounded-full"><FaFacebookF size={20} /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaInstagram size={20} /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaYoutube size={20} /></a>
            <a href="#" className="bg-black p-2 rounded-full"><FaXTwitter size={20} /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold mb-3">QUICK LINKS ↓</h3>
          <ul className="space-y-2">
            {["SOCIAL AWARENESS", "ACHIEVEMENTS", "FACULTY LIST", "LMC MEMBERS", "FEEDBACK", "CALENDAR", "CYBER SECURITY"].map((link, index) => (
              <li key={index} className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* LOCATION MAP */}
        <div>
          <h3 className="text-2xl font-bold mb-3">LOCATION MAP ↓</h3>
          <iframe
            className="w-full h-48 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3614818323244!2d86.20367817531382!3d22.612532979489554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e06c58bb9b5a3fb%3A0x3a6fbb11c3f254f3!2sDAV%20Public%20School%2C%20NIT%20Campus!5e0!3m2!1sen!2sin!4v1710362912345!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </footer>
  );
}
