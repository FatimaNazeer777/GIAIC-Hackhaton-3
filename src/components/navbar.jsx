"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdPerson, IoMdSearch, IoMdHeartEmpty, IoMdCart, IoMdMenu } from "react-icons/io";
import { useSearch } from "../../context/searchContext";

const Navbar = ({ bgColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  // Toggle menu visibility on small screens
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`flex items-center justify-between bg-${bgColor} text-white w-full px-8 py-4 shadow-md`}>
      {/* Logo Section */}
      <div className="text-lg font-bold text-black">
        {/* <Link href="/">Logo</Link> */}
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex gap-8 text-black text-base font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="hidden lg:block px-3 py-1 border rounded text-black"
        />
        <Link href="/profile">
          <IoMdPerson className="text-2xl text-black" />
        </Link>
        <IoMdHeartEmpty className="text-2xl text-black cursor-pointer" />
        <Link href="/cart">
          <IoMdCart className="text-2xl text-black" />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <IoMdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center py-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="py-2 text-base font-medium" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/shop" className="py-2 text-base font-medium" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>
        <Link href="/blog" className="py-2 text-base font-medium" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        <Link href="/contact" className="py-2 text-base font-medium" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;