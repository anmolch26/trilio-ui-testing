import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-HCE1YN2CNY', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  // Custom event tracking function
  const trackEvent = (
    eventName: string,
    parameters?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: eventName,
        ...parameters
      });
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, parameters?: Record<string, any>) => {
    trackEvent('button_click', {
      button_name: buttonName,
      ...parameters
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName: string, parameters?: Record<string, any>) => {
    trackEvent('form_submit', {
      form_name: formName,
      ...parameters
    });
  };

  // Track video interactions
  const trackVideoInteraction = (action: string, videoName: string, parameters?: Record<string, any>) => {
    trackEvent('video_interaction', {
      video_action: action,
      video_name: videoName,
      ...parameters
    });
  };

  // Track scroll depth
  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      scroll_percentage: depth
    });
  };

  // Track time on page
  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent('time_on_page', {
      time_seconds: timeInSeconds
    });
  };

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackVideoInteraction,
    trackScrollDepth,
    trackTimeOnPage
  };
}; 