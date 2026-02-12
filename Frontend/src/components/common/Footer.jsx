// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-green-100 via-teal-100 to-green-100 text-black mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">M9Vends</h2>
          <p className="mt-3 text-sm text-black-100">
            Smart vending solutions for modern food businesses.  
            Automation, hygiene, and efficiency designed for scale.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#00F8F0]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#00F8F0]">About</Link></li>
            <li><Link to="/projects" className="hover:text-[#00F8F0]">Projects</Link></li>
            <li><Link to="/careers" className="hover:text-[#00F8F0]">Careers</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/helpdesk" className="hover:text-[#00F8F0]">Help Desk</Link></li>
            <li><Link to="/helpdesk" className="hover:text-[#00F8F0]">Terms & Policy</Link></li>
            <li><Link to="/contact" className="hover:text-[#00F8F0]">Contact</Link></li>
          </ul>
        </div>

        {/* Product Summary */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Product</h3>
          <p className="text-sm text-black-100">
            Semi-Automated Pani-Puri Vending System with sensor-based operation,
            food-grade pipelines, continuous mixing, and mobile cart design.
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm text-black-200">
        © {new Date().getFullYear()} M9Vends. All rights reserved.
      </div>
    </footer>
  );
}
