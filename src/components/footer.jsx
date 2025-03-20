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
          <p>Narhan Estate,Smastipur, Bihar - 848211</p>
          <p><strong>Email:</strong> <a href="mailto:dpsnarhan@gmail.com" className="underline">dpsnarhan@gmail.com</a></p>
          <p><strong>Phone:</strong> 8210202407</p>
          <p><strong>Website:</strong> <a href="http://davnitjsr.org" className="underline">dpsnarhan.com</a></p>
          
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

      </div>
    </footer>
  );
}
