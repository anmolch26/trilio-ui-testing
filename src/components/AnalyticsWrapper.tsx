import React, { useEffect } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import ScrollTracker from './ScrollTracker';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({ children }) => {
  const { trackTimeOnPage } = useAnalytics();

  useEffect(() => {
    const startTime = Date.now();

    // Track time on page when component unmounts
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 0) {
        trackTimeOnPage(timeSpent);
      }
    };
  }, [trackTimeOnPage]);

  return (
    <>
      <ScrollTracker />
      {children}
    </>
  );
};

export default AnalyticsWrapper; 