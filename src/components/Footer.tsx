import React, { useState } from 'react';
import PolicyModal from './modal/policy';
import { useTheme } from '../hooks/useTheme';

const Footer: React.FC = () => {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'} border-t`}>
      <div className="section-container py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-channeliq-blue">Channel<span className="text-channeliq-indigo">IQ</span></span>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6 max-w-md`}>
              The AI-powered e-commerce intelligence platform that helps brands optimize their online presence and performance.
            </p>
          </div>
          
          <div>
            <h3 className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'} text-sm font-semibold uppercase tracking-wider mb-4`}>Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#features" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-channeliq-blue transition-colors`}>AI Insights</a></li>
              <li><a href="#features" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-channeliq-blue transition-colors`}>Ad Optimization</a></li>
              <li><a href="#features" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-channeliq-blue transition-colors`}>Inventory Management</a></li>
              <li><a href="#features" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-channeliq-blue transition-colors`}>Content Optimization</a></li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} border-t`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-sm`}>
              &copy; {new Date().getFullYear()} ChannelIQ. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setIsPolicyModalOpen(true)}
                className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-sm hover:text-channeliq-blue transition-colors`}
              >
                Privacy Policy
              </button>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-sm hover:text-channeliq-blue transition-colors`}>Terms of Service</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-sm hover:text-channeliq-blue transition-colors`}>Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <PolicyModal 
        isOpen={isPolicyModalOpen} 
        onClose={() => setIsPolicyModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;

