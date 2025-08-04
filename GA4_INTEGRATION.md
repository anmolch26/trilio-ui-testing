# Google Analytics 4 (GA4) Integration

## Overview
This project has been integrated with Google Analytics 4 using the measurement ID `G-HCE1YN2CNY`. The integration includes automatic page tracking, scroll depth tracking, video interaction tracking, and custom event tracking.

## Features Implemented

### 1. Automatic Page Tracking
- **Page Views**: Automatically tracks all page views with proper page titles and URLs
- **Route Changes**: Tracks navigation between different pages in the React Router
- **Time on Page**: Automatically tracks how long users spend on each page

### 2. Scroll Depth Tracking
- **Automatic Tracking**: Tracks scroll depth at 25%, 50%, 75%, and 100%
- **One-time Events**: Each scroll depth is only tracked once per page visit
- **Performance Optimized**: Uses efficient scroll event handling

### 3. Video Interaction Tracking
- **Play/Pause Events**: Tracks when users play or pause videos
- **Mute/Unmute Events**: Tracks audio control interactions
- **Video Identification**: Tracks specific video names for better analytics

### 4. Button Click Tracking
- **CTA Buttons**: Tracks clicks on call-to-action buttons
- **Navigation Buttons**: Tracks navigation-related button clicks
- **Custom Parameters**: Includes additional context like page sections

### 5. Form Submission Tracking
- **Contact Forms**: Tracks form submissions
- **Newsletter Signups**: Tracks newsletter subscriptions
- **Custom Form Names**: Identifies different forms for better analytics

## Files Modified/Created

### 1. `index.html`
- Added GA4 script with measurement ID `G-HCE1YN2CNY`
- Configured for automatic page tracking

### 2. `src/hooks/useAnalytics.ts` (NEW)
- Custom hook for GA4 tracking
- Provides functions for tracking various events
- Handles page view tracking automatically

### 3. `src/components/ScrollTracker.tsx` (NEW)
- Component for tracking scroll depth
- Automatically tracks at 25%, 50%, 75%, 100%
- Performance optimized with debouncing

### 4. `src/components/AnalyticsWrapper.tsx` (NEW)
- Wrapper component for all pages
- Includes scroll tracking and time tracking
- Automatically applied to all routes

### 5. `src/App.tsx`
- Added AnalyticsWrapper to all routes
- Ensures all pages are tracked automatically

### 6. `src/components/ImageShowcaseSection.tsx`
- Added video interaction tracking
- Tracks play, pause, mute, unmute events

### 7. `src/components/Hero.tsx`
- Added button click tracking
- Tracks "See trilio in action" button clicks

## How to Use

### 1. Automatic Tracking
All pages are automatically tracked. No additional code needed for:
- Page views
- Scroll depth
- Time on page

### 2. Custom Event Tracking
Use the `useAnalytics` hook in any component:

```typescript
import { useAnalytics } from '../hooks/useAnalytics';

const MyComponent = () => {
  const { trackButtonClick, trackEvent } = useAnalytics();

  const handleClick = () => {
    trackButtonClick('my_button', { page_section: 'hero' });
  };

  const handleCustomEvent = () => {
    trackEvent('custom_event', { 
      event_category: 'engagement',
      event_label: 'my_custom_event'
    });
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
};
```

### 3. Available Tracking Functions

#### `trackEvent(eventName, parameters?)`
- Tracks custom events
- Parameters are optional

#### `trackButtonClick(buttonName, parameters?)`
- Tracks button clicks
- Includes button name and optional parameters

#### `trackFormSubmission(formName, parameters?)`
- Tracks form submissions
- Includes form name and optional parameters

#### `trackVideoInteraction(action, videoName, parameters?)`
- Tracks video interactions (play, pause, mute, unmute)
- Includes action type and video name

#### `trackScrollDepth(depth)`
- Tracks scroll depth percentage
- Usually called automatically by ScrollTracker

#### `trackTimeOnPage(timeInSeconds)`
- Tracks time spent on page
- Usually called automatically by AnalyticsWrapper

## Events Tracked

### Page Views
- **Event**: `page_view`
- **Parameters**: `page_title`, `page_location`, `page_path`

### Scroll Depth
- **Event**: `scroll_depth`
- **Parameters**: `scroll_percentage` (25, 50, 75, 100)

### Video Interactions
- **Event**: `video_interaction`
- **Parameters**: `video_action`, `video_name`

### Button Clicks
- **Event**: `button_click`
- **Parameters**: `button_name`, `page_section`

### Form Submissions
- **Event**: `form_submit`
- **Parameters**: `form_name`

### Time on Page
- **Event**: `time_on_page`
- **Parameters**: `time_seconds`

## Adding New Pages

When you add new pages, they will be automatically tracked because:

1. **AnalyticsWrapper** is applied to all routes in `App.tsx`
2. **useAnalytics** hook automatically tracks page views
3. **ScrollTracker** automatically tracks scroll depth
4. **Time tracking** is automatically applied

### For Custom Tracking on New Pages

```typescript
import { useAnalytics } from '../hooks/useAnalytics';

const NewPage = () => {
  const { trackButtonClick } = useAnalytics();

  return (
    <div>
      <button onClick={() => trackButtonClick('new_page_button')}>
        New Page Button
      </button>
    </div>
  );
};
```

## Testing

### 1. Real-time Reports
- Check GA4 Real-time reports to see events
- Events should appear within seconds

### 2. Debug Mode
- Open browser console to see GA4 debug information
- Look for `gtag` function calls

### 3. Common Events to Test
- Page navigation (should see page_view events)
- Scroll to bottom of page (should see scroll_depth events)
- Video interactions (should see video_interaction events)
- Button clicks (should see button_click events)

## Troubleshooting

### 1. Events Not Appearing
- Check if GA4 script is loaded in browser console
- Verify measurement ID is correct
- Check for JavaScript errors

### 2. Scroll Tracking Not Working
- Ensure ScrollTracker component is included
- Check if scroll events are being fired
- Verify GA4 configuration

### 3. Video Tracking Issues
- Check if video elements have proper event handlers
- Verify video interaction functions are called
- Test with different video formats

## Performance Considerations

- **Debounced Scroll Events**: Scroll tracking is optimized to prevent excessive events
- **One-time Events**: Scroll depth events are only fired once per page
- **Efficient Event Handling**: All tracking functions are optimized for performance
- **Conditional Loading**: GA4 script loads asynchronously

## Future Enhancements

1. **Enhanced E-commerce Tracking**: Add product view, add to cart, purchase events
2. **User Engagement Tracking**: Track user sessions, engagement time
3. **Conversion Tracking**: Track specific conversion goals
4. **A/B Testing Integration**: Track different variants
5. **Custom Dimensions**: Add custom user properties and dimensions

## Support

For issues with GA4 integration:
1. Check browser console for errors
2. Verify GA4 property settings
3. Test with GA4 debug mode
4. Check real-time reports for event delivery 