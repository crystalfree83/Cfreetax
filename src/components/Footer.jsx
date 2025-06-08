import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-tiber text-main py-12"> {/* Changed text-brand-iron to text-main */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-brand-java mb-4">C. Free Virtual Tax Services</h3>
            <p className="text-sm text-description">"Taxes Made Easy. Virtually."</p> {/* Changed text-brand-nevada to text-description */}
            <div className="mt-4 flex space-x-4">
              {/* Placeholder for social media icons if needed */}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-java mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/client-intake" className="hover:text-brand-green transition-colors">Start Here</Link></li>
              <li><Link to="/faq" className="hover:text-brand-green transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-security" className="hover:text-brand-green transition-colors">Privacy & Security</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-java mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-brand-green" />
                <a href="tel:409-203-9138" className="hover:text-brand-green transition-colors">409-203-9138</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-brand-green" />
                <a href="mailto:crystalfree83@gmail.com" className="hover:text-brand-green transition-colors">crystalfree83@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-brand-green" />
                <span>Virtual Services - Nationwide</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-tarawera pt-8 text-center text-sm text-description"> {/* Changed text-brand-nevada to text-description */}
          <p>&copy; {currentYear} C. Free Virtual Tax Services. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy-security" className="hover:text-brand-green transition-colors">Privacy Policy</Link> | 
            <span className="mx-1">Site by Hostinger Horizons</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;