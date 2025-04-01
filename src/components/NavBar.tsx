
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { useTheme } from '../hooks/useTheme';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Why Channel IQ', href: '#why-channeliq' },
    { name: 'Join Waitlist', href: '#waitlist' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-2xl font-semibold text-channeliq-blue">Channel <span className="text-channeliq-indigo">IQ</span></span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-channeliq-blue transition-colors interactive-element"
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href="#waitlist" 
                className="btn-primary text-sm py-2 px-4 interactive-element"
              >
                Join Waitlist
              </a>
            </div>
          </div>
          
          {/* Theme toggle */}
          <div className="ml-4 flex items-center">
            <Toggle 
              pressed={theme === 'dark'} 
              onPressedChange={toggleTheme}
              className="p-2 interactive-element"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Toggle>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden ml-2">
            <button
              type="button"
              className="interactive-element inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-channeliq-blue focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="interactive-element block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-channeliq-blue hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 py-3">
            <a 
              href="#waitlist" 
              className="interactive-element block w-full text-center btn-primary text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
