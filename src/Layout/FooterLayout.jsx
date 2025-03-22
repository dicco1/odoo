import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterLayout() {
  return (
    <footer className="bg-blue-800 text-white container mx-auto mt-auto sticky py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo va qisqacha ma'lumot */}
          <div>
            <h2 className="text-2xl font-bold">Protech</h2>
            <p className="mt-2 text-gray-300">Kelajak ilmini o‘rganing!</p>
          </div>

      
          <div>
            <h3 className="text-lg font-semibold">Foydali havolalar</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:underline">Asosiy</Link></li>
              <li><Link to="/fanlar" className="hover:underline">Fanlar</Link></li>
              <li><Link to="/about" className="hover:underline">Biz haqimizda</Link></li>
              <li><Link to="/contact" className="hover:underline">Aloqa</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Bizni kuzatib boring</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLayout;
