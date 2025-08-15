import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'backdrop-blur-md bg-white/30 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className=" rounded-full p-2 mr-3">
              <img src={logo} alt="Heart MM Logo" className="w-12 h-12 rounded-full object-contain" />
            </div>
           <a href="/"> <span className="text-xl font-bold text-[#DC2626]">Marrying Muslims</span></a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#howitworks" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              How It Works
            </a>
            <Link to='/login' className="text-[#DC2626] hover:text-red-600 transition-colors font-medium cursor-pointer">
              Login
            </Link>
            <Link to='/signup' className="bg-[#DC2626] hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors cursor-pointer">
              Sign Up
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-3 bg-white shadow rounded-lg p-4">
            <a href="#howitworks" className="block text-gray-600 hover:text-gray-900">
              How It Works
            </a>
            <Link to={'/login'} className="block text-red-500 hover:text-red-600 font-medium">
              Login
            </Link>
            <Link to={'/signup'} className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
