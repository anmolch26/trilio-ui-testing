import React from 'react';
import { useTheme } from '../hooks/useTheme';

// Import logos
import amazonLogo from '../assets/amazonLogo.png';
import amazonDarkLogo from '../assets/amazonDarkLogo.png';
import shopifyLogo from '../assets/shopifyBagLogo.png';
import googleLogo from '../assets/Ga4BarLogo.png';
import metaLogo from '../assets/metaAdsLogo.png';
import klaviyoLogo from '../assets/klaviyoLogo.png';

const SupportedPlatforms: React.FC = () => {
  const { theme } = useTheme();

  const platforms = [
    {
      name: 'Amazon',
      logo: theme === 'dark' ? amazonDarkLogo : amazonLogo,
      color: '#FF9900'
    },
    {
      name: 'Shopify',
      logo: shopifyLogo,
      color: '#7AB55C'
    },
    {
      name: 'Google Analytics',
      logo: googleLogo,
      color: '#4285F4'
    },
    {
      name: 'Meta Ads',
      logo: metaLogo,
      color: '#3B5998'
    },
    {
      name: 'Klaviyo',
      logo: klaviyoLogo,
      color: '#00C1B2'
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Supported Platforms</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Seamlessly integrate with your favorite e-commerce platforms
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
        {platforms.map((platform) => (
          <div 
            key={platform.name}
            className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: `${platform.color}10` }}
          >
            <img 
              src={platform.logo} 
              alt={`${platform.name} logo`}
              className="h-12 w-auto mb-4 object-contain"
            />
            <span className="font-medium">{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedPlatforms; 