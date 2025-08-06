import { useEffect, useRef } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

const ScrollTracker = () => {
  const { trackScrollDepth } = useAnalytics();
  const lastTrackedDepth = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track scroll depth at 25%, 50%, 75%, and 100%
      if (scrollPercent >= 25 && lastTrackedDepth.current < 25) {
        trackScrollDepth(25);
        lastTrackedDepth.current = 25;
      } else if (scrollPercent >= 50 && lastTrackedDepth.current < 50) {
        trackScrollDepth(50);
        lastTrackedDepth.current = 50;
      } else if (scrollPercent >= 75 && lastTrackedDepth.current < 75) {
        trackScrollDepth(75);
        lastTrackedDepth.current = 75;
      } else if (scrollPercent >= 100 && lastTrackedDepth.current < 100) {
        trackScrollDepth(100);
        lastTrackedDepth.current = 100;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);

  return null; // This component doesn't render anything
};

export default ScrollTracker; 