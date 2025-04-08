import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Toggle } from './ui/toggle';
import { useTheme } from '../hooks/useTheme';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation when URL changes
  useEffect(() => {
    if (location.hash) {
      // Delay to ensure page is fully loaded and components are rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isHomePage = location.pathname === '/';

  // Handle nav link click for smooth scrolling
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (!isHomePage && href.startsWith('/#')) {
      e.preventDefault();
      navigate('/', { state: { scrollToSection: href.split('#')[1] } });
    }
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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-semibold text-channeliq-blue">Channel <span className="text-channeliq-indigo">IQ</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-foreground/80 hover:text-channeliq-blue transition-colors interactive-element"
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              
              {isHomePage ? (
                <a 
                  href="#waitlist" 
                  className="btn-primary text-sm py-2 px-4 interactive-element"
                  onClick={(e) => handleNavLinkClick(e, '/#waitlist')}
                >
                  Join Waitlist
                </a>
              ) : (
                <Link 
                  to="/" 
                  className="btn-primary text-sm py-2 px-4 interactive-element"
                >
                  Back to Home
                </Link>
              )}
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
              onClick={(e) => {
                handleNavLinkClick(e, link.href);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 py-3">
            {isHomePage ? (
              <a 
                href="#waitlist" 
                className="interactive-element block w-full text-center btn-primary text-sm"
                onClick={(e) => {
                  handleNavLinkClick(e, '/#waitlist');
                  setIsMobileMenuOpen(false);
                }}
              >
                Join Waitlist
              </a>
            ) : (
              <Link 
                to="/" 
                className="interactive-element block w-full text-center btn-primary text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Back to Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
