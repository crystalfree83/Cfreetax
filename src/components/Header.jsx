import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-brand-green ${
        isActive ? 'text-brand-green bg-brand-tarawera/50' : 'text-main'
      }`
    }
  >
    {children}
  </NavLink>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/client-intake', label: 'Start Here' },
    { path: '/book-appointment', label: 'Book Appointment' },
    { path: '/blog', label: 'Blog' },
    { path: '/tax-calculator', label: 'Tax Calculator' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-brand-shark/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 border-b border-brand-tarawera">
          <div className="flex items-center space-x-2 text-xs text-slate-300"> {/* Changed from brand-nevada */}
            <a href="tel:409-203-9138" className="flex items-center hover:text-brand-java transition-colors">
              <Phone size={14} className="mr-1" /> 409-203-9138
            </a>
            <span className="text-slate-400/50">|</span> {/* Changed from brand-nevada/50 */}
            <a href="mailto:crystalfree83@gmail.com" className="flex items-center hover:text-brand-java transition-colors">
              <Mail size={14} className="mr-1" /> crystalfree83@gmail.com
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            {/* User will upload logo here. Placeholder: */}
            <div className="w-10 h-10 bg-brand-java rounded-full flex items-center justify-center text-brand-black font-bold text-xl">
              CF
            </div>
            <span className="text-2xl font-bold gradient-text">
              C. Free Virtual Tax Services
            </span>
          </Link>
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map(link => <NavItem key={link.path} to={link.path}>{link.label}</NavItem>)}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-main hover:text-brand-green">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-brand-shark/90 pb-4"
        >
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-brand-green ${
                    isActive ? 'text-brand-green bg-brand-tarawera/50' : 'text-main'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;